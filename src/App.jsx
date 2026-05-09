import { Suspense, lazy } from 'react';

// Lazy load components for better performance
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Listings = lazy(() => import('./components/Listings'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// A simple modern loader (skeleton)
const Loader = () => (
  <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--black)', color: 'var(--gold)' }}>
    <div style={{ fontFamily: 'Outfit', fontSize: '2rem', letterSpacing: '4px', animation: 'pulse 1.5s infinite' }}>SETH REALTORS</div>
    <style>{`
      @keyframes pulse {
        0% { opacity: 0.5; }
        50% { opacity: 1; text-shadow: 0 0 20px rgba(212, 175, 55, 0.5); }
        100% { opacity: 0.5; }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main>
          <Hero />
          <Listings />
          <About />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
