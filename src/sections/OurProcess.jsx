import React, { useEffect, useRef, useState } from 'react';

export default function OurProcess() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState([0, 0, 0, 0]);

  const phases = [
    {
      num: '(01)',
      name: 'INITIATION',
      subtitle: 'Discovery & Proposal',
      desc: 'We start by defining the boundaries of your project, aligning design goals, and setting expectations.',
      image: '/assets/images/phase_1.png',
      steps: [
        { num: '01', title: 'Get in Touch', desc: 'Connect with us via WhatsApp, email, or phone to start discussing your project.' },
        { num: '02', title: 'Initial Consultation', desc: 'Share your project details, site plans, requirements, and reference images. We can arrange an in-person or virtual meeting if needed.' },
        { num: '03', title: 'Proposal & Estimate', desc: 'We\'ll prepare a tailored scope of work, fee proposal, and payment schedule based on your project information.' },
        { num: '04', title: 'Project Confirmation', desc: 'Once the advance payment is received, we\'ll officially begin your project.' }
      ]
    },
    {
      num: '(02)',
      name: 'CONCEPTION',
      subtitle: 'Mood Boards & Space Planning',
      desc: 'We map out the architecture layout, analyze spatial dynamics, and define the design concept.',
      image: '/assets/images/phase_2.png',
      steps: [
        { num: '05', title: 'Site Analysis & Documentation', desc: 'Our team will visit the site to evaluate existing conditions, take accurate measurements, and document the space through photos and videos.' },
        { num: '06', title: 'Concept & Mood Board Session', desc: 'We\'ll discuss mood boards to refine the design concept and ensure our creative direction aligns with your vision.' },
        { num: '07', title: 'Space Planning & Layout Design', desc: 'We\'ll develop single-line, bubble, and furniture layouts to define spatial flow, lighting, and ventilation - integrating vastu principles if desired.' },
        { num: '08', title: '3D Visualization', desc: 'Experience your design through interactive 3D models and walkthroughs for a clear understanding of the final outcome.' }
      ]
    },
    {
      num: '(03)',
      name: 'REFINEMENT',
      subtitle: 'Material Boards & Final BOQ',
      desc: 'Selecting detailed materials, textures, and finalizing the bill of quantities before construction.',
      image: '/assets/images/phase_3.png',
      steps: [
        { num: '09', title: 'Design Review & Approval', desc: 'We\'ll present detailed working drawings and a bill of quantities for your review and approval.' },
        { num: '10', title: 'Final Rendered Visuals', desc: 'You\'ll receive high-quality, photorealistic 3D renders showcasing the finalized design.' },
        { num: '11', title: 'Material Finalization', desc: 'After the renders are approved, we\'ll confirm all materials, finishes, and color selections.' },
        { num: '12', title: 'Detailed Drawings & BOQ Submission', desc: 'Once approvals are in place, we\'ll submit the final detailed drawings and bill of quantities.' }
      ]
    },
    {
      num: '(04)',
      name: 'EXECUTION',
      subtitle: 'Construction & Project Delivery',
      desc: 'Supervising execution on site, ensuring craftsmanship standards, and completing final handover.',
      image: '/assets/images/phase_4.png',
      steps: [
        { num: '13', title: 'Contractor Finalization', desc: 'We\'ll assist you in evaluating and selecting the most suitable contractor for your project execution.' },
        { num: '14', title: 'Material Board Approval', desc: 'Before work begins, the contractor will submit a physical material board for your review and approval.' },
        { num: '15', title: 'Site Marking & Validation', desc: 'The contractor will mark the site layout, which we\'ll inspect and approve before execution starts.' },
        { num: '16', title: 'Project Supervision & Coordination', desc: 'We\'ll monitor the site regularly to ensure work progresses as per the approved design and quality standards.' },
        { num: '17', title: 'Completion & Handover', desc: 'Upon completion, we\'ll review the final site, ensure quality compliance, and hand over the project to you.' },
        { num: '18', title: 'Final Documentation', desc: 'Our team will capture the completed project through professional photography and videography for your records.' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.stacking-card');
      
      const progressList = Array.from(cards).map((card, idx) => {
        if (idx === cards.length - 1) return 0;

        const nextCard = cards[idx + 1];
        if (!nextCard) return 0;

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        const startOverlap = cardRect.top + 250;
        const endOverlap = cardRect.top + 25;
        const totalDistance = startOverlap - endOverlap;

        const currentDistance = startOverlap - nextRect.top;
        const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
        return progress;
      });

      setScrollProgress(progressList);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      className="section py-6 my-0" 
      id="process" 
      ref={containerRef}
      style={{ 
        backgroundColor: '#000000', 
        position: 'relative',
        paddingBottom: '10rem'
      }}
    >
      <style>{`
        .stacking-cards-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 4rem;
        }

        .stacking-card {
          position: sticky;
          width: 100%;
          max-width: 1100px;
          background-color: #121214; /* Sleek, dark carbon/grey layout background */
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 3.5rem;
          box-shadow: 0 -20px 40px rgba(0, 0, 0, 0.6);
          transition: transform 0.1s linear, opacity 0.2s ease, background-color 0.3s ease;
          display: flex;
          flex-direction: column;
          margin-bottom: 20rem; 
        }

        .stacking-card:last-child {
          margin-bottom: 0 !important;
        }

        @media screen and (min-width: 769px) {
          .stacking-card.card-0 { top: calc(50vh - 240px); }
          .stacking-card.card-1 { top: calc(50vh - 240px + 25px); }
          .stacking-card.card-2 { top: calc(50vh - 240px + 50px); }
          .stacking-card.card-3 { top: calc(50vh - 240px + 75px); }
        }

        @media screen and (max-width: 768px) {
          .stacking-card.card-0 { top: 90px; }
          .stacking-card.card-1 { top: 110px; }
          .stacking-card.card-2 { top: 130px; }
          .stacking-card.card-3 { top: 150px; }
        }

        .step-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.25rem 0;
          transition: all 0.3s ease;
        }

        .step-item:last-child {
          border-bottom: none;
        }

        .step-item:hover {
          padding-left: 0.5rem;
        }

        .step-item:hover h4 {
          color: #A855F7 !important; /* Restore purple highlight color */
        }

        .phase-photo {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          opacity: 0.8;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .stacking-card:hover .phase-photo {
          transform: scale(1.02);
          opacity: 1;
        }

        @media screen and (max-width: 768px) {
          .stacking-card {
            padding: 2rem;
            border-radius: 20px;
            margin-bottom: 12rem;
          }
          .phase-photo {
            height: 180px;
            margin-top: 1.5rem;
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

        {/* Section Header */}
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
              A stacked roadmap <br />
              <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>from vision</span> to reality.
            </h2>
          </div>
          <div className="column is-6 is-flex is-align-items-flex-end">
            <p className="is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.7', fontFamily: 'Poppins, sans-serif', maxWidth: '450px' }}>
              Scroll through the four major design phases. Watch the cards stack and overlay as you descend along our interactive blueprint.
            </p>
          </div>
        </div>

        {/* Stacked Cards Wrapper */}
        <div className="stacking-cards-wrapper">
          {phases.map((phase, idx) => {
            const progress = scrollProgress[idx] || 0;
            const scale = 1 - progress * 0.04;
            const opacity = 1 - progress * 0.4;

            return (
              <div 
                key={idx}
                className={`stacking-card card-${idx}`}
                style={{
                  zIndex: idx + 1,
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  backgroundColor: progress > 0.5 ? '#08080a' : '#121214' // Transition from carbon to deep charcoal/black
                }}
              >
                <div className="columns is-desktop is-multiline">
                  
                  {/* Left Column: Phase Info & Real Photo */}
                  <div className="column is-5-desktop is-12-touch is-flex is-flex-direction-column is-justify-content-between">
                    <div>
                      {/* Big Number and Phase Name */}
                      <div className="is-flex is-align-items-center mb-4">
                        <span 
                          style={{ 
                            fontSize: '3rem', 
                            fontWeight: '300', 
                            color: '#A855F7', /* Restore purple accent color */
                            marginRight: '1rem',
                            fontFamily: 'Poppins, sans-serif'
                          }}
                        >
                          {phase.num}
                        </span>
                        <div>
                          <span 
                            className="is-size-7 has-text-weight-bold" 
                            style={{ color: '#A855F7', letterSpacing: '0.1em' }}
                          >
                            PHASE 0{idx + 1}
                          </span>
                          <h3 
                            className="title is-size-3 mb-0" 
                            style={{ 
                              color: '#FFFFFF', 
                              fontWeight: 600, 
                              letterSpacing: '0.02em',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            {phase.name}
                          </h3>
                        </div>
                      </div>

                      {/* Phase Subtitle & Description */}
                      <h4 
                        className="is-size-5 mb-3" 
                        style={{ color: '#E4E4E7', fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        {phase.subtitle}
                      </h4>
                      <p 
                        className="is-size-6 pr-4" 
                        style={{ color: '#A1A1AA', lineHeight: '1.6', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {phase.desc}
                      </p>
                    </div>

                    {/* High-fidelity architectural photo representing actual studio work */}
                    <div className="mt-5 is-hidden-mobile">
                      <img 
                        src={phase.image} 
                        alt={`${phase.name} workspace`} 
                        className="phase-photo"
                      />
                    </div>
                  </div>

                  {/* Right Column: Step timeline detail */}
                  <div className="column is-7-desktop is-12-touch" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.05)', paddingLeft: '2.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {phase.steps.map((step, sIdx) => (
                        <div key={sIdx} className="step-item">
                          <div className="is-flex is-align-items-center mb-1">
                            <span 
                              className="is-size-7 has-text-weight-semibold mr-3" 
                              style={{ 
                                color: '#A855F7', /* Restore purple accent color */
                                fontFamily: 'Inter, sans-serif', 
                                letterSpacing: '0.05em' 
                              }}
                            >
                              [{step.num}]
                            </span>
                            <h4 
                              className="is-size-5" 
                              style={{ 
                                color: '#FFFFFF', 
                                fontWeight: 500, 
                                transition: 'color 0.3s ease',
                                fontFamily: 'Poppins, sans-serif'
                              }}
                            >
                              {step.title}
                            </h4>
                          </div>
                          <p 
                            className="is-size-6" 
                            style={{ 
                              color: '#71717A', 
                              lineHeight: '1.6', 
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '0.95rem'
                            }}
                          >
                            {step.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
