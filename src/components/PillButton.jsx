import React from 'react';
export default function PillButton({ children }) { 
  return (
    <button className="button is-rounded is-outlined is-black px-5">
      {children}
    </button>
  ); 
}
