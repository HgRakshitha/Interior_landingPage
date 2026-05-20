import React from 'react';

export default function OurProcess() {
  const stages = [
    { num: '01', title: 'Conversation', desc: 'An open dialogue about how you want to live, work, or host.' },
    { num: '02', title: 'Site & Brief', desc: 'Survey, photography, and a written brief — the project\'s first artefact.' },
    { num: '03', title: 'Concept', desc: 'Mood, plan, and material direction. We build a shared language.' },
    { num: '04', title: 'Spatial Design', desc: 'Layouts, sections, and light. Every metre considered.' },
    { num: '05', title: '3D & Material', desc: 'Visualisation and physical samples. You see, touch, then decide.' },
    { num: '06', title: 'Detailing', desc: 'Working drawings, BOQ, and contractor selection.' },
    { num: '07', title: 'Site Execution', desc: 'Weekly supervision, quality reviews, and quiet coordination.' },
    { num: '08', title: 'Handover', desc: 'Snagging, styling, and a finished archive of your project.' }
  ];

  return (
    <section className="section pt-0 pb-5 my-0" id="process">
      <div className="container px-6">
        
        {/* Top Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ OUR PROCESS ]
          </span>
        </div>

        {/* Heading Area */}
        <div className="columns is-vcentered mb-6 is-desktop" style={{ minHeight: '150px' }}>
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
              A calm path <br />
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>from idea</span> <br className="is-hidden-desktop" />
              to keys.
            </h2>
          </div>
          {/* Right Text */}
          <div className="column is-6 is-flex is-align-items-flex-end" style={{ height: '100%' }}>
            <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Poppins, sans-serif', maxWidth: '450px' }}>
              Eight stages. Every milestone is documented, costed and reviewed with you before we move on. No surprises, no design left to chance &mdash; only quiet, considered progress.
            </p>
          </div>
        </div>

        {/* Stages List */}
        <div className="mt-6 pt-5">
          {stages.map((stage, idx) => (
            <div 
              key={idx} 
              className="columns is-vcentered py-5 is-mobile is-multiline" 
              style={{ 
                borderTop: '1px solid #374151', 
                cursor: 'pointer', 
                transition: 'background-color 0.3s ease, padding 0.3s ease',
                margin: 0
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
                e.currentTarget.style.paddingLeft = '1rem';
                e.currentTarget.style.paddingRight = '1rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.paddingLeft = '0';
                e.currentTarget.style.paddingRight = '0';
              }}
            >
              {/* Number */}
              <div className="column is-1-desktop is-2-mobile">
                <span className="is-size-7 has-text-weight-semibold" style={{ color: '#9CA3AF', letterSpacing: '0.1em' }}>
                  ({stage.num})
                </span>
              </div>
              
              {/* Title */}
              <div className="column is-4-desktop is-10-mobile">
                <h3 className="is-size-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF', fontWeight: 400 }}>
                  {stage.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="column is-7-desktop is-10-mobile is-offset-2-mobile">
                <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.6', fontFamily: 'Poppins, sans-serif' }}>
                  {stage.desc}
                </p>
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
