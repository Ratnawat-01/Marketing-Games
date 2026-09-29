import { INITIAL_QUESTIONS } from '../data/initialQuestions';
import { INITIAL_BRANDS } from '../data/initialBrands';

const STORAGE_KEYS = {
  QUESTIONS: 'mg_questions_v1',
  BRANDS: 'mg_brands_v1',
  WEIGHTS: 'mg_game_weights_v1',
  USER_STATS: 'mg_user_stats_v1',
  USER_PROFILE: 'mg_user_profile_v1',
  RECENT_ANSWERS: 'mg_recent_answers_v1'
};

const DEFAULT_WEIGHTS = {
  logo_guess: 25,
  brand_color: 15,
  brand_az: 20,
  marketing_terms: 20,
  tagline_guess: 20
};

const DEFAULT_USER_STATS = {
  totalXP: 0,
  currentStreak: 0,
  bestStreak: 0,
  questionsPlayed: 0,
  correctCount: 0,
  speedBonusCount: 0,
  todayCount: 0,
  lastPlayedDate: new Date().toDateString(),
  categoryPlayed: {
    logo_guess: 0,
    brand_color: 0,
    brand_az: 0,
    marketing_terms: 0,
    tagline_guess: 0
  },
  categoryCorrect: {
    logo_guess: 0,
    brand_color: 0,
    brand_az: 0,
    marketing_terms: 0,
    tagline_guess: 0
  }
};

const DEFAULT_USER_PROFILE = {
  id: "usr_guest_" + Math.random().toString(36).substring(2, 8),
  name: "Marketing Trainee",
  handle: "@growth_pro",
  isGuest: true,
  avatarEmoji: "🚀"
};

export const storage = {
  // Questions
  getQuestions() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Failed to load questions from storage", e);
    }
    // Seed default
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
    return INITIAL_QUESTIONS;
  },

  saveQuestions(questions) {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  },

  resetQuestions() {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
    return INITIAL_QUESTIONS;
  },

  // Brands
  getBrands() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BRANDS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error("Failed to load brands from storage", e);
    }
    localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(INITIAL_BRANDS));
    return INITIAL_BRANDS;
  },

  saveBrands(brands) {
    localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(brands));
  },

  // Weights
  getWeights() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WEIGHTS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error("Failed to load weights", e);
    }
    return DEFAULT_WEIGHTS;
  },

  saveWeights(weights) {
    localStorage.setItem(STORAGE_KEYS.WEIGHTS, JSON.stringify(weights));
  },

  // User Stats & XP
  getUserStats() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER_STATS);
      if (data) {
        const stats = JSON.parse(data);
        // Reset daily count if date changed
        const today = new Date().toDateString();
        if (stats.lastPlayedDate !== today) {
          stats.todayCount = 0;
          stats.lastPlayedDate = today;
          localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
        }
        return { ...DEFAULT_USER_STATS, ...stats };
      }
    } catch (e) {
      console.error("Failed to load stats", e);
    }
    return DEFAULT_USER_STATS;
  },

  saveUserStats(stats) {
    localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats));
  },

  // User Profile
  getUserProfile() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error("Failed to load profile", e);
    }
    return DEFAULT_USER_PROFILE;
  },

  saveUserProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  },

  // Recent Question IDs (for Deduplication)
  getAnsweredQuestionIds() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.RECENT_ANSWERS);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error(e);
    }
    return [];
  },

  recordAnsweredQuestionId(id) {
    const list = this.getAnsweredQuestionIds();
    // Keep max 25 recent items to avoid infinite exclusion
    const updated = [id, ...list.filter(x => x !== id)].slice(0, 25);
    localStorage.setItem(STORAGE_KEYS.RECENT_ANSWERS, JSON.stringify(updated));
  }
};
