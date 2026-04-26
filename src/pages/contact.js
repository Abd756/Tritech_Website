import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ----------------------------------------------------------------------------------
         1. HERO SECTION
         ---------------------------------------------------------------------------------- */}
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-gray-900 overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/ContactUs-Page-Banner.png" // Correct path based on your public folder structure
            alt="ContactUs Background"
            className="w-full h-full object-cover"
          />
          {/* Light Overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow">Future</span> Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or need technical support? Our expert team is ready to help you optimize your industrial operations.
          </motion.p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------
         2. CONTACT CONTENT
         ---------------------------------------------------------------------------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6 translate-y-[-4rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: Contact info & Map */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 h-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Office <span className="text-primary">Information</span></h2>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed italic">21 km off Ferozepur Road, Masjid Ibrahim Street, Lahore-Pakistan PO 54760</p>
                  </div>
                </div>

                {/* Contact details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Phone</h3>
                      <p className="text-gray-900 font-semibold">042-3527011 / 12 / 14 / 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</h3>
                      <p className="text-gray-900 font-semibold">info@tritech.com.pk</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 h-80 rounded-3xl overflow-hidden shadow-inner border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13632.744111305416!2d74.3721343!3d31.3283246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a9a3b63b63b3%3A0x63b63b3b63b63b3b!2sFerozepur%20Rd%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703340000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-slate-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-2">Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow">Message</span></h2>
                <p className="text-gray-400 mb-8">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-300 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">Subject</label>
                    <select
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-gray-900">Select Inquiry Type</option>
                      <option value="quote" className="bg-gray-900">Request a Quote</option>
                      <option value="technical" className="bg-gray-900">Technical Support</option>
                      <option value="parts" className="bg-gray-900">Spare Parts Inquiry</option>
                      <option value="other" className="bg-gray-900">Other Information</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-300 ml-1">Message</label>
                    <textarea
                      required
                      placeholder="Tell us about your requirements..."
                      rows="5"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${formState === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-primary text-white hover:bg-primary shadow-lg hover:shadow-primary/30'
                      }`}
                  >
                    {formState === 'idle' && (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </>
                    )}
                    {formState === 'sending' && (
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {formState === 'success' && (
                      <>
                        Message Sent!
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
