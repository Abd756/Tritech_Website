import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certificatesData from '../data/certificatesData';

export default function HomeCertificatesSection() {
    const [selectedCert, setSelectedCert] = useState(null);

    const openCertificate = (cert) => setSelectedCert(cert);
    const closeCertificate = () => setSelectedCert(null);

    return (
        <section className="w-full py-20 bg-gray-50 overflow-hidden" id="certificates">
            <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col items-center">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6 tracking-tight">
                        Our <span className="text-primary">Certifications</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 text-lg max-w-3xl text-center">
                        We are committed to quality and compliance, recognized by leading industry bodies.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-4">
                    {certificatesData.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            className="group bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center hover:shadow-2xl hover:border-orange-200 transition-all duration-300 relative overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => openCertificate(cert)}
                        >
                            {/* Logo Container */}
                            <div className="h-40 w-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={cert.logo}
                                    alt={cert.title}
                                    className="max-h-full max-w-full object-contain transition-all duration-500"
                                />
                            </div>

                            <h3 className="text-gray-800 font-bold text-center group-hover:text-primary transition-colors mb-2 md:mb-8 text-lg">
                                {cert.title}
                            </h3>

                            {/* Mobile-only CTA */}
                            <div className="md:hidden mt-2 mb-4">
                                <span className="text-primary text-sm font-semibold border border-primary px-4 py-1 rounded-full">
                                    Tap to View
                                </span>
                            </div>

                            {/* Hover Overlay Button (Desktop) */}
                            <div className="absolute inset-0 bg-primary/90 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-white text-primary px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View Certificate
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* PDF Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCertificate}
                    >
                        <motion.div
                            className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
                                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                                <button
                                    onClick={closeCertificate}
                                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* PDF Viewer using iframe */}
                            <div className="flex-1 bg-gray-100 relative">
                                <iframe
                                    src={`${selectedCert.pdf}#toolbar=0`}
                                    className="w-full h-full"
                                    title={selectedCert.title}
                                >
                                </iframe>
                                {/* Fallback link if iframe has issues */}
                                <div className="absolute bottom-4 right-6">
                                    <a href={selectedCert.pdf} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline bg-white px-3 py-1 rounded shadow">
                                        Open in New Tab
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
