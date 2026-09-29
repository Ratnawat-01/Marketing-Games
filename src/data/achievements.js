export const ACHIEVEMENTS = [
  {
    id: "first_blood",
    title: "First Spark",
    icon: "⚡",
    description: "Answer your very first marketing challenge correctly.",
    requirement: (stats) => (stats.correctCount || 0) >= 1
  },
  {
    id: "streak_5",
    title: "On Fire",
    icon: "🔥",
    description: "Achieve a 5-question answer streak.",
    requirement: (stats) => (stats.bestStreak || 0) >= 5
  },
  {
    id: "streak_10",
    title: "Marketing Machine",
    icon: "🚀",
    description: "Reach an unstoppable 10-question streak!",
    requirement: (stats) => (stats.bestStreak || 0) >= 10
  },
  {
    id: "brand_hunter",
    title: "Brand Hunter",
    icon: "🎯",
    description: "Correctly identify 5 Logo Guess challenges.",
    requirement: (stats) => (stats.categoryCorrect?.logo_guess || 0) >= 5
  },
  {
    id: "color_savant",
    title: "Color Savant",
    icon: "🎨",
    description: "Decode 5 Brand Color palettes.",
    requirement: (stats) => (stats.categoryCorrect?.brand_color || 0) >= 5
  },
  {
    id: "alphabet_pro",
    title: "Alphabet Marketer",
    icon: "🔤",
    description: "Complete 5 Brand A–Z challenges.",
    requirement: (stats) => (stats.categoryCorrect?.brand_az || 0) >= 5
  },
  {
    id: "marketing_brain",
    title: "Marketing Brain",
    icon: "📚",
    description: "Master 5 deep Marketing Terms & Concepts.",
    requirement: (stats) => (stats.categoryCorrect?.marketing_terms || 0) >= 5
  },
  {
    id: "tagline_master",
    title: "Tagline Master",
    icon: "🏷️",
    description: "Identify 5 iconic advertising taglines.",
    requirement: (stats) => (stats.categoryCorrect?.tagline_guess || 0) >= 5
  },
  {
    id: "speed_demon",
    title: "Speed Demon",
    icon: "⚡",
    description: "Earn 5 fast-response speed bonuses (<3.5s).",
    requirement: (stats) => (stats.speedBonusCount || 0) >= 5
  },
  {
    id: "century_club",
    title: "Century Club",
    icon: "👑",
    description: "Amass 500+ XP in marketing knowledge.",
    requirement: (stats) => (stats.totalXP || 0) >= 500
  }
];
