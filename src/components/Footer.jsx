import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--black)', color: 'white', paddingTop: '80px', paddingBottom: '30px' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '40px',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '60px',
          marginBottom: '30px'
        }}>
          
          <div style={{ flex: '1 1 min(100%, 300px)' }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.8rem', letterSpacing: '2px', color: 'var(--white)', marginBottom: '20px' }}>
              SETH REALTORS
            </h2>
            <p style={{ color: '#999', lineHeight: '1.6', marginBottom: '24px', maxWidth: '350px' }}>
              Curating the finest luxury residential and commercial properties across Noida. Your trusted partner in premium real estate.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '30px', display: 'flex', transition: 'background 0.3s', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.currentTarget.style.background='var(--gold)'} onMouseOut={(e) => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                Instagram
              </a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '30px', display: 'flex', transition: 'background 0.3s', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.currentTarget.style.background='var(--gold)'} onMouseOut={(e) => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                LinkedIn
              </a>
              <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '10px 16px', borderRadius: '30px', display: 'flex', transition: 'background 0.3s', textDecoration: 'none', fontSize: '0.9rem' }} onMouseOver={(e) => e.currentTarget.style.background='var(--gold)'} onMouseOut={(e) => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                Facebook
              </a>
            </div>
          </div>

          <div style={{ flex: '1 1 min(100%, 200px)' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--gold)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#home" style={{ color: '#ccc', transition: 'color 0.3s' }} onMouseOver={(e)=>e.target.style.color='white'} onMouseOut={(e)=>e.target.style.color='#ccc'}>Home</a></li>
              <li><a href="#listings" style={{ color: '#ccc', transition: 'color 0.3s' }} onMouseOver={(e)=>e.target.style.color='white'} onMouseOut={(e)=>e.target.style.color='#ccc'}>Exclusive Listings</a></li>
              <li><a href="#about" style={{ color: '#ccc', transition: 'color 0.3s' }} onMouseOver={(e)=>e.target.style.color='white'} onMouseOut={(e)=>e.target.style.color='#ccc'}>About Us</a></li>
              <li><a href="#contact" style={{ color: '#ccc', transition: 'color 0.3s' }} onMouseOver={(e)=>e.target.style.color='white'} onMouseOut={(e)=>e.target.style.color='#ccc'}>Contact</a></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 min(100%, 200px)' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--gold)' }}>Locations</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ color: '#ccc' }}>Sector 150, Noida</li>
              <li style={{ color: '#ccc' }}>Sector 62, Noida</li>
              <li style={{ color: '#ccc' }}>Sector 78, Noida</li>
              <li style={{ color: '#ccc' }}>Sector 137, Noida</li>
            </ul>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Seth Realtors. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            style={{ 
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background='white'; e.currentTarget.style.color='var(--black)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='white'; }}
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
