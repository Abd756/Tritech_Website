import Link from 'next/link';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { label: "Cable Management Accessories", slug: "cable-management-accessories" },
  { label: "Power Extensions", slug: "power-extensions" },
  { label: "Power Factor Improvement", slug: "power-factor-improvement" },
  { label: "Process Instrumentation", slug: "process-instrumentation" },
  { label: "Plant Services", slug: "plant-services" }
];

const products = [
  { label: "All Products", slug: "" },
  { label: "LV Switchgear", slug: "lv-switchgear" },
  { label: "MCC", slug: "mcc" },
  { label: "PLC Panels", slug: "plc-panels" }
];

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const NavItemWithDropdown = ({ label, items, id, scrolled }) => {
    const isOpen = activeDropdown === id;
    const isParentActive = router.asPath.startsWith(`/${id}`);

    return (
      <div className="relative group" ref={id === activeDropdown ? dropdownRef : null}>
        <button
          onClick={() => setActiveDropdown(isOpen ? null : id)}
          onMouseEnter={() => setActiveDropdown(id)}
          className={`flex items-center px-5 py-2 rounded-xl transition-all duration-300 font-bold text-sm tracking-wide ${isOpen
            ? scrolled ? 'bg-primary text-white shadow-lg' : 'bg-primary text-white shadow-lg'
            : isParentActive
              ? scrolled ? 'text-white bg-white/20' : 'text-primary bg-red-50'
              : scrolled ? 'text-blue-100 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-primary hover:bg-gray-100'
            }`}
        >
          {label}
          <svg className={`ml-2 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-3 border border-gray-100 z-[60]"
            >
              {items.map((item, idx) => {
                const itemHref = (id === 'products' || id === 'services') ? (item.slug ? `/${id}/${item.slug}` : `/${id}`) : '#';
                const isActive = router.asPath === itemHref;
                
                return (
                  <Link
                    key={idx}
                    href={itemHref}
                    className={`block px-6 py-3 text-sm transition-colors font-medium border-b border-gray-50 last:border-0 ${
                      isActive 
                        ? 'text-primary bg-red-50' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {(id === 'products' || id === 'services') ? item.label : item}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

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
            <ActiveLink href="/about" scrolled={isScrolled}>About Us</ActiveLink>
            <NavItemWithDropdown label="Products" items={products} id="products" scrolled={isScrolled} />
            <NavItemWithDropdown label="Services" items={services} id="services" scrolled={isScrolled} />
            <ActiveLink href="/contact" scrolled={isScrolled}>Contact Us</ActiveLink>
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
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleLinkClick = () => {
    setOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const MobileDropdown = ({ label, items, section }) => {
    const isExpanded = expandedSection === section;
    const isParentActive = router.asPath.startsWith(`/${section}`);

    return (
      <div className="flex flex-col">
        <button
          onClick={() => toggleSection(section)}
          className={`flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-300 font-bold text-sm tracking-wide ${
            isParentActive ? 'text-primary bg-red-50' : 'text-gray-600 hover:text-primary hover:bg-gray-100'
          }`}
        >
          {label}
          <svg className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-gray-50 rounded-xl ml-4 mt-1"
            >
              {items.map((item, idx) => {
                const itemHref = (section === 'products' || section === 'services') ? (item.slug ? `/${section}/${item.slug}` : `/${section}`) : '#';
                const isActive = router.asPath === itemHref;
                
                return (
                  <Link
                    key={idx}
                    href={itemHref}
                    onClick={handleLinkClick}
                    className={`block px-6 py-3 text-sm transition-colors border-b border-gray-100 last:border-0 ${
                      isActive 
                        ? 'text-primary bg-red-50/50 font-bold' 
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {(section === 'products' || section === 'services') ? item.label : item}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

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
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl flex flex-col py-8 px-4 space-y-2 z-50 overflow-y-auto"
            >
              <div className="mb-6 px-2">
                <img src="/tritech_logo_2.png" alt="TriTech Logo" className="h-12 w-auto" />
              </div>

              <Link href="/" onClick={handleLinkClick} className="px-5 py-3 rounded-xl font-bold text-sm text-gray-600 hover:text-primary hover:bg-gray-100">
                Home
              </Link>
              <Link href="/about" onClick={handleLinkClick} className="px-5 py-3 rounded-xl font-bold text-sm text-gray-600 hover:text-primary hover:bg-gray-100">
                About Us
              </Link>
              
              <MobileDropdown label="Products" items={products} section="products" />
              <MobileDropdown label="Services" items={services} section="services" />

              <Link href="/contact" onClick={handleLinkClick} className="px-5 py-3 rounded-xl font-bold text-sm text-gray-600 hover:text-primary hover:bg-gray-100">
                Contact Us
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
