import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ end, duration, title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
        
        setCount(Math.floor(end * easeOut));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '20px' }}>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--gold)', fontFamily: 'Outfit, sans-serif' }}>
        {count}+
      </div>
      <div style={{ fontSize: '1.1rem', color: '#ccc', marginTop: '8px' }}>
        {title}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--charcoal)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 500px' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Why Choose <span className="text-gold">Seth Realtors?</span>
            </h2>
            <p style={{ color: '#ccc', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              As trusted realtor consultants in Noida, we specialize in curating premium residential and commercial properties. Our approach is founded on absolute transparency, deep market expertise, and an unwavering commitment to customer satisfaction.
            </p>
            <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Whether you are looking for an ultra-luxury apartment in Sector 150 or a prime commercial space in Sector 62, our dedicated team ensures your real estate journey is seamless, luxurious, and highly rewarding.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
                 <span>Transparent Dealing</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
                 <span>Premium Portfolio</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              flex: '1 1 400px', 
              background: 'rgba(255,255,255,0.05)', 
              borderRadius: '20px', 
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}
          >
            <div style={{ gridColumn: '1 / -1' }}>
              <Counter end={2500} duration={2000} title="Properties Sold" />
            </div>
            <Counter end={1200} duration={2000} title="Happy Clients" />
            <Counter end={15} duration={2000} title="Years Experience" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
