import React from 'react';
import { Quote, Tag } from 'lucide-react';

export function TaglineGuessCard({ question }) {
  const tagline = question.tagline || question.question;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '14px' }}>
      <div 
        className="game-stage"
        style={{
          width: '100%',
          padding: '24px 20px',
          background: 'linear-gradient(135deg, rgba(255, 122, 0, 0.1) 0%, rgba(10, 15, 26, 0.95) 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(255, 122, 0, 0.28)',
          position: 'relative'
        }}
      >
        <Quote 
          size={36} 
          style={{ 
            color: 'rgba(255, 122, 0, 0.25)', 
            position: 'absolute', 
            top: '12px', 
            left: '16px' 
          }} 
        />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-heading)',
          color: 'var(--accent-amber)',
          textTransform: 'uppercase',
          fontWeight: 800,
          letterSpacing: '0.08em',
          marginBottom: '10px',
          zIndex: 1
        }}>
          <Tag size={13} />
          {question.category || 'Advertising Slogan'}
        </div>

        <div style={{
          fontSize: '1.5rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          zIndex: 1,
          margin: '6px 0'
        }}>
          “{tagline}”
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '0 4px' }}>
        <h3 style={{ 
          fontFamily: 'var(--font-heading)',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#F8FAFC'
        }}>
          Which brand owns this famous tagline?
        </h3>
      </div>
    </div>
  );
}
