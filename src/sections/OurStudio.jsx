import React from 'react';

export default function OurStudio() { 
  return (
    <section className="section py-5 my-0" id="studio">
      <div className="container px-6">
        {/* Top Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ OUR STUDIO ]
          </span>
        </div>

        <div className="columns is-variable is-8 is-desktop">
          
          {/* Left Column - Image */}
          <div className="column is-4">
            <figure className="image" style={{ height: '100%', minHeight: '480px', overflow: 'hidden' }}>
              <img 
                src="/assets/images/our_studio.jpg" 
                alt="Our Studio" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </figure>
          </div>

          {/* Right Column - Content */}
          <div className="column is-8 is-flex is-flex-direction-column is-justify-content-center">
            
            {/* Main Heading */}
            <h2 className="title" style={{ 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
              lineHeight: '1.1', 
              fontWeight: 400, 
              fontFamily: 'Cormorant Garamond, serif',
              marginBottom: '4rem',
              color: '#FFFFFF'
            }}>
              A small studio <br/>
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>for spaces</span> 
              that feel <br className="is-hidden-mobile" /> genuinely lived in.
            </h2>

            {/* Paragraphs Split */}
            <div className="columns is-variable is-6 mb-6">
              <div className="column is-6">
                <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
                  Unico Interiors is the interior arm of Unico International &mdash; a practice working at the intersection of architecture, craft and everyday ritual. We design from first principles: light, plan, material, detail.
                </p>
              </div>
              <div className="column is-6">
                <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
                  We keep our roster small so that every project carries the same attention &mdash; from the brief and the first concept sketch to the final coat of paint and the handover photograph.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="columns is-mobile is-multiline" style={{ borderTop: '1px solid #374151', paddingTop: '2.5rem' }}>
              <div className="column is-4-desktop is-6-mobile">
                <div className="is-size-1 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF', lineHeight: '1' }}>12+</div>
                <div className="is-uppercase is-size-7 has-text-weight-bold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>YEARS IN PRACTICE</div>
              </div>
              <div className="column is-4-desktop is-6-mobile">
                <div className="is-size-1 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF', lineHeight: '1' }}>90+</div>
                <div className="is-uppercase is-size-7 has-text-weight-bold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>SPACES DELIVERED</div>
              </div>
              <div className="column is-4-desktop is-12-mobile mt-4-mobile">
                <div className="is-size-1 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF', lineHeight: '1' }}>18</div>
                <div className="is-uppercase is-size-7 has-text-weight-bold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>CITIES & COUNTING</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  ); 
}
