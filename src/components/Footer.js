import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2a47] text-white pt-10 pb-4 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo & Company */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <img src="/tritech_logo_2.png" alt="TriTech Logo" className="h-14 w-auto mb-2" />
          <span className="font-bold text-lg tracking-wide">TRI TECH (PVT) LIMITED</span>
          <span className="text-sm mt-1 uppercase tracking-wider text-gray-300">With Might and Main</span>
        </div>
        {/* Address & Contact */}
        <div className="text-sm mb-6 md:mb-0">
          <span className="font-semibold text-lg border-b-2 border-primary mb-4 inline-block">Head Office</span>
          <address className="not-italic mt-2 leading-relaxed text-gray-300">
            21 km off Ferozepur Road,<br />
            Masjid Ibrahim Street,<br />
            Lahore-Pakistan PO 54760
          </address>
          <div className="mt-4 space-y-1 text-gray-300">
            <p className="flex items-center gap-2">
              <span className="font-bold text-white uppercase tracking-tight">NTN:</span>
              <span>3373173-0</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-bold text-white uppercase tracking-tight">GST:</span>
              <span>03-00-9998-332-91</span>
            </p>
            <div className="pt-2">
              <span className="font-bold text-white block mb-1">Contact Numbers:</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                <a href="tel:+92423527011" className="hover:text-primary transition-colors">042-3527011</a>
                <a href="tel:+92423527012" className="hover:text-primary transition-colors">042-3527012</a>
                <a href="tel:+92423527014" className="hover:text-primary transition-colors">042-3527014</a>
                <a href="tel:+92423527015" className="hover:text-primary transition-colors">042-3527015</a>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <span className="font-semibold text-base">Quick Links</span>
          <ul className="mt-2 space-y-1">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="#" className="hover:text-accent">About Us</Link></li>
            <li><Link href="#" className="hover:text-accent">Products</Link></li>
            <li><Link href="#" className="hover:text-accent">Services</Link></li>
            <li><Link href="#" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <span className="font-semibold text-base">Follow Us</span>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="LinkedIn" className="hover:text-accent"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-accent"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.326-1.326z" /></svg></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white border-opacity-20 mt-8 pt-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} TRI TECH (PVT) LIMITED. All rights reserved.
      </div>
    </footer>
  );
}
