import React from 'react';
import { 
  Play, 
  Flame, 
  Trophy, 
  Sparkles, 
  Calendar, 
  Layers, 
  Zap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../services/sound';

export function HomeView({ userStats, onStartPlaying }) {
  const gamePills = [
    { title: 'Logo Guess', icon: '🎯', desc: 'Identify brand logos' },
    { title: 'Brand Color', icon: '🎨', desc: 'Decode signature palettes' },
    { title: 'Brand A–Z', icon: '🔤', desc: 'Alphabet brand trivia' },
    { title: 'Marketing Terms', icon: '📚', desc: 'Concepts & strategies' },
    { title: 'Tagline Guess', icon: '🏷️', desc: 'Famous brand slogans' }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px'
    }} className="custom-scroll">
      {/* Top Brand Banner */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(0, 245, 155, 0.12)',
          border: '1px solid rgba(0, 245, 155, 0.25)',
          padding: '4px 14px',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: 800,
          color: 'var(--accent-neon-green)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '10px'
        }}>
          <Sparkles size={12} />
          <span>REELS-STYLE MARKETING TRIVIA</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.4rem',
          fontWeight: 900,
          color: '#FFFFFF',
          lineHeight: 1.1,
          letterSpacing: '-0.03em'
        }}>
          Marketing<span style={{ color: 'var(--accent-neon-green)' }}>Games</span>
        </h1>

        <p style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          marginTop: '6px',
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>
          Scroll. Guess. Learn. Repeat.
        </p>
      </div>

      {/* Primary Hero CTA Button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <button
          type="button"
          onClick={() => {
            sound.playTap();
            onStartPlaying();
          }}
          className="cta-button"
          style={{ width: '100%', maxWidth: '320px', padding: '18px 24px' }}
        >
          <Play size={22} fill="#03151E" />
          <span>START PLAYING</span>
        </button>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          Zero friction. Endless marketing feed.
        </span>
      </div>

      {/* Real-time User Stats Dashboard Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        width: '100%'
      }}>
        {/* Streak */}
        <div className="glass-panel" style={{ padding: '12px 10px', textAlign: 'center' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '4px',
            color: '#FF7A00',
            marginBottom: '4px'
          }}>
            <Flame size={16} className={userStats.currentStreak > 0 ? 'flame-active' : ''} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem' }}>
              {userStats.currentStreak || 0}
            </span>
          </div>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
            Streak
          </span>
        </div>

        {/* Best Score */}
        <div className="glass-panel" style={{ padding: '12px 10px', textAlign: 'center' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '4px',
            color: 'var(--accent-yellow)',
            marginBottom: '4px'
          }}>
            <Trophy size={16} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem' }}>
              {userStats.totalXP || 0}
            </span>
          </div>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
            Total XP
          </span>
        </div>

        {/* Questions Today */}
        <div className="glass-panel" style={{ padding: '12px 10px', textAlign: 'center' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '4px',
            color: 'var(--accent-cyan)',
            marginBottom: '4px'
          }}>
            <Calendar size={16} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem' }}>
              {userStats.todayCount || 0}
            </span>
          </div>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
            Today
          </span>
        </div>
      </div>

      {/* 5 MVP Game Modes Showcase */}
      <div style={{ width: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}>
          <span style={{
            fontSize: '0.78rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            5 In-Feed Game Modes
          </span>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent-neon-green)', fontWeight: 700 }}>
            Randomized Live
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {gamePills.map((game, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.3rem' }}>{game.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: '#FFF' }}>
                    {game.title}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {game.desc}
                  </div>
                </div>
              </div>
              <ArrowRight size={14} color="var(--text-muted)" />
            </div>
          ))}
        </div>
      </div>

      {/* Core Principle Callout */}
      <div style={{
        padding: '12px 14px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <ShieldCheck size={20} color="var(--accent-cyan)" />
        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
          <strong>Don't make users choose what to play.</strong> Swipe up to cycle dynamically through endless brand challenges.
        </span>
      </div>
    </div>
  );
}
