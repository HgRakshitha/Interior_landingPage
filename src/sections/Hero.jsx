import React from 'react';

export default function Hero() { 
  return (
    <section className="pt-6 mt-5">
      {/* Hero Content Container */}
      <div className="container px-6 mb-6 pb-6">
        
        {/* Top Brand Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ UNICO INTERIORS &middot; STUDIO FOR SPACES ]
          </span>
        </div>

        <div className="columns">
          <div className="column is-8">
            {/* Main Typography Heading */}
            <h1 className="title" style={{ 
              fontSize: 'clamp(4rem, 8vw, 7.5rem)', 
              lineHeight: '1.05', 
              fontWeight: 400, 
              letterSpacing: '-0.02em', 
              marginBottom: '2.5rem',
              color: '#FFFFFF'
            }}>
              <span className="is-block" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                DESIGNING
              </span>
              <span className="is-block" style={{ fontFamily: 'Cormorant Garamond, serif', whiteSpace: 'nowrap' }}>
                <span className="serif-italic pr-3" style={{ color: '#A855F7', fontStyle: 'italic' }}>QUIET</span>
                INTERIORS.
              </span>
            </h1>

            {/* Subheading / Paragraph */}
            <p className="subtitle is-size-5" style={{ 
              maxWidth: '650px', 
              lineHeight: '1.6', 
              color: '#D1D5DB', 
              marginBottom: '3rem', 
              fontFamily: 'Inter, sans-serif' 
            }}>
              We are a small studio shaping homes, restaurants and workplaces<br />
              with a slow, material-first approach &mdash; anchored in light, proportion<br />
              and the way a place is actually used.
            </p>

            {/* Call to Actions */}
            <div className="is-flex is-align-items-center is-flex-wrap-wrap" style={{ gap: '2.5rem' }}>
              <button className="button is-rounded px-6 unico-gradient-btn" style={{ 
                height: '54px', 
                letterSpacing: '0.1em'
              }}>
                <span className="is-size-7 has-text-weight-bold">SEE SELECTED WORKS</span>
                <span className="ml-2 is-size-6" style={{ fontWeight: 400 }}>↗</span>
              </button>
              
              <a href="#project" className="is-uppercase is-size-7 has-text-weight-bold unico-gradient-text" style={{ 
                letterSpacing: '0.1em', 
                display: 'flex', 
                alignItems: 'center',
                textDecoration: 'none'
              }}>
                START A PROJECT <span className="ml-2 is-size-5" style={{ fontWeight: 400, WebkitTextFillColor: '#9333ea' }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Bleed Image */}
      <div style={{ width: '100%', backgroundColor: '#000000' }}>
        <img 
          src="/assets/images/hero.jpg" 
          alt="Quiet Minimalist Interior Design" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            minHeight: '50vh', 
            maxHeight: '65vh',
            objectFit: 'cover', 
            display: 'block' 
          }} 
        />
      </div>
    </section>
  ); 
}
