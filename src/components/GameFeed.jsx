import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { GameCard } from './GameCard';
import { randomizationEngine } from '../services/randomizationEngine';
import { storage } from '../services/storage';
import { sound } from '../services/sound';
import { 
  Flame, 
  Volume2, 
  VolumeX, 
  SkipForward, 
  Smartphone, 
  Maximize2,
  Share2,
  Sparkles
} from 'lucide-react';

export function GameFeed({ 
  userStats, 
  onUpdateStats, 
  isFramed, 
  onToggleFrame 
}) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(sound.isMuted());
  const [streakMilestoneToast, setStreakMilestoneToast] = useState(null);
  const [shareToast, setShareToast] = useState(false);
  const feedContainerRef = useRef(null);

  // Initialize questions batch
  useEffect(() => {
    const initialBatch = randomizationEngine.generateBatch(5);
    setQuestions(initialBatch);
  }, []);

  // Preloading buffer: when approaching end of queue, append new questions
  useEffect(() => {
    if (currentIndex >= questions.length - 2 && questions.length > 0) {
      const more = randomizationEngine.generateBatch(4);
      setQuestions(prev => [...prev, ...more]);
    }
  }, [currentIndex, questions.length]);

  // Handle answer submission
  const handleAnswerSubmit = ({ questionId, gameType, correct, points, fast, responseTime }) => {
    // Record question to avoid immediate repetition
    storage.recordAnsweredQuestionId(questionId);

    const prevStreak = userStats.currentStreak || 0;
    const newStreak = correct ? prevStreak + 1 : 0;
    const bestStreak = Math.max(userStats.bestStreak || 0, newStreak);
    const newTotalXP = (userStats.totalXP || 0) + points;
    const newQuestionsPlayed = (userStats.questionsPlayed || 0) + 1;
    const newCorrectCount = (userStats.correctCount || 0) + (correct ? 1 : 0);
    const newSpeedCount = (userStats.speedBonusCount || 0) + (fast ? 1 : 0);
    const newTodayCount = (userStats.todayCount || 0) + 1;

    const updatedCategoryPlayed = {
      ...userStats.categoryPlayed,
      [gameType]: (userStats.categoryPlayed?.[gameType] || 0) + 1
    };

    const updatedCategoryCorrect = {
      ...userStats.categoryCorrect,
      [gameType]: (userStats.categoryCorrect?.[gameType] || 0) + (correct ? 1 : 0)
    };

    const updatedStats = {
      ...userStats,
      totalXP: newTotalXP,
      currentStreak: newStreak,
      bestStreak: bestStreak,
      questionsPlayed: newQuestionsPlayed,
      correctCount: newCorrectCount,
      speedBonusCount: newSpeedCount,
      todayCount: newTodayCount,
      categoryPlayed: updatedCategoryPlayed,
      categoryCorrect: updatedCategoryCorrect
    };

    onUpdateStats(updatedStats);

    // Check for milestone celebrations
    if (correct) {
      if (newStreak === 5) {
        sound.playStreak();
        setStreakMilestoneToast('🔥 5 IN A ROW! You are on fire!');
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
        setTimeout(() => setStreakMilestoneToast(null), 3000);
      } else if (newStreak === 10) {
        sound.playStreak();
        setStreakMilestoneToast('🚀 MARKETING MACHINE! 10 Consecutive Wins!');
        confetti({ particleCount: 120, spread: 100, origin: { y: 0.4 } });
        setTimeout(() => setStreakMilestoneToast(null), 3500);
      }
    }
  };

  // Scroll to next slide
  const scrollToNextSlide = () => {
    if (feedContainerRef.current) {
      const nextIndex = currentIndex + 1;
      const targetY = nextIndex * feedContainerRef.current.clientHeight;
      feedContainerRef.current.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      setCurrentIndex(nextIndex);
    }
  };

  // Scroll listener to update active index
  const handleScroll = (e) => {
    const container = e.target;
    const height = container.clientHeight;
    if (height > 0) {
      const index = Math.round(container.scrollTop / height);
      if (index !== currentIndex && index >= 0 && index < questions.length) {
        setCurrentIndex(index);
      }
    }
  };

  // Keyboard navigation (ArrowDown / ArrowUp)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        scrollToNextSlide();
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        if (feedContainerRef.current) {
          const prevIndex = currentIndex - 1;
          const targetY = prevIndex * feedContainerRef.current.clientHeight;
          feedContainerRef.current.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
          setCurrentIndex(prevIndex);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, questions.length]);

  const toggleSound = () => {
    const newMuted = sound.toggleMute();
    setIsMuted(newMuted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Marketing Games',
        text: `I'm on a ${userStats.currentStreak || 0} streak in Marketing Games! Can you beat my score?`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2000);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Top Floating Glass Header HUD */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '52px',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 40,
        background: 'linear-gradient(180deg, rgba(8,12,20,0.85) 0%, rgba(8,12,20,0) 100%)',
        pointerEvents: 'none'
      }}>
        {/* Streak & XP Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: 'rgba(255, 122, 0, 0.15)',
            border: '1px solid rgba(255, 122, 0, 0.35)',
            padding: '4px 10px',
            borderRadius: '999px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            fontWeight: 800,
            color: '#FF9E40'
          }}>
            <Flame 
              size={15} 
              className={userStats.currentStreak > 0 ? 'flame-active' : ''} 
              color="#FF7A00" 
            />
            <span>{userStats.currentStreak || 0}</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(0, 245, 155, 0.12)',
            border: '1px solid rgba(0, 245, 155, 0.25)',
            padding: '4px 10px',
            borderRadius: '999px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            fontWeight: 800,
            color: 'var(--accent-neon-green)'
          }}>
            <Sparkles size={13} />
            <span>{userStats.totalXP || 0} XP</span>
          </div>
        </div>

        {/* Right Action Icons (Sound, Share, Frame Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'auto' }}>
          <button
            type="button"
            onClick={toggleSound}
            aria-label="Toggle Sound"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: isMuted ? 'var(--text-muted)' : 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          <button
            type="button"
            onClick={handleShare}
            aria-label="Share Challenge"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Share2 size={14} />
          </button>

          <button
            type="button"
            onClick={onToggleFrame}
            title={isFramed ? "Expand Fullscreen" : "Mobile Frame"}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {isFramed ? <Maximize2 size={13} /> : <Smartphone size={13} />}
          </button>
        </div>
      </div>

      {/* Floating Milestone Celebration Banner */}
      {streakMilestoneToast && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          background: 'linear-gradient(135deg, #FF7A00 0%, #FF3366 100%)',
          color: '#FFF',
          padding: '8px 20px',
          borderRadius: '999px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '0.88rem',
          boxShadow: '0 8px 25px rgba(255, 122, 0, 0.5)',
          whiteSpace: 'nowrap',
          animation: 'slideUpFade 0.3s ease'
        }}>
          {streakMilestoneToast}
        </div>
      )}

      {/* Share Toast */}
      {shareToast && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid var(--accent-neon-green)',
          color: 'var(--accent-neon-green)',
          padding: '6px 16px',
          borderRadius: '999px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.8rem',
          whiteSpace: 'nowrap'
        }}>
          Link copied to clipboard! 📋
        </div>
      )}

      {/* Vertical Reels Snap Feed */}
      <div 
        ref={feedContainerRef}
        className="snap-feed"
        onScroll={handleScroll}
      >
        {questions.map((q, idx) => (
          <GameCard
            key={q.instanceId || `${q.id}_${idx}`}
            question={q}
            index={idx}
            totalInBatch={questions.length}
            onAnswerSubmit={handleAnswerSubmit}
            onNextSlide={scrollToNextSlide}
          />
        ))}
      </div>
    </div>
  );
}
