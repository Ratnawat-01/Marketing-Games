import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export function MarketingTermsCard({ question }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '14px' }}>
      <div 
        className="game-stage"
        style={{
          width: '100%',
          padding: '22px 18px',
          background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.08) 0%, rgba(10, 15, 26, 0.95) 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(0, 210, 255, 0.25)',
          position: 'relative'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-heading)',
          color: 'var(--accent-cyan)',
          textTransform: 'uppercase',
          fontWeight: 800,
          letterSpacing: '0.08em',
          marginBottom: '8px'
        }}>
          <BookOpen size={13} />
          {question.category || 'Marketing Concept'}
        </div>

        <div style={{
          fontSize: '1.05rem',
          fontWeight: 600,
          color: '#F1F5F9',
          lineHeight: 1.5,
          textAlign: 'center',
          fontStyle: 'normal'
        }}>
          "{question.question}"
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '0 4px' }}>
        <span style={{ 
          fontSize: '0.85rem', 
          color: 'var(--text-secondary)',
          display: 'block',
          fontWeight: 600
        }}>
          Which marketing term matches this concept?
        </span>
      </div>
    </div>
  );
}
