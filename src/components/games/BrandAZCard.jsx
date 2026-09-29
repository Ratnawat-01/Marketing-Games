import React, { useState } from 'react';
import { ALPHABET_BRAND_MAP } from '../../data/initialBrands';
import { Keyboard, CheckCircle, ArrowRight } from 'lucide-react';

export function BrandAZCard({ question, isAnswered, onDirectInputSubmit }) {
  const letter = question.letter || 'M';
  const [typedInput, setTypedInput] = useState('');
  const [inputMode, setInputMode] = useState(false);
  const [inputError, setInputError] = useState('');

  const validBrandsForLetter = ALPHABET_BRAND_MAP[letter.toUpperCase()] || [question.correct_answer];

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!typedInput.trim() || isAnswered) return;

    const trimmed = typedInput.trim().toLowerCase();
    // Check if trimmed matches any valid brand for this letter or contains it
    const matchedBrand = validBrandsForLetter.find(b => 
      b.toLowerCase() === trimmed || 
      trimmed.includes(b.toLowerCase()) || 
      b.toLowerCase().includes(trimmed)
    );

    if (matchedBrand) {
      setInputError('');
      onDirectInputSubmit(matchedBrand, true);
    } else {
      setInputError(`"${typedInput}" not found under letter ${letter}`);
      onDirectInputSubmit(typedInput, false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '14px' }}>
      <div 
        className="game-stage"
        style={{
          width: '100%',
          padding: '20px 16px',
          background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.12) 0%, rgba(10, 15, 26, 0.95) 100%)',
          borderRadius: '24px',
          border: '1.5px solid rgba(157, 78, 221, 0.3)'
        }}
      >
        <div style={{ 
          fontSize: '0.72rem', 
          fontFamily: 'var(--font-heading)',
          color: 'var(--accent-purple)', 
          textTransform: 'uppercase', 
          fontWeight: 800,
          letterSpacing: '0.1em'
        }}>
          Alphabet Challenge
        </div>

        {/* Big Alphabet Badge */}
        <div style={{
          width: '76px',
          height: '76px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #9D4EDD 0%, #7B2CBF 100%)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-heading)',
          fontSize: '3rem',
          fontWeight: 900,
          boxShadow: '0 10px 25px rgba(157, 78, 221, 0.45)',
          margin: '10px 0'
        }}>
          {letter}
        </div>

        <div style={{
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          textAlign: 'center'
        }}>
          Brands starting with <strong style={{ color: '#F8FAFC' }}>"{letter}"</strong>
        </div>

        {/* Input Mode Toggle if not answered yet */}
        {!isAnswered && (
          <button
            type="button"
            onClick={() => setInputMode(!inputMode)}
            style={{
              marginTop: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '999px',
              padding: '4px 12px',
              color: 'var(--accent-cyan)',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <Keyboard size={12} />
            {inputMode ? 'Switch to Quick Options' : 'Or Type Any Brand'}
          </button>
        )}
      </div>

      {inputMode && !isAnswered ? (
        <form onSubmit={handleInputSubmit} style={{ width: '100%', marginTop: '4px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder={`e.g. ${validBrandsForLetter[0] || 'Brand'}`}
              value={typedInput}
              onChange={(e) => setTypedInput(e.target.value)}
              autoFocus
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1.5px solid rgba(157, 78, 221, 0.4)',
                color: '#FFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0 18px',
                borderRadius: '14px',
                background: 'var(--accent-purple)',
                color: '#FFF',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
          {inputError && (
            <div style={{ color: 'var(--accent-red)', fontSize: '0.75rem', marginTop: '6px', textAlign: 'center' }}>
              {inputError}
            </div>
          )}
        </form>
      ) : (
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
        </div>
      )}
    </div>
  );
}
