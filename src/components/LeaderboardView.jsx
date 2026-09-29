import React, { useState } from 'react';
import { Trophy, Medal, Flame, Crown, Sparkles, User } from 'lucide-react';
import { sound } from '../services/sound';

const MOCK_LEADERBOARD = {
  daily: [
    { rank: 1, name: "Rahul S.", handle: "@rahul_mktg", xp: 1450, streak: 12, avatar: "👑" },
    { rank: 2, name: "Priya Menon", handle: "@priya_brands", xp: 1280, streak: 9, avatar: "⚡" },
    { rank: 3, name: "Aman Gupta", handle: "@aman_growth", xp: 1120, streak: 8, avatar: "🎯" },
    { rank: 4, name: "Sara Chen", handle: "@sarah_c", xp: 950, streak: 6, avatar: "🚀" },
    { rank: 5, name: "Marcus Brody", handle: "@m_brody", xp: 820, streak: 5, avatar: "🔥" },
    { rank: 6, name: "Elena Rostova", handle: "@elena_ad", xp: 740, streak: 4, avatar: "🌟" },
    { rank: 7, name: "Karthik R.", handle: "@karthik_in", xp: 690, streak: 4, avatar: "💡" }
  ],
  weekly: [
    { rank: 1, name: "Priya Menon", handle: "@priya_brands", xp: 8420, streak: 18, avatar: "⚡" },
    { rank: 2, name: "Rahul S.", handle: "@rahul_mktg", xp: 7950, streak: 16, avatar: "👑" },
    { rank: 3, name: "Aman Gupta", handle: "@aman_growth", xp: 7430, streak: 14, avatar: "🎯" },
    { rank: 4, name: "David Kim", handle: "@kim_growth", xp: 6890, streak: 11, avatar: "🔥" },
    { rank: 5, name: "Ananya Roy", handle: "@ananya_m", xp: 6240, streak: 10, avatar: "✨" },
    { rank: 6, name: "Lucas Vance", handle: "@lucas_v", xp: 5800, streak: 8, avatar: "🚀" },
    { rank: 7, name: "Sara Chen", handle: "@sarah_c", xp: 5310, streak: 9, avatar: "💡" }
  ],
  all_time: [
    { rank: 1, name: "Sophia Reynolds", handle: "@cmo_sophia", xp: 24890, streak: 34, avatar: "👑" },
    { rank: 2, name: "Priya Menon", handle: "@priya_brands", xp: 21450, streak: 26, avatar: "⚡" },
    { rank: 3, name: "Rahul S.", handle: "@rahul_mktg", xp: 19800, streak: 22, avatar: "🔥" },
    { rank: 4, name: "Aman Gupta", handle: "@aman_growth", xp: 18320, streak: 19, avatar: "🎯" },
    { rank: 5, name: "Liam O'Connor", handle: "@liam_ads", xp: 15400, streak: 17, avatar: "🌟" },
    { rank: 6, name: "Elena Rostova", handle: "@elena_ad", xp: 14100, streak: 15, avatar: "🚀" },
    { rank: 7, name: "Zack Miller", handle: "@zmiller", xp: 12900, streak: 14, avatar: "✨" }
  ]
};

export function LeaderboardView({ userStats, userProfile }) {
  const [tab, setTab] = useState('weekly');

  const list = MOCK_LEADERBOARD[tab] || MOCK_LEADERBOARD.weekly;
  const userXP = userStats.totalXP || 0;

  // Compute user position
  let userRank = 4;
  if (userXP > list[0].xp) userRank = 1;
  else if (userXP > list[1].xp) userRank = 2;
  else if (userXP > list[2].xp) userRank = 3;
  else userRank = Math.min(8, Math.max(4, Math.floor(10 - userXP / 150)));

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
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.7rem',
          fontWeight: 800,
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <Trophy size={24} color="var(--accent-yellow)" />
          <span>Leaderboard</span>
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
          Top marketing minds competing globally
        </p>
      </div>

      {/* Segmented Period Tabs */}
      <div style={{
        display: 'flex',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '4px',
        borderRadius: '999px',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {['daily', 'weekly', 'all_time'].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              sound.playTap();
              setTab(t);
            }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '999px',
              border: 'none',
              background: tab === t ? 'var(--accent-neon-green)' : 'transparent',
              color: tab === t ? '#041018' : 'var(--text-secondary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'all 0.2s ease'
            }}
          >
            {t.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '12px',
        margin: '10px 0 16px 0',
        padding: '10px 0'
      }}>
        {/* 2nd Place */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80px'
        }}>
          <span style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🥈</span>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #A0AEC0 0%, #718096 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            border: '2px solid #CBD5E0',
            boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
          }}>
            {list[1].avatar}
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFF', marginTop: '6px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
            {list[1].name}
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)', fontWeight: 800 }}>
            {list[1].xp} XP
          </span>
        </div>

        {/* 1st Place */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '90px',
          transform: 'translateY(-10px)'
        }}>
          <Crown size={24} color="#FFD166" style={{ marginBottom: '2px' }} />
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFD166 0%, #FF9900 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.6rem',
            border: '3px solid #FFF',
            boxShadow: '0 8px 24px rgba(255, 209, 102, 0.45)'
          }}>
            {list[0].avatar}
          </div>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFF', marginTop: '6px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
            {list[0].name}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-yellow)', fontWeight: 800 }}>
            {list[0].xp} XP
          </span>
        </div>

        {/* 3rd Place */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80px'
        }}>
          <span style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🥉</span>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ED8936 0%, #C05621 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            border: '2px solid #F6AD55',
            boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
          }}>
            {list[2].avatar}
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFF', marginTop: '6px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
            {list[2].name}
          </span>
          <span style={{ fontSize: '0.68rem', color: '#ED8936', fontWeight: 800 }}>
            {list[2].xp} XP
          </span>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {list.slice(3).map((item) => (
          <div
            key={item.rank}
            className="glass-panel"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderRadius: '14px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                width: '22px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textAlign: 'center'
              }}>
                #{item.rank}
              </span>

              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem'
              }}>
                {item.avatar}
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: '#FFF' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {item.handle}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.88rem', color: 'var(--accent-neon-green)' }}>
                {item.xp} XP
              </div>
              <div style={{ fontSize: '0.68rem', color: '#FF7A00', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
                <Flame size={10} />
                <span>{item.streak}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Current User Card */}
        <div
          style={{
            marginTop: '8px',
            background: 'linear-gradient(135deg, rgba(0, 245, 155, 0.15) 0%, rgba(0, 210, 255, 0.15) 100%)',
            border: '1.5px solid var(--accent-neon-green)',
            borderRadius: '16px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 6px 20px rgba(0, 245, 155, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              width: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 800,
              color: 'var(--accent-neon-green)',
              textAlign: 'center'
            }}>
              #{userRank}
            </span>

            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--accent-neon-green)',
              color: '#041018',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 800
            }}>
              {userProfile.avatarEmoji || "🚀"}
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.9rem', color: '#FFF' }}>
                You ({userProfile.name})
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                {userProfile.handle}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--accent-neon-green)' }}>
              {userXP} XP
            </div>
            <div style={{ fontSize: '0.72rem', color: '#FF7A00', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '3px' }}>
              <Flame size={12} />
              <span>{userStats.currentStreak || 0} streak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
