import React, { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "“The detail and texture they brought to our home surpassed anything we imagined. A truly quiet, collaborative process.”",
      author: "Elena R.",
      role: "FOUNDER, OLA STUDIO"
    },
    {
      quote: "“Every proportion was carefully measured, and the materials selected aged beautifully. They understand the rhythm of space.”",
      author: "Julian M.",
      role: "RESIDENCE OWNER, CASA LUMEN"
    },
    {
      quote: "“Drawings on time, site visits on time, decisions explained clearly. That alone made the project a pleasure.”",
      author: "Faisal K.",
      role: "DIRECTOR, ATRIUM GROUP"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Start on 3rd testimonial to match image (3 / 3)

  return (
    <section className="section py-5 my-0" id="testimonials">
      
      {/* Part 1: Trusted By Banner */}
      <div className="container px-6 mb-6">
        <div style={{ borderTop: '1px solid #374151', borderBottom: '1px solid #374151', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
          
          <div className="columns is-mobile is-vcentered mb-5">
            <div className="column is-6">
              <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
                [ TRUSTED BY ]
              </span>
            </div>
            <div className="column is-6 has-text-right">
              <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>
                (12 COLLABORATORS)
              </span>
            </div>
          </div>

          <div className="columns is-multiline is-mobile is-vcentered has-text-centered mt-4">
            <div className="column is-3-desktop is-6-mobile py-4">
              <span className="is-size-3" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', color: '#FFFFFF' }}>
                Lumin & Co. <span className="ml-2" style={{ color: '#A855F7', fontSize: '0.8em', fontStyle: 'normal' }}>+</span>
              </span>
            </div>
            <div className="column is-3-desktop is-6-mobile py-4">
              <span className="is-size-3" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', color: '#FFFFFF' }}>
                North Atelier <span className="ml-2" style={{ color: '#A855F7', fontSize: '0.8em', fontStyle: 'normal' }}>+</span>
              </span>
            </div>
            <div className="column is-3-desktop is-6-mobile py-4">
              <span className="is-size-3" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', color: '#FFFFFF' }}>
                Studio Karak <span className="ml-2" style={{ color: '#A855F7', fontSize: '0.8em', fontStyle: 'normal' }}>+</span>
              </span>
            </div>
            <div className="column is-3-desktop is-6-mobile py-4">
              <span className="is-size-3" style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic', color: '#FFFFFF' }}>
                Vihaan Living <span className="ml-2" style={{ color: '#A855F7', fontSize: '0.8em', fontStyle: 'normal' }}>+</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Part 2: Testimonials Slider */}
      <div className="container px-6 mt-6 pt-6">
        
        {/* Header Labels */}
        <div className="columns is-mobile mb-6">
          <div className="column is-6">
            <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
              [ VOICES &middot; WHAT PEOPLE SAY ]
            </span>
          </div>
          <div className="column is-6 has-text-right">
            <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>
              ({activeIndex + 1} / {testimonials.length})
            </span>
          </div>
        </div>

        {/* Quote Content */}
        <div className="columns my-6 py-4">
          <div className="column is-10-desktop is-offset-1-desktop">
            <p className="is-size-2 has-text-left" style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontStyle: 'italic', 
              color: '#FFFFFF',
              lineHeight: '1.4',
              minHeight: '180px'
            }}>
              {testimonials[activeIndex].quote}
            </p>
          </div>
        </div>

        {/* Footer Area: Author and Slider Controls */}
        <div className="columns is-vcentered is-mobile mt-6">
          
          {/* Author Details with border prefix */}
          <div className="column is-8 is-flex is-align-items-center">
            <div style={{ width: '40px', height: '1px', backgroundColor: '#374151', marginRight: '1.5rem' }}></div>
            <div>
              <div className="is-size-6 has-text-weight-semibold" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
                {testimonials[activeIndex].author}
              </div>
              <div className="is-size-7 is-uppercase" style={{ color: '#9CA3AF', letterSpacing: '0.05em', fontFamily: 'Poppins, sans-serif', marginTop: '0.2rem' }}>
                {testimonials[activeIndex].role}
              </div>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="column is-4 is-flex is-justify-content-flex-end">
            <div className="is-flex" style={{ gap: '0.8rem' }}>
              {testimonials.map((_, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  style={{ 
                    width: '35px', 
                    height: '2px', 
                    backgroundColor: idx === activeIndex ? '#FFFFFF' : '#374151',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
