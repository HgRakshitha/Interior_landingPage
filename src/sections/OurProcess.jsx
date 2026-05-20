import React, { useState } from 'react';

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const phases = [
    { name: 'Initiation', range: [0, 3], subtitle: 'Discovery & Scope Definition' },
    { name: 'Conception', range: [4, 7], subtitle: 'Mood Boards & Spatial Layouts' },
    { name: 'Refinement', range: [8, 11], subtitle: '3D Visuals & BOQ Finalization' },
    { name: 'Execution', range: [12, 17], subtitle: 'Supervision & Project Delivery' }
  ];

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

  const getPhaseForStep = (stepIdx) => {
    if (stepIdx < 4) return 0;
    if (stepIdx < 8) return 1;
    if (stepIdx < 12) return 2;
    return 3;
  };

  const activePhase = getPhaseForStep(activeStep);

  const handlePhaseClick = (phaseIdx) => {
    const firstStepOfPhase = phases[phaseIdx].range[0];
    setActiveStep(firstStepOfPhase);
    
    // Smooth scroll to the phase header
    const element = document.getElementById(`phase-header-${phaseIdx}`);
    if (element) {
      const yOffset = -120; // offset to account for navbar or top padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="section py-6 my-0" id="process" style={{ backgroundColor: '#000000', position: 'relative' }}>
      {/* Global CSS for Animations and Custom Layouts */}
      <style>{`
        .phase-indicator {
          cursor: pointer;
          padding: 1.25rem 1.5rem;
          border-left: 2px solid #27272A;
          transition: all 0.4s ease;
          opacity: 0.5;
        }

        .phase-indicator.active {
          border-left-color: #A855F7;
          opacity: 1;
          background: linear-gradient(90deg, rgba(168, 85, 247, 0.05) 0%, rgba(0,0,0,0) 100%);
        }

        .step-card {
          background-color: transparent;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 0.25rem;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          border: 1px solid transparent;
          position: relative;
        }

        .step-card:hover, .step-card.active {
          background-color: #111827;
          border-color: rgba(168, 85, 247, 0.15);
          box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.5);
        }

        .step-card.active {
          border-color: rgba(168, 85, 247, 0.3);
        }

        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
          }
        }

        .glow-dot {
          animation: pulse-glow 2s infinite;
        }

        .desc-collapse {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease;
        }
      `}</style>

      <div className="container px-6">
        
        {/* Section Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ OUR PROCESS ]
          </span>
        </div>

        {/* Header Title */}
        <div className="columns is-desktop mb-6">
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
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>from vision</span> to reality.
            </h2>
          </div>
          <div className="column is-6 is-flex is-align-items-flex-end">
            <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Poppins, sans-serif', maxWidth: '450px' }}>
              We divide the interior design journey into 18 steps across 4 major phases. Hover over a milestone or use the dynamic progress guide to explore our flow.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="columns is-desktop mt-6">
          
          {/* Left Column: Sticky Phase Indicators (Hides on Mobile/Tablet) */}
          <div className="column is-4-desktop is-hidden-touch">
            <div style={{ position: 'sticky', top: '120px' }}>
              <p className="is-size-7 has-text-weight-bold mb-4" style={{ color: '#9CA3AF', letterSpacing: '0.1em' }}>
                PROJECT PHASES
              </p>
              
              <div className="is-flex is-flex-direction-column" style={{ gap: '0.5rem' }}>
                {phases.map((phase, idx) => (
                  <div
                    key={idx}
                    className={`phase-indicator ${activePhase === idx ? 'active' : ''}`}
                    onClick={() => handlePhaseClick(idx)}
                  >
                    <span className="is-size-7 has-text-weight-bold" style={{ color: activePhase === idx ? '#A855F7' : '#6B7280', display: 'block', marginBottom: '0.25rem' }}>
                      PHASE 0{idx + 1}
                    </span>
                    <h3 className="is-size-5" style={{ color: activePhase === idx ? '#FFFFFF' : '#9CA3AF', fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                      {phase.name}
                    </h3>
                    <p className="is-size-7 mt-1" style={{ color: '#6B7280' }}>
                      {phase.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Tracker Card */}
              <div className="mt-6 p-5" style={{ backgroundColor: '#111827', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '300px' }}>
                <span className="is-size-7" style={{ color: '#9CA3AF' }}>MILESTONE TRACKER</span>
                <h4 className="is-size-3 mt-1 mb-2" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                  {stages[activeStep].num} <span className="is-size-6" style={{ color: '#6B7280', fontWeight: 400 }}>/ 18</span>
                </h4>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#374151', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${((activeStep + 1) / 18) * 100}%`, height: '100%', backgroundColor: '#A855F7', transition: 'width 0.4s ease' }} />
                </div>
                <p className="is-size-7 mt-3" style={{ color: '#A855F7', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stages[activeStep].title}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stages Timeline */}
          <div className="column is-8-desktop">
            
            {/* Horizontal Phase Tabs for Mobile/Tablet */}
            <div className="is-hidden-desktop mb-6 pb-2" style={{ display: 'flex', overflowX: 'auto', gap: '1rem', borderBottom: '1px solid #27272A' }}>
              {phases.map((phase, idx) => (
                <button
                  key={idx}
                  className="button is-dark is-rounded is-small"
                  style={{
                    backgroundColor: activePhase === idx ? '#A855F7' : '#1F2937',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    whiteSpace: 'nowrap'
                  }}
                  onClick={() => handlePhaseClick(idx)}
                >
                  Phase 0{idx + 1}: {phase.name}
                </button>
              ))}
            </div>

            {/* Stages Vertical List with Progress Line */}
            <div style={{ position: 'relative', paddingLeft: '45px' }}>
              
              {/* Vertical Timeline Background Line */}
              <div style={{ 
                position: 'absolute', 
                left: '16px', 
                top: '24px', 
                bottom: '24px', 
                width: '2px', 
                backgroundColor: '#1F2937', 
                zIndex: 1 
              }} />

              {/* Vertical Timeline Active Progress Line */}
              <div style={{ 
                position: 'absolute', 
                left: '16px', 
                top: '24px', 
                height: `${(activeStep / 17) * 98}%`, 
                width: '2px', 
                backgroundColor: '#A855F7', 
                transition: 'height 0.4s cubic-bezier(0.25, 1, 0.5, 1)', 
                zIndex: 2 
              }} />

              {/* Loop through phases and render steps */}
              {phases.map((phase, phaseIdx) => (
                <div key={phaseIdx} className="mb-6">
                  
                  {/* Phase Header */}
                  <div 
                    id={`phase-header-${phaseIdx}`} 
                    className="pt-2 pb-4"
                  >
                    <span 
                      className="is-uppercase is-size-7 has-text-weight-bold" 
                      style={{ 
                        color: '#A855F7', 
                        backgroundColor: 'rgba(168, 85, 247, 0.1)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '4px',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      PHASE 0{phaseIdx + 1} &mdash; {phase.name.toUpperCase()}
                    </span>
                  </div>

                  {/* Render steps for this phase */}
                  {stages.slice(phase.range[0], phase.range[1] + 1).map((stage, idx) => {
                    // Calculate real global index
                    const globalIdx = phase.range[0] + idx;
                    const isActive = activeStep === globalIdx;

                    return (
                      <div
                        key={globalIdx}
                        className={`step-card ${isActive ? 'active' : ''}`}
                        onMouseEnter={() => setActiveStep(globalIdx)}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Timeline Marker Dot */}
                        <div style={{ 
                          position: 'absolute', 
                          left: '-40px', 
                          top: '24px', 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          backgroundColor: isActive ? '#A855F7' : '#000000', 
                          border: `2px solid ${isActive ? '#A855F7' : '#4B5563'}`, 
                          zIndex: 3, 
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        className={isActive ? 'glow-dot' : ''}
                        >
                          <div style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#FFFFFF',
                            opacity: isActive ? 1 : 0,
                            transition: 'opacity 0.3s ease'
                          }} />
                        </div>

                        {/* Card Content */}
                        <div>
                          <div className="is-flex is-align-items-center mb-1">
                            <span 
                              className="is-size-7 has-text-weight-semibold mr-3" 
                              style={{ 
                                color: isActive ? '#A855F7' : '#6B7280', 
                                fontFamily: 'Inter, sans-serif', 
                                letterSpacing: '0.05em' 
                              }}
                            >
                              ({stage.num})
                            </span>
                            <h3 
                              className="is-size-4-desktop is-size-5-touch" 
                              style={{ 
                                fontFamily: 'Poppins, sans-serif', 
                                color: isActive ? '#FFFFFF' : '#9CA3AF', 
                                fontWeight: isActive ? 600 : 400,
                                transition: 'color 0.3s ease'
                              }}
                            >
                              {stage.title}
                            </h3>
                          </div>

                          {/* Expandable Description Area */}
                          <div 
                            className="desc-collapse"
                            style={{ 
                              maxHeight: isActive ? '120px' : '0px', 
                              opacity: isActive ? 1 : 0 
                            }}
                          >
                            <p 
                              className="is-size-6 mt-2 pr-4" 
                              style={{ 
                                color: '#D1D5DB', 
                                lineHeight: '1.6', 
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              {stage.desc}
                            </p>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
