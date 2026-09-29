import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { LogoGuessCard } from './games/LogoGuessCard';
import { BrandColorCard } from './games/BrandColorCard';
import { BrandAZCard } from './games/BrandAZCard';
import { MarketingTermsCard } from './games/MarketingTermsCard';
import { TaglineGuessCard } from './games/TaglineGuessCard';
import { sound } from '../services/sound';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronUp, 
  Sparkles, 
  Zap, 
  HelpCircle,
  Lightbulb,
  ArrowDown
} from 'lucide-react';

const GAME_METADATA = {
  logo_guess: {
    title: 'Logo Guess',
    emoji: '🎯',
    color: '#00F59B'
  },
  brand_color: {
    title: 'Brand Color',
    emoji: '🎨',
    color: '#FFD166'
  },
  brand_az: {
    title: 'Brand A–Z',
    emoji: '🔤',
    color: '#9D4EDD'
  },
  marketing_terms: {
    title: 'Marketing Terms',
    emoji: '📚',
    color: '#00D2FF'
  },
  tagline_guess: {
    title: 'Tagline Guess',
    emoji: '🏷️',
    color: '#FF7A00'
  }
};

export function GameCard({ 
  question, 
  index, 
  totalInBatch, 
  onAnswerSubmit, 
  onNextSlide 
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [isSpeedBonus, setIsSpeedBonus] = useState(false);
  const startTimeRef = useRef(Date.now());

  const meta = GAME_METADATA[question.game_type] || {
    title: 'Marketing Challenge',
    emoji: '🎯',
    color: '#00F59B'
  };

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [question.id]);

  const handleSelectAnswer = (option) => {
    if (isAnswered) return; // Answer locking

    const responseTimeSec = (Date.now() - startTimeRef.current) / 1000;
    const correct = option.trim().toLowerCase() === question.correct_answer.trim().toLowerCase();
    
    // Speed bonus if answered correctly within 3.5 seconds
    const fast = correct && responseTimeSec < 3.5;
    const points = correct ? (fast ? 15 : 10) : 0;

    setSelectedOption(option);
    setIsAnswered(true);
    setIsCorrect(correct);
    setEarnedPoints(points);
    setIsSpeedBonus(fast);

    if (correct) {
      sound.playCorrect();
      // Subtle confetti on fast answer or random chance
      if (fast) {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.65 },
          colors: ['#00F59B', '#00D2FF', '#FFD166']
        });
      }
    } else {
      sound.playWrong();
    }

    // Notify parent to update score, streak, user stats
    onAnswerSubmit({
      questionId: question.id,
      gameType: question.game_type,
      correct,
      points,
      fast,
      responseTime: responseTimeSec
    });
  };

  const handleDirectBrandSubmit = (brandName, correct) => {
    if (isAnswered) return;
    const responseTimeSec = (Date.now() - startTimeRef.current) / 1000;
    const fast = correct && responseTimeSec < 4.0;
    const points = correct ? (fast ? 15 : 10) : 0;

    setSelectedOption(brandName);
    setIsAnswered(true);
    setIsCorrect(correct);
    setEarnedPoints(points);
    setIsSpeedBonus(fast);

    if (correct) {
      sound.playCorrect();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#9D4EDD', '#00D2FF', '#00F59B']
      });
    } else {
      sound.playWrong();
    }

    onAnswerSubmit({
      questionId: question.id,
      gameType: question.game_type,
      correct,
      points,
      fast,
      responseTime: responseTimeSec
    });
  };

  const renderGameContent = () => {
    switch (question.game_type) {
      case 'logo_guess':
        return <LogoGuessCard question={question} />;
      case 'brand_color':
        return <BrandColorCard question={question} />;
      case 'brand_az':
        return (
          <BrandAZCard 
            question={question} 
            isAnswered={isAnswered} 
            onDirectInputSubmit={handleDirectBrandSubmit} 
          />
        );
      case 'marketing_terms':
        return <MarketingTermsCard question={question} />;
      case 'tagline_guess':
        return <TaglineGuessCard question={question} />;
      default:
        return <div>{question.question}</div>;
    }
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="game-slide">
      {/* Top Header Row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: '6px'
      }}>
        {/* Game Category Badge */}
        <div 
          className="category-badge"
          style={{ borderColor: `${meta.color}40`, background: `${meta.color}15` }}
        >
          <span>{meta.emoji}</span>
          <span style={{ color: meta.color }}>{meta.title}</span>
        </div>

        {/* Difficulty Pill */}
        <div className={`diff-pill diff-${question.difficulty || 'medium'}`}>
          {question.difficulty || 'medium'}
        </div>
      </div>

      {/* Main Interactive Game Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        gap: '14px',
        margin: '12px 0'
      }}>
        {renderGameContent()}

        {/* Options Grid */}
        <div className="options-grid">
          {question.options.map((option, idx) => {
            const isThisSelected = selectedOption === option;
            const isThisCorrect = isAnswered && option.trim().toLowerCase() === question.correct_answer.trim().toLowerCase();
            const isThisWrong = isAnswered && isThisSelected && !isCorrect;
            const isDimmed = isAnswered && !isThisCorrect && !isThisSelected;

            let btnClass = 'option-btn';
            if (isThisCorrect) btnClass += ' correct';
            else if (isThisWrong) btnClass += ' wrong';
            else if (isThisSelected) btnClass += ' selected';
            else if (isDimmed) btnClass += ' dimmed';

            return (
              <button
                key={idx}
                type="button"
                className={btnClass}
                disabled={isAnswered}
                onClick={() => {
                  sound.playTap();
                  handleSelectAnswer(option);
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    background: isThisCorrect 
                      ? 'rgba(0, 245, 155, 0.3)' 
                      : isThisWrong 
                        ? 'rgba(255, 51, 102, 0.3)' 
                        : 'rgba(255, 255, 255, 0.08)',
                    color: isThisCorrect ? '#00F59B' : isThisWrong ? '#FF3366' : '#94A3B8'
                  }}>
                    {optionLetters[idx] || (idx + 1)}
                  </span>
                  <span>{option}</span>
                </div>

                {isThisCorrect && <CheckCircle2 size={20} color="#00F59B" />}
                {isThisWrong && <XCircle size={20} color="#FF3366" />}
              </button>
            );
          })}
        </div>

        {/* Answer Feedback & Educational Takeaway */}
        {isAnswered && (
          <div className="feedback-box">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 800,
                fontSize: '0.95rem',
                color: isCorrect ? 'var(--accent-neon-green)' : 'var(--accent-red)'
              }}>
                {isCorrect ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>CORRECT!</span>
                  </>
                ) : (
                  <>
                    <XCircle size={18} />
                    <span>CORRECT ANSWER: {question.correct_answer}</span>
                  </>
                )}
              </div>

              {isCorrect && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(0, 245, 155, 0.15)',
                  border: '1px solid rgba(0, 245, 155, 0.3)',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: 'var(--accent-neon-green)'
                }}>
                  {isSpeedBonus && <Zap size={12} color="#FFD166" />}
                  <span>+{earnedPoints} XP</span>
                </div>
              )}
            </div>

            <p style={{
              fontSize: '0.82rem',
              lineHeight: 1.4,
              color: 'var(--text-secondary)'
            }}>
              <Lightbulb size={13} style={{ display: 'inline', marginRight: '5px', verticalAlign: '-1px', color: 'var(--accent-yellow)' }} />
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Swipe Indicator & Quick Action */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: '4px'
      }}>
        {isAnswered ? (
          <button
            type="button"
            onClick={() => {
              sound.playSwipe();
              onNextSlide();
            }}
            style={{
              width: '100%',
              padding: '12px 18px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0, 245, 155, 0.15) 0%, rgba(0, 210, 255, 0.15) 100%)',
              border: '1px solid rgba(0, 245, 155, 0.4)',
              color: '#F8FAFC',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 245, 155, 0.2)'
            }}
          >
            <span>Next Challenge</span>
            <ChevronUp size={18} className="bounce-hint" />
          </button>
        ) : (
          <div 
            className="bounce-hint"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
          >
            <ChevronUp size={14} />
            <span>SWIPE UP FOR NEXT</span>
          </div>
        )}
      </div>
    </div>
  );
}
