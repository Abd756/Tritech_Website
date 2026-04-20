
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { useState, useEffect } from 'react';


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a2a47] shadow-xl py-2' : 'bg-white shadow-md py-4'
      }`}>
      <div className="w-full flex items-center h-16 px-4">
        <div className="flex items-center flex-shrink-0 ml-2 md:ml-6">
          <Link href="/" className={`flex items-center p-2 rounded-xl transition-colors ${isScrolled ? 'bg-white' : ''}`}>
            <img src="/tritech_logo_2.png" alt="TriTech Logo" className="h-12 md:h-16 w-auto" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center px-4">
            <ActiveLink href="/" scrolled={isScrolled}>Home</ActiveLink>
            <ActiveLink href="#" scrolled={isScrolled}>About Us</ActiveLink>
            <ActiveLink href="#" scrolled={isScrolled}>Products</ActiveLink>
            <ActiveLink href="#" scrolled={isScrolled}>Services</ActiveLink>
            <ActiveLink href="#" scrolled={isScrolled}>Contact Us</ActiveLink>
          </div>
          {/* Mobile menu button and menu */}
          <div className="md:hidden flex items-center">
            <MobileMenu isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ isScrolled }) {
  const [open, setOpen] = useState(false);
  // Helper to close drawer on link click
  const handleLinkClick = () => setOpen(false);
  return (
    <div className="relative z-50">
      <button
        className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${isScrolled ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-accent hover:text-white'
          } focus:outline-none focus:ring-2 focus:ring-accent`}
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-2xl flex flex-col py-8 px-6 space-y-4 animate-slide-in z-50">

            <ActiveLink href="/" >
              <span onClick={handleLinkClick}>Home</span>
            </ActiveLink>
            <ActiveLink href="#">
              <span onClick={handleLinkClick}>About Us</span>
            </ActiveLink>
            <ActiveLink href="#">
              <span onClick={handleLinkClick}>Products</span>
            </ActiveLink>
            <ActiveLink href="#">
              <span onClick={handleLinkClick}>Services</span>
            </ActiveLink>
            <ActiveLink href="#">
              <span onClick={handleLinkClick}>Contact Us</span>
            </ActiveLink>
          </div>
        </>
      )}
      {/* Drawer animation */}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
}
