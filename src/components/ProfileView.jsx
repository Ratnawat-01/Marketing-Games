import React, { useState } from 'react';
import { 
  User, 
  Flame, 
  Trophy, 
  Target, 
  Zap, 
  Award, 
  CheckCircle, 
  Edit3, 
  Save, 
  Layers 
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/achievements';
import { storage } from '../services/storage';
import { sound } from '../services/sound';

export function ProfileView({ userStats, userProfile, onUpdateProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userProfile.name);
  const [handle, setHandle] = useState(userProfile.handle);

  const accuracy = userStats.questionsPlayed > 0
    ? Math.round(((userStats.correctCount || 0) / userStats.questionsPlayed) * 100)
    : 0;

  const categories = [
    { key: 'logo_guess', label: 'Logo Guess', emoji: '🎯', color: '#00F59B' },
    { key: 'brand_color', label: 'Brand Color', emoji: '🎨', color: '#FFD166' },
    { key: 'brand_az', label: 'Brand A–Z', emoji: '🔤', color: '#9D4EDD' },
    { key: 'marketing_terms', label: 'Marketing Terms', emoji: '📚', color: '#00D2FF' },
    { key: 'tagline_guess', label: 'Tagline Guess', emoji: '🏷️', color: '#FF7A00' }
  ];

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updated = {
      ...userProfile,
      name: name.trim() || 'Marketer',
      handle: handle.startsWith('@') ? handle : `@${handle}`
    };
    storage.saveUserProfile(updated);
    onUpdateProfile(updated);
    setIsEditing(false);
    sound.playTap();
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      padding: '20px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }} className="custom-scroll">
      {/* Profile Header Card */}
      <div 
        className="glass-panel"
        style={{
          padding: '20px 18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer'
          }}
        >
          <Edit3 size={15} />
        </button>

        {/* Big Avatar */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00F59B 0%, #00B4D8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.2rem',
          boxShadow: '0 8px 25px rgba(0, 245, 155, 0.4)',
          marginBottom: '12px'
        }}>
          {userProfile.avatarEmoji || "🚀"}
        </div>

        {isEditing ? (
          <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '240px' }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              style={{
                padding: '8px 12px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}
            />
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="@handle"
              style={{
                padding: '6px 12px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#94A3B8',
                fontSize: '0.8rem',
                textAlign: 'center'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px',
                borderRadius: '10px',
                background: 'var(--accent-neon-green)',
                color: '#03151E',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Save Profile
            </button>
          </form>
        ) : (
          <>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#FFF' }}>
              {userProfile.name}
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
              {userProfile.handle}
            </span>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '8px',
              padding: '4px 10px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.05)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)'
            }}>
              <span>🎮 Guest Mode Active</span>
            </div>
          </>
        )}
      </div>

      {/* Stats Matrix Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px'
      }}>
        <div className="glass-panel" style={{ padding: '14px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
            Overall Score
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-neon-green)', marginTop: '2px' }}>
            {userStats.totalXP || 0} <span style={{ fontSize: '0.9rem' }}>XP</span>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '14px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
            Accuracy
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-cyan)', marginTop: '2px' }}>
            {accuracy}%
          </div>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
            {userStats.correctCount || 0} / {userStats.questionsPlayed || 0} correct
          </span>
        </div>

        <div className="glass-panel" style={{ padding: '14px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
            Current Streak
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, color: '#FF7A00', marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <Flame size={20} className={userStats.currentStreak > 0 ? 'flame-active' : ''} />
            <span>{userStats.currentStreak || 0}</span>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '14px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
            Best Streak
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-yellow)', marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <Trophy size={20} />
            <span>{userStats.bestStreak || 0}</span>
          </div>
        </div>
      </div>

      {/* Breakdown by Game Type (PRD Section 22) */}
      <div className="glass-panel" style={{ padding: '16px 18px' }}>
        <div style={{
          fontSize: '0.8rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          color: '#FFF',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '12px'
        }}>
          Games Played Breakdown
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {categories.map((cat) => {
            const played = userStats.categoryPlayed?.[cat.key] || 0;
            const correct = userStats.categoryCorrect?.[cat.key] || 0;
            const percent = played > 0 ? Math.round((correct / played) * 100) : 0;

            return (
              <div key={cat.key}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F1F5F9', fontWeight: 600 }}>
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                    {correct}/{played} ({percent}%)
                  </span>
                </div>
                {/* Progress bar */}
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${percent}%`,
                    height: '100%',
                    background: cat.color,
                    borderRadius: '999px',
                    transition: 'width 0.4s ease'
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements Showcase (PRD Section 37) */}
      <div className="glass-panel" style={{ padding: '16px 18px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <span style={{
            fontSize: '0.8rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            color: '#FFF',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            Achievements & Badges
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent-yellow)', fontWeight: 700 }}>
            {ACHIEVEMENTS.filter(a => a.requirement(userStats)).length} / {ACHIEVEMENTS.length}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {ACHIEVEMENTS.map((ach) => {
            const unlocked = ach.requirement(userStats);

            return (
              <div 
                key={ach.id}
                style={{
                  padding: '10px 12px',
                  borderRadius: '12px',
                  background: unlocked ? 'rgba(0, 245, 155, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                  border: unlocked ? '1px solid rgba(0, 245, 155, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                  opacity: unlocked ? 1 : 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{ach.icon}</span>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: unlocked ? '#FFF' : 'var(--text-muted)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {ach.title}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
                    {ach.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
