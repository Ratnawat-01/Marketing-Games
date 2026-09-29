import React from 'react';

export function BrandColorCard({ question }) {
  const colors = question.colors || ['#DA291C', '#FFC72C'];
  const colorNames = question.color_names || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '16px' }}>
      <div 
        className="game-stage"
        style={{
          width: '100%',
          padding: '24px 16px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(10,15,26,0.9) 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(255,255,255,0.08)'
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: colors.length > 3 ? '12px' : '20px',
          flexWrap: 'wrap'
        }}>
          {colors.map((hex, index) => (
            <div 
              key={index} 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
            >
              <div 
                className="color-swatch" 
                style={{ 
                  backgroundColor: hex,
                  width: colors.length > 3 ? '48px' : '62px',
                  height: colors.length > 3 ? '48px' : '62px'
                }}
              />
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.68rem', 
                color: 'var(--text-muted)',
                letterSpacing: '0.04em'
              }}>
                {hex}
              </span>
            </div>
          ))}
        </div>

        {colorNames.length > 0 && (
          <div style={{ 
            marginTop: '12px',
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            textAlign: 'center'
          }}>
            Palette: {colorNames.join(' + ')}
          </div>
        )}
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
          Category: <strong style={{ color: 'var(--text-secondary)' }}>{question.category}</strong>
        </span>
      </div>
    </div>
  );
}
