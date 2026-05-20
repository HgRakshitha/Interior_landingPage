import React, { useState } from 'react';

export default function Contact() {
  const [focusedField, setFocusedField] = useState(null);

  const inputStyle = (fieldName) => ({
    background: 'transparent',
    border: 'none',
    borderBottom: focusedField === fieldName ? '1px solid #A855F7' : '1px solid #374151',
    borderRadius: '0',
    color: '#FFFFFF',
    width: '100%',
    padding: '0.8rem 0',
    fontSize: '1rem',
    outline: 'none',
    marginBottom: '2.5rem',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Poppins, sans-serif'
  });

  const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    display: 'block'
  };

  return (
    <section className="section py-5 my-0" id="contact" style={{ backgroundColor: '#000000' }}>
      <div className="container px-6">
        <div className="columns is-variable is-8 is-desktop">
          
          {/* Left Column - Contact Info */}
          <div className="column is-6 is-flex is-flex-direction-column is-justify-content-space-between">
            <div>
              {/* Top Label */}
              <div className="mb-6">
                <span className="is-uppercase is-size-7 has-text-weight-semibold" style={{ letterSpacing: '0.15em', color: '#9CA3AF' }}>
                  [ CONTACT &middot; BEGIN A PROJECT ]
                </span>
              </div>

              {/* Heading */}
              <h2 className="title mb-6" style={{ 
                fontSize: '2.5rem', 
                lineHeight: '1.2', 
                fontWeight: 400, 
                fontFamily: 'Poppins, sans-serif',
                color: '#FFFFFF'
              }}>
                Tell us about <br />
                <span className="serif-italic pr-2" style={{ color: '#A855F7', fontStyle: 'italic' }}>your</span> space.
              </h2>
            </div>

            {/* Info Blocks */}
            <div className="mt-6">
              
              {/* Studio Block */}
              <div className="mb-5">
                <span style={labelStyle}>STUDIO</span>
                <p className="mt-2 is-size-6" style={{ color: '#D1D5DB', lineHeight: '1.6', fontFamily: 'Poppins, sans-serif' }}>
                  Unico Interiors &mdash; a division of Unico International <br />
                  Bengaluru &middot; Kochi &middot; Doha
                </p>
              </div>

              {/* Write Block */}
              <div className="mb-5">
                <span style={labelStyle}>WRITE</span>
                <p className="mt-2 is-size-6">
                  <a 
                    href="mailto:interiors@unico-international.com" 
                    style={{ color: '#FFFFFF', textDecoration: 'none', fontFamily: 'Poppins, sans-serif', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#A855F7'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  >
                    interiors@unico-international.com
                  </a>
                </p>
              </div>

              {/* Call Block */}
              <div>
                <span style={labelStyle}>CALL</span>
                <p className="mt-2 is-size-6" style={{ color: '#D1D5DB', fontFamily: 'Poppins, sans-serif' }}>
                  +91 90000 00000
                </p>
              </div>

            </div>
          </div>

          {/* Right Column - Form */}
          <div className="column is-6">
            <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: '2rem' }}>
              
              {/* Name Field */}
              <div>
                <label style={labelStyle}>YOUR NAME</label>
                <input 
                  type="text" 
                  style={inputStyle('name')}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label style={labelStyle}>EMAIL</label>
                <input 
                  type="email" 
                  style={inputStyle('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              {/* Project Field */}
              <div>
                <label style={labelStyle}>TELL US ABOUT THE PROJECT</label>
                <textarea 
                  rows="1"
                  style={{ ...inputStyle('project'), resize: 'none', overflowY: 'hidden' }}
                  onFocus={() => setFocusedField('project')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => {
                    // Auto grow height
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button 
                  type="submit"
                  className="button is-rounded is-white is-outlined px-6" 
                  style={{ 
                    height: '50px', 
                    letterSpacing: '0.15em',
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
                  <span className="is-size-7 has-text-weight-bold">SEND ENQUIRY</span>
                  <span className="ml-2 is-size-6" style={{ fontWeight: 400 }}>↗</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
