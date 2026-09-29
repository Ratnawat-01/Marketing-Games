import React, { useState } from 'react';
import { 
  PlusCircle, 
  Trash2, 
  Edit, 
  Sliders, 
  Check, 
  AlertCircle, 
  RotateCcw,
  Layers,
  Sparkles,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { storage } from '../services/storage';
import { sound } from '../services/sound';

export function AdminView({ onQuestionsChanged }) {
  const [activeTab, setActiveTab] = useState('questions'); // 'questions' | 'weights' | 'create'
  const [questions, setQuestions] = useState(storage.getQuestions());
  const [weights, setWeights] = useState(storage.getWeights());
  const [filterGameType, setFilterGameType] = useState('all');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Form State for New Question
  const [formGameType, setFormGameType] = useState('logo_guess');
  const [formQuestion, setFormQuestion] = useState('');
  const [formCorrect, setFormCorrect] = useState('');
  const [formOption2, setFormOption2] = useState('');
  const [formOption3, setFormOption3] = useState('');
  const [formOption4, setFormOption4] = useState('');
  const [formDifficulty, setFormDifficulty] = useState('medium');
  const [formCategory, setFormCategory] = useState('');
  const [formExplanation, setFormExplanation] = useState('');
  // Extra fields
  const [formSvgType, setFormSvgType] = useState('nike');
  const [formColor1, setFormColor1] = useState('#DA291C');
  const [formColor2, setFormColor2] = useState('#FFC72C');
  const [formLetter, setFormLetter] = useState('M');
  const [formTagline, setFormTagline] = useState('');

  // Handle Create Question with Section 33 Validation
  const handleCreateQuestion = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const options = [formCorrect.trim(), formOption2.trim(), formOption3.trim(), formOption4.trim()].filter(Boolean);

    // Validation checks
    if (!formQuestion.trim()) {
      setErrorMsg('Please enter a question prompt.');
      return;
    }
    if (!formCorrect.trim()) {
      setErrorMsg('Correct answer is required.');
      return;
    }
    if (options.length < 3) {
      setErrorMsg('Please specify at least 3 answer options.');
      return;
    }
    const uniqueOptions = new Set(options.map(o => o.toLowerCase()));
    if (uniqueOptions.size !== options.length) {
      setErrorMsg('Duplicate options detected. Each option must be distinct.');
      return;
    }
    if (!formExplanation.trim()) {
      setErrorMsg('Educational explanation is required.');
      return;
    }

    const newQ = {
      id: `${formGameType}_${Date.now()}`,
      game_type: formGameType,
      difficulty: formDifficulty,
      category: formCategory.trim() || 'General Marketing',
      question: formQuestion.trim(),
      correct_answer: formCorrect.trim(),
      options: options,
      explanation: formExplanation.trim(),
      status: 'active',
      // Game-specific fields
      ...(formGameType === 'logo_guess' && { svgType: formSvgType, brand_id: formSvgType }),
      ...(formGameType === 'brand_color' && { colors: [formColor1, formColor2] }),
      ...(formGameType === 'brand_az' && { letter: formLetter.toUpperCase() }),
      ...(formGameType === 'tagline_guess' && { tagline: formTagline.trim() || formQuestion.trim() })
    };

    const updated = [newQ, ...questions];
    storage.saveQuestions(updated);
    setQuestions(updated);
    onQuestionsChanged?.(updated);

    // Reset Form
    setFormQuestion('');
    setFormCorrect('');
    setFormOption2('');
    setFormOption3('');
    setFormOption4('');
    setFormExplanation('');
    setFormTagline('');

    setSuccessMsg('New challenge question successfully added to the active pool!');
    sound.playCorrect();
    setTimeout(() => {
      setSuccessMsg('');
      setActiveTab('questions');
    }, 1500);
  };

  // Toggle active / inactive
  const handleToggleStatus = (id) => {
    const updated = questions.map(q => {
      if (q.id === id) {
        return { ...q, status: q.status === 'active' ? 'inactive' : 'active' };
      }
      return q;
    });
    storage.saveQuestions(updated);
    setQuestions(updated);
    onQuestionsChanged?.(updated);
    sound.playTap();
  };

  // Delete question
  const handleDeleteQuestion = (id) => {
    if (window.confirm('Are you sure you want to remove this question?')) {
      const updated = questions.filter(q => q.id !== id);
      storage.saveQuestions(updated);
      setQuestions(updated);
      onQuestionsChanged?.(updated);
      sound.playTap();
    }
  };

  // Reset to default
  const handleResetDefaults = () => {
    if (window.confirm('Reset all questions to default pool?')) {
      const initial = storage.resetQuestions();
      setQuestions(initial);
      onQuestionsChanged?.(initial);
      sound.playCorrect();
    }
  };

  // Save Weights
  const handleWeightChange = (key, value) => {
    const newWeights = { ...weights, [key]: Number(value) };
    setWeights(newWeights);
    storage.saveWeights(newWeights);
  };

  const filteredQuestions = filterGameType === 'all'
    ? questions
    : questions.filter(q => q.game_type === filterGameType);

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
          fontSize: '1.6rem',
          fontWeight: 800,
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <Sliders size={22} color="var(--accent-cyan)" />
          <span>Content Management</span>
        </h2>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
          Admin Panel — Manage questions & game distribution
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '4px',
        borderRadius: '999px',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {[
          { key: 'questions', label: 'Questions Pool' },
          { key: 'create', label: '+ Add Question' },
          { key: 'weights', label: 'Weights & Logic' }
        ].map(t => (
          <button
            key={t.key}
            type="button"
            onClick={() => {
              sound.playTap();
              setActiveTab(t.key);
            }}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === t.key ? 'var(--accent-cyan)' : 'transparent',
              color: activeTab === t.key ? '#041018' : 'var(--text-secondary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: QUESTIONS POOL */}
      {activeTab === 'questions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Filter Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <select
              value={filterGameType}
              onChange={(e) => setFilterGameType(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                outline: 'none'
              }}
            >
              <option value="all">All Game Types ({questions.length})</option>
              <option value="logo_guess">🎯 Logo Guess</option>
              <option value="brand_color">🎨 Brand Color</option>
              <option value="brand_az">🔤 Brand A–Z</option>
              <option value="marketing_terms">📚 Marketing Terms</option>
              <option value="tagline_guess">🏷️ Tagline Guess</option>
            </select>

            <button
              type="button"
              onClick={handleResetDefaults}
              title="Reset Defaults"
              style={{
                padding: '8px 12px',
                borderRadius: '12px',
                background: 'rgba(255, 51, 102, 0.12)',
                border: '1px solid rgba(255, 51, 102, 0.3)',
                color: 'var(--accent-red)',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filteredQuestions.map((q) => (
              <div 
                key={q.id}
                className="glass-panel"
                style={{
                  padding: '12px 14px',
                  borderRadius: '16px',
                  opacity: q.status === 'inactive' ? 0.45 : 1
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className={`diff-pill diff-${q.difficulty}`}>{q.difficulty}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{q.category}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => handleToggleStatus(q.id)}
                      title={q.status === 'active' ? "Deactivate" : "Activate"}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: q.status === 'active' ? 'var(--accent-neon-green)' : 'var(--text-muted)' }}
                    >
                      {q.status === 'active' ? <ToggleRight size={22} /> : <ToggleLeft size={22} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteQuestion(q.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-red)' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>
                  {q.question}
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--accent-neon-green)' }}>
                  ✓ Correct: <strong>{q.correct_answer}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: CREATE QUESTION */}
      {activeTab === 'create' && (
        <form onSubmit={handleCreateQuestion} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {successMsg && (
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0, 245, 155, 0.15)', border: '1px solid var(--accent-neon-green)', color: 'var(--accent-neon-green)', fontSize: '0.8rem', textAlign: 'center' }}>
              {successMsg}
            </div>
          )}

          {errorMsg && (
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255, 51, 102, 0.15)', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', fontSize: '0.8rem', textAlign: 'center' }}>
              {errorMsg}
            </div>
          )}

          {/* Game Type Selection */}
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px', fontWeight: 700 }}>
              GAME TYPE
            </label>
            <select
              value={formGameType}
              onChange={(e) => setFormGameType(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem'
              }}
            >
              <option value="logo_guess">🎯 Logo Guess</option>
              <option value="brand_color">🎨 Brand Color</option>
              <option value="brand_az">🔤 Brand A–Z</option>
              <option value="marketing_terms">📚 Marketing Terms</option>
              <option value="tagline_guess">🏷️ Tagline Guess</option>
            </select>
          </div>

          {/* Extra fields according to game type */}
          {formGameType === 'logo_guess' && (
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px', fontWeight: 700 }}>
                BRAND LOGO VECTOR
              </label>
              <select
                value={formSvgType}
                onChange={(e) => setFormSvgType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFF'
                }}
              >
                <option value="nike">Nike (Swoosh)</option>
                <option value="apple">Apple</option>
                <option value="starbucks">Starbucks</option>
                <option value="spotify">Spotify</option>
                <option value="netflix">Netflix</option>
                <option value="tesla">Tesla</option>
                <option value="target">Target</option>
                <option value="airbnb">Airbnb</option>
                <option value="bmw">BMW</option>
                <option value="fedex">FedEx</option>
              </select>
            </div>
          )}

          {formGameType === 'brand_color' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Color 1</label>
                <input
                  type="color"
                  value={formColor1}
                  onChange={(e) => setFormColor1(e.target.value)}
                  style={{ width: '100%', height: '40px', borderRadius: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Color 2</label>
                <input
                  type="color"
                  value={formColor2}
                  onChange={(e) => setFormColor2(e.target.value)}
                  style={{ width: '100%', height: '40px', borderRadius: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
                />
              </div>
            </div>
          )}

          {formGameType === 'brand_az' && (
            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Alphabet Letter</label>
              <input
                type="text"
                maxLength={1}
                value={formLetter}
                onChange={(e) => setFormLetter(e.target.value.toUpperCase())}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFF', textAlign: 'center', fontSize: '1.2rem', fontWeight: 800 }}
              />
            </div>
          )}

          {formGameType === 'tagline_guess' && (
            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Tagline Quote</label>
              <input
                type="text"
                placeholder='e.g. "Think Different."'
                value={formTagline}
                onChange={(e) => setFormTagline(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFF' }}
              />
            </div>
          )}

          {/* Question Text */}
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px', fontWeight: 700 }}>
              QUESTION PROMPT
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Which brand is associated with these colors?"
              value={formQuestion}
              onChange={(e) => setFormQuestion(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem'
              }}
            />
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>
              OPTIONS (1 Correct + 3 Distractors)
            </label>
            <input
              type="text"
              placeholder="Correct Answer *"
              value={formCorrect}
              onChange={(e) => setFormCorrect(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '10px', background: 'rgba(0, 245, 155, 0.08)', border: '1.5px solid var(--accent-neon-green)', color: '#FFF', fontSize: '0.85rem' }}
            />
            <input
              type="text"
              placeholder="Option 2 *"
              value={formOption2}
              onChange={(e) => setFormOption2(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFF', fontSize: '0.85rem' }}
            />
            <input
              type="text"
              placeholder="Option 3 *"
              value={formOption3}
              onChange={(e) => setFormOption3(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFF', fontSize: '0.85rem' }}
            />
            <input
              type="text"
              placeholder="Option 4 (Optional)"
              value={formOption4}
              onChange={(e) => setFormOption4(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFF', fontSize: '0.85rem' }}
            />
          </div>

          {/* Difficulty & Category */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Difficulty</label>
              <select
                value={formDifficulty}
                onChange={(e) => setFormDifficulty(e.target.value)}
                style={{ width: '100%', padding: '8px 10px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFF' }}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Category</label>
              <input
                type="text"
                placeholder="e.g. Retail"
                value={formCategory}
                onChange={(e) => setFormCategory(e.target.value)}
                style={{ width: '100%', padding: '8px 10px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#FFF' }}
              />
            </div>
          </div>

          {/* Explanation */}
          <div>
            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px', fontWeight: 700 }}>
              EDUCATIONAL EXPLANATION (Why / Takeaway) *
            </label>
            <textarea
              rows={2}
              placeholder="Why this answer is correct & what marketers can learn..."
              value={formExplanation}
              onChange={(e) => setFormExplanation(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFF',
                fontSize: '0.85rem'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '8px',
              padding: '14px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #00F59B 0%, #00B4D8 100%)',
              color: '#03151E',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Add to Game Pool
          </button>
        </form>
      )}

      {/* TAB 3: WEIGHTED RANDOMIZATION (PRD Section 15) */}
      {activeTab === 'weights' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="glass-panel" style={{ padding: '14px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 800, textTransform: 'uppercase' }}>
              Randomization Engine Distribution
            </span>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Adjust relative appearance probability across the 5 game types.
            </p>
          </div>

          {[
            { key: 'logo_guess', label: '🎯 Logo Guess' },
            { key: 'brand_color', label: '🎨 Brand Color' },
            { key: 'brand_az', label: '🔤 Brand A–Z' },
            { key: 'marketing_terms', label: '📚 Marketing Terms' },
            { key: 'tagline_guess', label: '🏷️ Tagline Guess' }
          ].map(item => (
            <div key={item.key} className="glass-panel" style={{ padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
                <span>{item.label}</span>
                <span style={{ color: 'var(--accent-neon-green)', fontFamily: 'var(--font-mono)' }}>
                  {weights[item.key] || 20}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={weights[item.key] || 20}
                onChange={(e) => handleWeightChange(item.key, e.target.value)}
                style={{ width: '100%', accentColor: 'var(--accent-neon-green)', cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
