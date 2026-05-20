import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#000000', padding: '6rem 1.5rem 3rem 1.5rem' }}>
      <div className="container px-6">
        
        {/* Large Branding Logo */}
        <div className="has-text-centered mb-6 py-6" style={{ overflow: 'hidden' }}>
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 10rem)', 
            lineHeight: '0.85', 
            fontFamily: 'Poppins, sans-serif', 
            fontWeight: 300, 
            letterSpacing: '-0.02em', 
            color: '#FFFFFF' 
          }}>
            UNICO
          </h1>
          <h1 className="serif-italic" style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 10rem)', 
            lineHeight: '0.85', 
            fontFamily: 'Poppins, sans-serif', 
            fontStyle: 'italic', 
            fontWeight: 300, 
            letterSpacing: '-0.02em', 
            color: '#A855F7',
            marginTop: '0.5rem'
          }}>
            INTERIORS
          </h1>
        </div>

        {/* Bottom copyright bar */}
        <div className="columns is-mobile is-multiline pt-5 mt-6" style={{ borderTop: '1px solid #374151' }}>
          
          {/* Copyright info */}
          <div className="column is-6-desktop is-12-mobile">
            <span className="is-uppercase is-size-7 has-text-weight-bold" style={{ letterSpacing: '0.1em', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
              &copy; 2026 UNICO INTERNATIONAL &ndash; INTERIORS DIVISION
            </span>
          </div>

          {/* Tagline */}
          <div className="column is-6-desktop is-12-mobile has-text-right-desktop mt-2-mobile">
            <span className="is-uppercase is-size-7 has-text-weight-bold" style={{ letterSpacing: '0.1em', color: '#9CA3AF', fontFamily: 'Inter, sans-serif' }}>
              DESIGNED SLOWLY &middot; BUILT WITH CARE
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
