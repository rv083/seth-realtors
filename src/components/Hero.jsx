import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--black)' }}>
      <motion.div
        style={{
          y: y1,
          opacity: opacity,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />
      <div 
        className="container"
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
        >
          Find Your <span className="text-gold">Dream Property</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '600px', marginBottom: '3rem', opacity: 0.9 }}
        >
          Premium residential and commercial properties curated by Seth Realtors. Experience luxury living in Noida.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#listings" className="btn-primary" style={{ textDecoration: 'none' }}>View Listings</a>
          <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>Contact Us</a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'white', zIndex: 10 }}
      >
        <a href="#listings" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.7 }}>
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px',textTransform: 'uppercase', marginBottom: '8px' }}>Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
