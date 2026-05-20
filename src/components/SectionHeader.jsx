import React from 'react';
export default function SectionHeader({ label, title }) { 
  return (
    <div className="mb-6">
      <span className="tag is-rounded is-light mb-3" style={{ border: '1px solid #1A1A1A', backgroundColor: 'transparent' }}>{label}</span>
      <h2 className="title is-2">{title}</h2>
    </div>
  ); 
}
