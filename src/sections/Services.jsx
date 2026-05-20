import React from 'react';

export default function Services() { 
  const services = [
    { num: '01', title: 'Residential Interiors', desc: 'Personalised homes where every surface, light, and corner reflects the rhythm of the people who live there.' },
    { num: '02', title: 'Commercial & Hospitality', desc: 'Restaurants, cafés, and workspaces designed to hold story, function, and a quiet sense of brand.' },
    { num: '03', title: 'Architecture & Facade', desc: 'From form-finding to material expression — buildings rooted in context, climate, and craft.' },
    { num: '04', title: 'Renovation & Retrofit', desc: 'Reading what a space already holds and editing it gently — preserving character, improving life.' },
    { num: '05', title: 'Furniture & Bespoke Joinery', desc: 'Custom pieces made with local artisans — composed for the room, the hand, and the long view.' },
    { num: '06', title: 'Turnkey Project Delivery', desc: 'Concept to keys — design, procurement, and site supervision held under one calm hand.' }
  ];

  return (
    <section className="section py-5 my-0" id="services">
      <div className="container px-6">
        
        {/* Top Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ OVERVIEW OF SERVICES ]
          </span>
        </div>

        {/* Heading Area */}
        <div className="columns is-vcentered mb-6 is-mobile is-multiline">
          <div className="column is-9-desktop is-12-mobile">
            <h2 className="title" style={{ 
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
              lineHeight: '1.1', 
              fontWeight: 400, 
              fontFamily: 'Poppins, sans-serif',
              color: '#FFFFFF',
              marginBottom: 0
            }}>
              What we <br />
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>quietly</span> do.
            </h2>
          </div>
          <div className="column is-3-desktop is-12-mobile has-text-right-desktop mt-4-mobile">
            <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.1em', color: '#9CA3AF' }}>
              (06 DISCIPLINES)
            </span>
          </div>
        </div>

        {/* Services List */}
        <div className="mt-6 pt-5">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="columns is-vcentered is-mobile is-multiline" 
              style={{ 
                borderTop: '1px solid #374151', 
                cursor: 'pointer', 
                transition: 'background-color 0.3s ease, padding-left 0.3s ease, padding-right 0.3s ease',
                margin: 0,
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                paddingLeft: '0',
                paddingRight: '0'
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
                e.currentTarget.style.paddingLeft = '1.5rem';
                e.currentTarget.style.paddingRight = '1.5rem';
                e.currentTarget.querySelector('.plus-icon').style.color = '#A855F7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.paddingLeft = '0';
                e.currentTarget.style.paddingRight = '0';
                e.currentTarget.querySelector('.plus-icon').style.color = '#9CA3AF';
              }}
            >
              
              <div className="column is-1-desktop is-2-mobile">
                <span className="is-size-7" style={{ color: '#9CA3AF', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}>
                  ({service.num})
                </span>
              </div>
              
              <div className="column is-5-desktop is-10-mobile">
                <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF', fontWeight: 300, fontSize: '2.25rem', lineHeight: '1.2' }}>
                  {service.title}
                </h3>
              </div>
              
              <div className="column is-5-desktop is-10-mobile is-offset-2-mobile">
                <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.6', fontFamily: 'Poppins, sans-serif', maxWidth: '400px' }}>
                  {service.desc}
                </p>
              </div>

              <div className="column is-1-desktop is-2-mobile has-text-right is-flex is-align-items-center is-justify-content-flex-end">
                <span className="plus-icon" style={{ fontSize: '1.75rem', fontWeight: 200, color: '#9CA3AF', transition: 'color 0.3s ease', lineHeight: 1, fontFamily: 'Poppins, sans-serif' }}>+</span>
              </div>

            </div>
          ))}
          {/* Bottom border for the last item */}
          <div style={{ borderTop: '1px solid #374151' }}></div>
        </div>

      </div>
    </section>
  ); 
}
