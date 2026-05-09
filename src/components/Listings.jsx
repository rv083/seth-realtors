import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const mockProperties = [
  {
    id: 1,
    title: 'The Platinum Residence',
    location: 'Sector 150, Noida',
    type: 'Villa',
    price: '₹ 8.5 Cr',
    description: 'Ultra-luxurious 5BHK villa featuring a private pool, massive terrace, and smart home automation.',
    images: [
      'https://images.unsplash.com/photo-1613490906232-9c16bc3b7083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    title: 'Aura Commercial Hub',
    location: 'Sector 62, Noida',
    type: 'Commercial',
    price: '₹ 15 Cr',
    description: 'Premium grade-A office space in the heart of the IT hub, complete with floor-to-ceiling glass.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    title: 'Skywalk Penthouses',
    location: 'Sector 78, Noida',
    type: 'Apartment',
    price: '₹ 4.2 Cr',
    description: 'Breathtaking 4BHK penthouse with panoramic views of the city skyline and premium amenities.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecde1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 4,
    title: 'Emerald Estates',
    location: 'Sector 137, Noida',
    type: 'Apartment',
    price: '₹ 2.8 Cr',
    description: 'Modern 3BHK high-rise apartment with lush green surroundings and zero-edge swimming pool access.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687931-5701ce2b9826?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 5,
    title: 'The Golden Plot',
    location: 'Sector 143, Noida',
    type: 'Plot',
    price: '₹ 5.5 Cr',
    description: 'Exclusive 500 sq. yard plot in a fully secured gated community. Build your dream mansion.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 6,
    title: 'Oasis Grandeur',
    location: 'Sector 128, Noida',
    type: 'Villa',
    price: '₹ 12 Cr',
    description: 'Majestic golf-facing property featuring classic architecture, private spa, and landscaped gardens.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const PropertyCard = ({ property, onEnquire }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
      }}
    >
      <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={property.images[currentImageIndex]}
            alt={property.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
          />
        </AnimatePresence>
        
        {/* Type Badge */}
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'var(--gold)', color: 'var(--charcoal)', padding: '6px 12px',
          borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold'
        }}>
          {property.type}
        </div>

        {/* Carousel controls */}
        {property.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              style={{
                position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%',
                width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 2
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              style={{
                position: 'absolute', top: '50%', right: '8px', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%',
                width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 2
              }}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--charcoal)' }}>{property.title}</h3>
        <p style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666', fontSize: '0.9rem', marginBottom: '16px' }}>
          <MapPin size={16} /> {property.location}
        </p>
        <p style={{ color: '#444', fontSize: '0.95rem', marginBottom: '24px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {property.description}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #eee' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--charcoal)' }}>{property.price}</span>
          <button 
            onClick={() => onEnquire(property.title)}
            style={{
              background: 'transparent', border: '1px solid var(--charcoal)', color: 'var(--charcoal)',
              padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, transition: 'all 0.3s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--charcoal)'; e.currentTarget.style.color = 'white'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--charcoal)'; }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Listings = () => {
  const [filter, setFilter] = useState('All');
  
  const handleEnquire = (propertyTitle) => {
    // Save to local storage or state to autofill
    window.sessionStorage.setItem('selectedProperty', propertyTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const types = ['All', 'Apartment', 'Villa', 'Commercial', 'Plot'];

  const filteredProperties = filter === 'All' 
    ? mockProperties 
    : mockProperties.filter(p => p.type === filter);

  return (
    <section id="listings" className="section-padding" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            Exclusive <span className="text-gold">Listings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: '#666', maxWidth: '600px', margin: '0 auto 2rem auto' }}
          >
            Discover our handpicked selection of ultra-premium properties across Noida.
          </motion.p>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}
          >
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '30px',
                  border: '1px solid var(--gold)',
                  background: filter === type ? 'var(--gold)' : 'transparent',
                  color: filter === type ? 'var(--black)' : 'var(--charcoal)',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'all 0.3s'
                }}
              >
                {type}
              </button>
            ))}
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onEnquire={handleEnquire} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
