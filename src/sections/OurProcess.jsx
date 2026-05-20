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
        // The last card is never overlapped by a next card, so it never scales down or fades
        if (idx === cards.length - 1) return 0;

        const nextCard = cards[idx + 1];
        if (!nextCard) return 0;

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        // Calculate overlap progress based on the position of the next card relative to the current card's top
        // Overlap starts when the next card is 250px away from stacking, and reaches 100% when it is fully stacked
        const startOverlap = cardRect.top + 250;
        const endOverlap = cardRect.top + 25;
        const totalDistance = startOverlap - endOverlap;

        // Current distance of next card to the trigger point
        const currentDistance = startOverlap - nextRect.top;
        const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
        return progress;
      });

      setScrollProgress(progressList);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="section py-6 my-0" 
      id="process" 
      ref={containerRef}
      style={{ 
        backgroundColor: '#000000', 
        position: 'relative',
        paddingBottom: '10rem' /* Generous bottom padding to allow a smooth, perfect finish before next section */
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
          background-color: #111827; /* Rich Zinc/Grey background for contrast */
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          padding: 3.5rem;
          box-shadow: 0 -20px 40px rgba(0, 0, 0, 0.6);
          transition: transform 0.1s linear, opacity 0.2s ease, background-color 0.3s ease;
          display: flex;
          flex-direction: column;
          /* Space between cards during scroll */
          margin-bottom: 20rem; 
        }

        .stacking-card:last-child {
          margin-bottom: 0 !important; /* Last card doesn't push down, enabling a perfect exit transition */
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
          color: #A855F7 !important;
        }

        .phase-illustration {
          width: 100%;
          max-width: 320px;
          border-radius: 12px;
          opacity: 0.85;
          mix-blend-mode: screen;
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.1));
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .stacking-card:hover .phase-illustration {
          transform: scale(1.03);
          opacity: 1;
        }

        @media screen and (max-width: 768px) {
          .stacking-card {
            padding: 2rem;
            border-radius: 20px;
            margin-bottom: 12rem;
          }
          .phase-illustration {
            max-width: 200px;
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
            // Apply scale-down and opacity-fade to cards underneath
            const progress = scrollProgress[idx] || 0;
            
            // The card scales down and dims as the next cards stack above it
            const scale = 1 - progress * 0.04; // Gentle scaling down (max 4% smaller)
            const opacity = 1 - progress * 0.4;  // Gentle fade down (max 40% faded, leaving card 60% visible)
            
            // Offset the sticky positions slightly so the tops of all cards remain visible when fully stacked
            // Card 1 sticks at 120px, Card 2 at 145px, Card 3 at 170px, Card 4 at 195px
            const stickyTop = 120 + idx * 25;

            return (
              <div 
                key={idx}
                className="stacking-card"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: idx + 1,
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  backgroundColor: progress > 0.5 ? '#0c0f17' : '#111827' // Darken card background slightly as it gets stacked underneath
                }}
              >
                <div className="columns is-desktop is-multiline">
                  
                  {/* Left Column: Phase Info & Illustration */}
                  <div className="column is-5-desktop is-12-touch is-flex is-flex-direction-column is-justify-content-between">
                    <div>
                      {/* Big Number and Phase Name */}
                      <div className="is-flex is-align-items-center mb-4">
                        <span 
                          style={{ 
                            fontSize: '3rem', 
                            fontWeight: '300', 
                            color: '#A855F7', 
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

                    {/* Illustration image (from public/assets/images/) */}
                    <div className="mt-5 is-hidden-mobile">
                      <img 
                        src={phase.image} 
                        alt={`${phase.name} concept sketch`} 
                        className="phase-illustration"
                        onError={(e) => {
                          e.target.style.display = 'none'; // Fallback if image isn't loaded
                        }}
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
                                color: '#A855F7', 
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
