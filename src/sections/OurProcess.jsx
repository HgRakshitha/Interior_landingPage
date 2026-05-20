import React, { useState } from 'react';

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const phases = [
    { name: 'Initiation', range: [0, 3], subtitle: 'Discovery & Proposal' },
    { name: 'Conception', range: [4, 7], subtitle: 'Design Conception' },
    { name: 'Refinement', range: [8, 11], subtitle: 'Refinement & BOQ' },
    { name: 'Execution', range: [12, 17], subtitle: 'Site Construction' }
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

  const nextStep = () => {
    if (activeStep < stages.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  const jumpToPhase = (phaseIdx) => {
    setActiveStep(phases[phaseIdx].range[0]);
  };

  return (
    <section className="section py-6 my-0" id="process" style={{ backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Design Style definitions */}
      <style>{`
        .phase-node {
          cursor: pointer;
          position: relative;
          text-align: center;
          z-index: 5;
          transition: all 0.3s ease;
          flex: 1;
        }

        .phase-node-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #1F2937;
          border: 2px solid #374151;
          margin: 0 auto 0.75rem auto;
          transition: all 0.4s ease;
        }

        .phase-node.active .phase-node-circle {
          background-color: #A855F7;
          border-color: #A855F7;
          box-shadow: 0 0 15px #A855F7;
          transform: scale(1.2);
        }

        .phase-node.active h4 {
          color: #FFFFFF !important;
        }

        .phase-node.active p {
          color: #A855F7 !important;
        }

        .carousel-track {
          position: relative;
          height: 380px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 3rem 0;
        }

        .carousel-card {
          position: absolute;
          width: 580px;
          height: 300px;
          background-color: #111827;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.25, 1, 0.3, 1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .carousel-card-bg-num {
          position: absolute;
          right: 25px;
          bottom: 10px;
          font-size: 9rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.025);
          line-height: 1;
          pointer-events: none;
          font-family: 'Poppins', sans-serif;
          user-select: none;
          transition: color 0.4s ease;
        }

        .carousel-card.active .carousel-card-bg-num {
          color: rgba(168, 85, 247, 0.05);
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: rgba(17, 24, 39, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .carousel-arrow:hover:not(.disabled) {
          background-color: #A855F7;
          border-color: #A855F7;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
          transform: translateY(-50%) scale(1.08);
        }

        .carousel-arrow.disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }

        .carousel-arrow.prev {
          left: 5%;
        }

        .carousel-arrow.next {
          right: 5%;
        }

        .dots-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.65rem;
          flex-wrap: wrap;
          max-width: 800px;
          margin: 0 auto;
        }

        .dot-button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #111827;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #9CA3AF;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .dot-button:hover {
          border-color: rgba(168, 85, 247, 0.5);
          color: #FFFFFF;
        }

        .dot-button.active {
          background-color: #A855F7;
          border-color: #A855F7;
          color: #FFFFFF;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.4);
          transform: scale(1.1);
        }

        @media screen and (max-width: 1024px) {
          .carousel-card {
            width: 480px;
            padding: 2.5rem;
          }
        }

        @media screen and (max-width: 768px) {
          .carousel-card {
            width: 88%;
            height: 290px;
            padding: 2rem;
          }
          .carousel-card:not(.active) {
            opacity: 0 !important;
            transform: scale(0.8) !important;
            pointer-events: none;
          }
          .carousel-arrow {
            top: auto;
            bottom: -80px;
            transform: none;
          }
          .carousel-arrow:hover {
            transform: scale(1.05);
          }
          .carousel-arrow.prev {
            left: 25%;
          }
          .carousel-arrow.next {
            right: 25%;
          }
          .dots-row {
            margin-top: 6.5rem;
          }
        }
      `}</style>

      <div className="container px-6">
        
        {/* Section Label */}
        <div className="mb-6">
          <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
            [ OUR PROCESS ]
          </span>
        </div>

        {/* Section Heading */}
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
              A fluid showcase <br />
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>of our design</span> roadmap.
            </h2>
          </div>
          <div className="column is-6 is-flex is-align-items-flex-end">
            <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Poppins, sans-serif', maxWidth: '450px' }}>
              Explore the 18 milestones of our bespoke design workflow. Click the phases or step numbers to trace our interactive roadmap.
            </p>
          </div>
        </div>

        {/* Phase Timeline Header */}
        <div style={{ position: 'relative', marginTop: '3.5rem', marginBottom: '3.5rem' }}>
          {/* Horizontal connecting line */}
          <div style={{ 
            position: 'absolute', 
            top: '7px', 
            left: '12.5%', 
            right: '12.5%', 
            height: '2px', 
            backgroundColor: '#1F2937', 
            zIndex: 1 
          }} />
          <div style={{ 
            position: 'absolute', 
            top: '7px', 
            left: '12.5%', 
            width: `${(activePhase / 3) * 75}%`, 
            height: '2px', 
            backgroundColor: '#A855F7', 
            transition: 'width 0.5s ease',
            zIndex: 2 
          }} />

          {/* Phase Nodes */}
          <div className="is-flex" style={{ width: '100%' }}>
            {phases.map((phase, idx) => (
              <div 
                key={idx} 
                className={`phase-node ${activePhase === idx ? 'active' : ''}`}
                onClick={() => jumpToPhase(idx)}
              >
                <div className="phase-node-circle" />
                <span className="is-size-7 has-text-weight-bold" style={{ color: '#6B7280', letterSpacing: '0.05em' }}>
                  PHASE 0{idx + 1}
                </span>
                <h4 className="is-size-6 is-hidden-mobile" style={{ color: '#9CA3AF', fontFamily: 'Poppins, sans-serif', fontWeight: 500, marginTop: '0.25rem' }}>
                  {phase.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Carousel Stage */}
        <div style={{ position: 'relative', width: '100%' }}>
          
          {/* Left Arrow */}
          <button 
            className={`carousel-arrow prev ${activeStep === 0 ? 'disabled' : ''}`} 
            onClick={prevStep}
            aria-label="Previous step"
          >
            &#8249;
          </button>

          {/* Carousel Track */}
          <div className="carousel-track">
            {stages.map((stage, idx) => {
              const diff = idx - activeStep;
              let transformStyle = '';
              let opacity = 0;
              let zIndex = 1;
              let pointerEvents = 'auto';

              if (diff === 0) {
                // Active Card
                transformStyle = 'translateX(0) scale(1)';
                opacity = 1;
                zIndex = 10;
              } else if (diff === -1) {
                // Left Preview Card
                transformStyle = 'translateX(-115%) scale(0.85)';
                opacity = 0.25;
                zIndex = 5;
                pointerEvents = 'none';
              } else if (diff === 1) {
                // Right Preview Card
                transformStyle = 'translateX(115%) scale(0.85)';
                opacity = 0.25;
                zIndex = 5;
                pointerEvents = 'none';
              } else if (diff < -1) {
                // Hidden Left
                transformStyle = 'translateX(-150%) scale(0.7)';
                opacity = 0;
                zIndex = 1;
                pointerEvents = 'none';
              } else if (diff > 1) {
                // Hidden Right
                transformStyle = 'translateX(150%) scale(0.7)';
                opacity = 0;
                zIndex = 1;
                pointerEvents = 'none';
              }

              return (
                <div
                  key={idx}
                  className={`carousel-card ${diff === 0 ? 'active' : ''}`}
                  style={{
                    transform: transformStyle,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: pointerEvents
                  }}
                >
                  <div className="carousel-card-bg-num">
                    {stage.num}
                  </div>

                  <div>
                    {/* Phase Badge */}
                    <div className="mb-4">
                      <span 
                        className="is-uppercase is-size-7 has-text-weight-bold" 
                        style={{ 
                          color: '#A855F7', 
                          backgroundColor: 'rgba(168, 85, 247, 0.1)', 
                          padding: '0.35rem 0.75rem', 
                          borderRadius: '4px',
                          border: '1px solid rgba(168, 85, 247, 0.2)',
                          letterSpacing: '0.1em'
                        }}
                      >
                        PHASE 0{getPhaseForStep(idx) + 1}: {phases[getPhaseForStep(idx)].name.toUpperCase()}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="title is-size-3 mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#FFFFFF', fontWeight: 500 }}>
                      {stage.title}
                    </h3>

                    {/* Step Description */}
                    <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.6', fontFamily: 'Poppins, sans-serif' }}>
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button 
            className={`carousel-arrow next ${activeStep === stages.length - 1 ? 'disabled' : ''}`} 
            onClick={nextStep}
            aria-label="Next step"
          >
            &#8250;
          </button>
        </div>

        {/* Step dots navigation */}
        <div className="dots-row">
          {stages.map((stage, idx) => (
            <button
              key={idx}
              className={`dot-button ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
              title={stage.title}
            >
              {stage.num}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
