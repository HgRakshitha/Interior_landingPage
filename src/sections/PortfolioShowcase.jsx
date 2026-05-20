import React, { useState } from 'react';

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: 'Ebon Haven',
      category: 'Public Space',
      location: 'Calicut, Kerala',
      desc: 'A luxury modern library and community lounge space designed with rich dark wood paneling, warm ambient lights, and minimalist craftsmanship.',
      image: '/assets/images/ebon_haven.png'
    },
    {
      title: 'Club Sulaimani',
      category: 'Commercial Cafe',
      location: 'Calicut Beach',
      desc: 'An iconic coastal cafe featuring warm concrete textures, bespoke teakwood installations, and large ocean-view windows.',
      image: '/assets/images/club_sulaimani.png'
    },
    {
      title: 'Traya Living',
      category: 'Residential Villa',
      location: 'Thrissur, Kerala',
      desc: 'A tropical modern open-plan villa that integrates indoor plant courtyards, marble flooring, and light-filled spatial flow.',
      image: '/assets/images/traya_living.png'
    },
    {
      title: 'Avant Garde',
      category: 'Luxury Residence',
      location: 'Thamarassery',
      desc: 'A high-end minimalist home showcasing custom-made furniture, plaster-textured accent walls, and refined linen aesthetics.',
      image: '/assets/images/avant_garde.png'
    },
    {
      title: 'Veegaland Apartment',
      category: 'Apartment Interior',
      location: 'Kochi, Kerala',
      desc: 'A chic contemporary urban apartment featuring integrated smart lighting, bespoke joinery, and a neutral, calm color palette.',
      image: '/assets/images/veegaland_apartment.png'
    }
  ];

  return (
    <section className="section py-6 my-0" id="showcase" style={{ backgroundColor: '#000000' }}>
      <div className="container px-6">
        
        {/* Top Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ PORTFOLIO SHOWCASE ]
          </span>
        </div>

        {/* Heading Area */}
        <div className="columns is-vcentered mb-6 is-desktop" style={{ minHeight: '120px' }}>
          {/* Left Heading */}
          <div className="column is-6">
            <h2 className="title" style={{ 
              fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', 
              lineHeight: '1.1', 
              fontWeight: 400, 
              fontFamily: 'Poppins, sans-serif',
              color: '#FFFFFF',
              margin: 0
            }}>
              Curated spaces <br />
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>designed to inspire</span>.
            </h2>
          </div>
          {/* Right Text */}
          <div className="column is-6 is-flex is-align-items-flex-end" style={{ height: '100%' }}>
            <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Poppins, sans-serif', maxWidth: '450px' }}>
              Explore our architectural and interior design milestones from Prekshaa Design Studio. Hover over each card to unfold the unique design concept.
            </p>
          </div>
        </div>

        {/* Sliding Card Accordion */}
        <div className="showcase-container mt-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`showcase-card ${activeIndex === idx ? 'active' : ''}`}
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              {/* Rotated text for collapsed state */}
              <div className="collapsed-title">
                {project.title}
              </div>

              {/* Hover overlay and text for expanded state */}
              <div className="card-overlay">
                <div className="card-content">
                  <div className="mb-3">
                    <span 
                      className="is-uppercase is-size-7 has-text-weight-bold" 
                      style={{ 
                        color: '#A855F7', 
                        backgroundColor: 'rgba(168, 85, 247, 0.1)', 
                        padding: '0.35rem 0.75rem', 
                        borderRadius: '4px',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="title is-size-3 mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF', fontWeight: 500 }}>
                    {project.title}
                  </h3>
                  <p className="is-size-7 mb-4" style={{ color: '#9CA3AF', letterSpacing: '0.05em' }}>
                    LOCATION: {project.location.toUpperCase()}
                  </p>
                  <p className="is-size-6" style={{ color: '#E5E7EB', lineHeight: '1.6', maxWidth: '500px', fontFamily: 'Poppins, sans-serif' }}>
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Styles for the Showcase Section */}
        <style>{`
          .showcase-container {
            display: flex;
            flex-direction: row;
            gap: 1.25rem;
            height: 550px;
            width: 100%;
          }

          .showcase-card {
            position: relative;
            height: 100%;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            background-size: cover;
            background-position: center;
            transition: flex 0.7s cubic-bezier(0.25, 1, 0.3, 1), transform 0.3s ease;
            flex: 1;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .showcase-card.active {
            flex: 4.5;
            cursor: default;
          }

          .showcase-card:hover:not(.active) {
            transform: scale(1.02);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          }

          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.85) 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2.5rem;
            transition: opacity 0.5s ease;
          }

          .collapsed-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-90deg);
            white-space: nowrap;
            text-transform: uppercase;
            font-size: 1.25rem;
            letter-spacing: 0.25em;
            font-weight: 600;
            color: #FFFFFF;
            text-shadow: 0 4px 12px rgba(0, 0, 0, 0.95), 0 2px 4px rgba(0, 0, 0, 0.8);
            pointer-events: none;
            transition: opacity 0.4s ease, color 0.3s ease;
            font-family: 'Poppins', sans-serif;
          }

          .showcase-card.active .collapsed-title {
            opacity: 0;
          }

          .showcase-card:not(.active):hover .collapsed-title {
            color: #A855F7;
          }

          .showcase-card:not(.active) .card-overlay {
            background: rgba(0, 0, 0, 0.65);
            transition: background 0.5s ease;
          }

          .showcase-card:not(.active) .card-content {
            opacity: 0;
            pointer-events: none;
            transform: translateY(20px);
          }

          .card-content {
            transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 1, 0.3, 1);
            opacity: 1;
            transform: translateY(0);
          }

          @media screen and (max-width: 1024px) {
            .showcase-container {
              height: 480px;
            }
            .collapsed-title {
              font-size: 0.95rem;
              letter-spacing: 0.15em;
            }
          }

          @media screen and (max-width: 768px) {
            .showcase-container {
              flex-direction: column;
              height: auto;
              gap: 1.5rem;
            }
            .showcase-card {
              height: 380px !important;
              flex: none !important;
              width: 100%;
            }
            .collapsed-title {
              display: none !important;
            }
            .showcase-card:not(.active) .card-overlay {
              background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%);
            }
            .showcase-card:not(.active) .card-content {
              opacity: 1 !important;
              pointer-events: auto !important;
              transform: translateY(0) !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
}
