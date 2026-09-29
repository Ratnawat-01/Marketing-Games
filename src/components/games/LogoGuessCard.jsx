import React from 'react';
import { BrandLogo } from '../BrandLogos';

export function LogoGuessCard({ question }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '14px' }}>
      <div 
        className="game-stage"
        style={{
          width: '100%',
          padding: '24px 20px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(10,15,26,0.85) 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(255,255,255,0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <div style={{
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease'
        }}>
          <BrandLogo type={question.svgType || 'nike'} size={110} />
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '0 8px' }}>
        <h3 style={{ 
          fontFamily: 'var(--font-heading)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#F8FAFC',
          lineHeight: 1.3
        }}>
          {question.question}
        </h3>
        <span style={{ 
          fontSize: '0.8rem', 
          color: 'var(--text-muted)',
          display: 'block',
          marginTop: '4px'
        }}>
          Industry: <strong style={{ color: 'var(--text-secondary)' }}>{question.category}</strong>
        </span>
      </div>
    </div>
  );
}
