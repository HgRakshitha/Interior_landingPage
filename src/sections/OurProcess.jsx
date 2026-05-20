import React from 'react';

export default function OurProcess() {
  const stages = [
    { num: '01', title: 'Get in Touch', desc: 'Connect with us via WhatsApp, email, or phone to start discussing your project.' },
    { num: '02', title: 'Initial Consultation', desc: 'Share your project details, site plans, requirements, and reference images. We can arrange an in-person or virtual meeting if needed.' },
    { num: '03', title: 'Proposal & Estimate', desc: 'We\'ll prepare a tailored scope of work, fee proposal, and payment schedule based on your project information.' },
    { num: '04', title: 'Project Confirmation', desc: 'Once the advance payment is received, we\'ll officially begin your project.' },
    { num: '05', title: 'Site Analysis & Documentation', desc: 'Our team will visit the site to evaluate existing conditions, take accurate measurements, and document the space through photos and videos.' },
    { num: '06', title: 'Concept & Mood Board Session', desc: 'We\'ll discuss mood boards to refine the design concept and ensure our creative direction aligns with your vision.' },
    { num: '07', title: 'Space Planning & Layout Design', desc: 'We\'ll develop single-line, bubble, and furniture layouts to define spatial flow, lighting, and ventilation - integrating vastu principles if desired.' },
    { num: '08', title: '3D Visualization', desc: 'Experience your design through interactive 3D models and walkthroughs for a clear understanding of the final outcome.' },
    { num: '09', title: 'Design Review & Approval', desc: 'We\'ll present detailed working drawings and a bill of quantities for your review and approval.' },
    { num: '10', title: 'Final Rendered Visuals', desc: 'You\'ll receive high-quality, photorealistic 3D renders showcasing the finalized design.' },
    { num: '11', title: 'Material Finalization', desc: 'After the renders are approved, we\'ll confirm all materials, finishes, and color selections.' },
    { num: '12', title: 'Detailed Drawings & BOQ Submission', desc: 'Once approvals are in place, we\'ll submit the final detailed drawings and bill of quantities.' },
    { num: '13', title: 'Contractor Finalization', desc: 'We\'ll assist you in evaluating and selecting the most suitable contractor for your project execution.' },
    { num: '14', title: 'Material Board Approval', desc: 'Before work begins, the contractor will submit a physical material board for your review and approval.' },
    { num: '15', title: 'Site Marking & Validation', desc: 'The contractor will mark the site layout, which we\'ll inspect and approve before execution starts.' },
    { num: '16', title: 'Project Supervision & Coordination', desc: 'We\'ll monitor the site regularly to ensure work progresses as per the approved design and quality standards.' },
    { num: '17', title: 'Completion & Handover', desc: 'Upon completion, we\'ll review the final site, ensure quality compliance, and hand over the project to you.' },
    { num: '18', title: 'Final Documentation', desc: 'Our team will capture the completed project through professional photography and videography for your records.' }
  ];

  return (
    <section className="section pt-0 pb-6 my-0" id="process">
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
              A structured path <br />
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>from vision</span> <br className="is-hidden-desktop" />
              to reality.
            </h2>
          </div>
          {/* Right Text */}
          <div className="column is-6 is-flex is-align-items-flex-end" style={{ height: '100%' }}>
            <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Poppins, sans-serif', maxWidth: '450px' }}>
              Eighteen detailed steps. We emphasize collaboration, precision, and creativity. From the first sketch to the final handover, we ensure you remain involved and informed.
            </p>
          </div>
        </div>

        {/* Content Area: Sticky Video on Left, Scrollable Stages on Right */}
        <div className="columns is-desktop mt-6">
          {/* Left Column: Sticky Video */}
          <div className="column is-5-desktop mb-6">
            <div style={{ 
              position: 'sticky', 
              top: '100px',
              zIndex: 10
            }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <video 
                  src="/assets/videos/ai.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ 
                    borderRadius: '16px', 
                    width: '100%', 
                    height: 'auto', 
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'block'
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Stages List */}
          <div className="column is-7-desktop">
            <div>
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
                    <span className="is-size-7 has-text-weight-semibold" style={{ color: '#A855F7', letterSpacing: '0.1em' }}>
                      ({stage.num})
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="column is-4-desktop is-10-mobile">
                    <h3 className="is-size-5" style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF', fontWeight: 500 }}>
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
        </div>

      </div>
    </section>
  );
}
