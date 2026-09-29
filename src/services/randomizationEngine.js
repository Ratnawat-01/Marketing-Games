import { storage } from './storage';

const GAME_TYPES = [
  'logo_guess',
  'brand_color',
  'brand_az',
  'marketing_terms',
  'tagline_guess'
];

// Utility to shuffle array
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export class RandomizationEngine {
  constructor() {
    this.history = []; // tracks last N game types e.g. ['logo_guess', 'tagline_guess']
  }

  /**
   * Selects the next game type adhering strictly to Rule 1, Rule 2, and Weights
   * @param {string[]} recentHistory
   * @param {Record<string, number>} weights
   */
  pickNextGameType(recentHistory = this.history, weights = storage.getWeights()) {
    const lastGame = recentHistory.length > 0 ? recentHistory[recentHistory.length - 1] : null;
    const lastFive = recentHistory.slice(-5);

    // Rule 1 & Rule 2 Filter:
    const candidateGames = GAME_TYPES.filter(game => {
      // Rule 1: No immediate consecutive repetition
      if (lastGame && game === lastGame) {
        return false;
      }
      // Rule 2: Not more than 2 times in last 5 games
      const frequencyInLast5 = lastFive.filter(g => g === game).length;
      if (frequencyInLast5 >= 2) {
        return false;
      }
      return true;
    });

    // Fallback if rules exhausted all candidate games (e.g. edge cases)
    const availablePool = candidateGames.length > 0
      ? candidateGames
      : GAME_TYPES.filter(g => g !== lastGame);

    // Weighted random selection
    let totalWeight = 0;
    availablePool.forEach(game => {
      totalWeight += (weights[game] ?? 20);
    });

    if (totalWeight <= 0) {
      return availablePool[Math.floor(Math.random() * availablePool.length)];
    }

    let randomVal = Math.random() * totalWeight;
    for (const game of availablePool) {
      const weight = weights[game] ?? 20;
      if (randomVal <= weight) {
        return game;
      }
      randomVal -= weight;
    }

    return availablePool[0];
  }

  /**
   * Generates a fully prepared, shuffled question object
   * @param {string} [preferredGameType]
   */
  getNextQuestion(preferredGameType = null) {
    const questions = storage.getQuestions().filter(q => q.status !== 'inactive');
    const recentAnsweredIds = storage.getAnsweredQuestionIds();
    const weights = storage.getWeights();

    const gameType = preferredGameType || this.pickNextGameType(this.history, weights);

    // Filter questions by selected game type
    let pool = questions.filter(q => q.game_type === gameType);

    if (pool.length === 0) {
      // Fallback to any active question
      pool = questions;
    }

    // Rule 3: Question-level deduplication (filter out recently answered)
    let freshQuestions = pool.filter(q => !recentAnsweredIds.includes(q.id));
    if (freshQuestions.length === 0) {
      // If user has answered all, reset or use pool
      freshQuestions = pool;
    }

    // Pick random question from filtered pool
    const selected = freshQuestions[Math.floor(Math.random() * freshQuestions.length)];

    // Update history
    this.history.push(selected.game_type);
    if (this.history.length > 20) {
      this.history.shift();
    }

    // Shuffle options so correct answer is at a randomized position
    const shuffledOptions = shuffleArray(selected.options || []);

    return {
      ...selected,
      instanceId: `${selected.id}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      options: shuffledOptions
    };
  }

  /**
   * Generates a queue of questions for zero-latency preloading
   * @param {number} count
   */
  generateBatch(count = 5) {
    const batch = [];
    for (let i = 0; i < count; i++) {
      batch.push(this.getNextQuestion());
    }
    return batch;
  }
}

export const randomizationEngine = new RandomizationEngine();
