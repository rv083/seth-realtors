import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Listings', href: '#listings' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 ${
          isScrolled || isMobileMenuOpen ? 'glass-dark' : 'bg-transparent text-white'
        }`}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div className="logo" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px', color: '#fff', zIndex: 60 }}>
          SETH REALTORS
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 500,
                  fontSize: '1rem',
                  color: 'inherit',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => (e.target.style.color = 'var(--gold)')}
                onMouseOut={(e) => (e.target.style.color = 'inherit')}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            Contact Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu" style={{ color: '#fff' }}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--charcoal)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 600,
                  fontSize: '2rem',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => (e.target.style.color = 'var(--gold)')}
                onMouseOut={(e) => (e.target.style.color = 'white')}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              onClick={toggleMenu}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="btn-primary"
              style={{ marginTop: '2rem', textDecoration: 'none', fontSize: '1.2rem', padding: '16px 32px' }}
            >
              Contact Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
