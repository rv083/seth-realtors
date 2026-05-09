import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 ${
        isScrolled ? 'glass-dark' : 'bg-transparent text-white'
      }`}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <div className="logo" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px', color: isScrolled ? '#fff' : '#fff' }}>
        SETH REALTORS
      </div>
      
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
    </motion.nav>
  );
};

export default Navbar;
