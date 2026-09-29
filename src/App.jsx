import React, { useState, useEffect } from 'react';
import { HomeView } from './components/HomeView';
import { GameFeed } from './components/GameFeed';
import { LeaderboardView } from './components/LeaderboardView';
import { ProfileView } from './components/ProfileView';
import { AdminView } from './components/AdminView';
import { BottomNav } from './components/BottomNav';
import { storage } from './services/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [userStats, setUserStats] = useState(storage.getUserStats());
  const [userProfile, setUserProfile] = useState(storage.getUserProfile());
  const [isFramed, setIsFramed] = useState(true);

  // Sync stats when updated
  const handleUpdateStats = (newStats) => {
    setUserStats(newStats);
    storage.saveUserStats(newStats);
  };

  // Sync profile when updated
  const handleUpdateProfile = (newProfile) => {
    setUserProfile(newProfile);
    storage.saveUserProfile(newProfile);
  };

  // Switch to Play feed immediately
  const handleStartPlaying = () => {
    setActiveTab('play');
  };

  return (
    <div className={`app-viewport ${isFramed ? 'framed' : ''}`}>
      {/* Content Area according to active tab */}
      <main className="app-content">
        {activeTab === 'home' && (
          <HomeView
            userStats={userStats}
            onStartPlaying={handleStartPlaying}
          />
        )}

        {activeTab === 'play' && (
          <GameFeed
            userStats={userStats}
            onUpdateStats={handleUpdateStats}
            isFramed={isFramed}
            onToggleFrame={() => setIsFramed(!isFramed)}
          />
        )}

        {activeTab === 'rankings' && (
          <LeaderboardView
            userStats={userStats}
            userProfile={userProfile}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            userStats={userStats}
            userProfile={userProfile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activeTab === 'admin' && (
          <AdminView
            onQuestionsChanged={() => {}}
          />
        )}
      </main>

      {/* Persistent Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
    </div>
  );
}
