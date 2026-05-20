import React from 'react';

export default function FeaturedWorks() {
  const leftWorks = [
    { title: 'Casa Lumen', type: 'RESIDENCE', year: '2025', src: '/assets/images/casa_lumen.jpg' },
    { title: 'Marble & Moss', type: 'CAFE', year: '2024', src: '/assets/images/marbal.jpg' },
    { title: 'Veil House', type: 'VILLA', year: '2023', src: '/assets/images/veil_house.jpg' },
    { title: 'Terra Hall', type: 'MARKET', year: '2022', src: '/assets/images/terra_hall.jpg' },
  ];

  const rightWorks = [
    { title: 'Atelier No. 7', type: 'STUDIO', year: '2024', src: '/assets/images/atilier.jpg' },
    { title: 'Quiet Quarter', type: 'APARTMENT', year: '2023', src: '/assets/images/quite_quarter.jpg' },
  ];

  const WorkCard = ({ work }) => (
    <div className="work-card mb-6 pb-6">
      <figure className="image mb-4" style={{ overflow: 'hidden', backgroundColor: '#111827', height: '380px' }}>
        <img 
          src={work.src} 
          alt={work.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </figure>
      <h3 className="is-size-3 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#FFFFFF', fontWeight: 400 }}>
        {work.title}
      </h3>
      <div className="is-flex is-justify-content-space-between is-align-items-center" style={{ borderTop: '1px solid #374151', paddingTop: '1rem' }}>
        <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>
          {work.type}
        </span>
        <span className="is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>
          {work.year}
        </span>
      </div>
    </div>
  );

  return (
    <section className="section is-medium pt-6 mt-6" id="works">
      <div className="container px-6">
        
        {/* Top Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ FEATURED WORKS ]
          </span>
        </div>

        {/* Heading Area */}
        <div className="columns is-vcentered mb-6 is-mobile is-multiline">
          <div className="column is-8-desktop is-12-mobile">
            <h2 className="title" style={{ 
              fontSize: '2.5rem', 
              lineHeight: '1.2', 
              fontWeight: 400, 
              fontFamily: 'Cormorant Garamond, serif',
              color: '#FFFFFF',
              marginBottom: 0
            }}>
              Spaces <br />
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>we've</span> shaped.
            </h2>
          </div>
          <div className="column is-4-desktop is-12-mobile has-text-right-desktop mt-4-mobile">
            <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>
              (06 SELECTED &middot; 90+ ARCHIVE)
            </span>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="columns mt-6 pt-4">
          
          {/* Left Column (Wider, spans 7/12) */}
          <div className="column is-7">
            {leftWorks.map((work, idx) => (
              <WorkCard key={`left-${idx}`} work={work} />
            ))}
          </div>

          {/* Right Column (Narrower, spans 4/12 with 1/12 gap, staggered down) */}
          <div className="column is-4 is-offset-1" style={{ paddingTop: '15%' }}>
            {rightWorks.map((work, idx) => (
              <WorkCard key={`right-${idx}`} work={work} />
            ))}
          </div>

        </div>

        {/* Centered Button */}
        <div className="has-text-centered mt-6 pt-5">
          <button className="button is-rounded is-white is-outlined px-6" style={{ 
            height: '50px', 
            letterSpacing: '0.1em',
            borderWidth: '1px',
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          >
            <span className="is-size-7 has-text-weight-bold">SEE FULL ARCHIVE</span>
            <span className="ml-2 is-size-6" style={{ fontWeight: 400 }}>↗</span>
          </button>
        </div>

      </div>
    </section>
  ); 
}
