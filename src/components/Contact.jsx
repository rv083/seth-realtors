import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: '',
    message: ''
  });

  useEffect(() => {
    // Check if there is a selected property to pre-fill
    const selected = window.sessionStorage.getItem('selectedProperty');
    if (selected) {
      setFormData(prev => ({ ...prev, property: selected }));
      window.sessionStorage.removeItem('selectedProperty');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our luxury property consultant will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', property: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            Get In <span className="text-gold">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}
          >
            Reach out to our experts for exclusive viewings and premium real estate consultation in Noida.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              flex: '1 1 350px',
              background: 'var(--charcoal)',
              color: 'white',
              padding: '40px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--gold)' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                <MapPin size={24} color="var(--gold)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Office Address</h4>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Seth Realtors HQ,<br/>Sector 62, Noida,<br/>Uttar Pradesh 201309</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                <Phone size={24} color="var(--gold)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Phone Number</h4>
                <a href="tel:+919876543210" style={{ color: '#ccc', textDecoration: 'none' }}>+91 98765 43210</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                <MessageCircle size={24} color="#25D366" />
              </div>
              <div>
                <h4 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>WhatsApp</h4>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>+91 98765 43210</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                <Mail size={24} color="var(--gold)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '4px', fontSize: '1.1rem' }}>Email</h4>
                <a href="mailto:info@sethrealtors.com" style={{ color: '#ccc', textDecoration: 'none' }}>info@sethrealtors.com</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              flex: '2 1 500px',
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontWeight: 500 }}>Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', background: '#f9f9f9' }} placeholder="John Doe" />
                </div>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="phone" style={{ fontWeight: 500 }}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', background: '#f9f9f9' }} placeholder="+91 98765 43210" />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontWeight: 500 }}>Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', background: '#f9f9f9' }} placeholder="john@example.com" />
                </div>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="property" style={{ fontWeight: 500 }}>Property Interested In</label>
                  <input type="text" id="property" name="property" value={formData.property} onChange={handleChange} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', background: '#f9f9f9' }} placeholder="e.g. The Platinum Residence" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontWeight: 500 }}>Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', background: '#f9f9f9', resize: 'vertical' }} placeholder="I would like to schedule a viewing..."></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '10px', width: '100%', padding: '16px' }}>
                Send Enquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
