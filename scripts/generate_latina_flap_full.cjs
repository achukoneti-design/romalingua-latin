// Full generator for Latina Flap integration
const fs = require('fs');

const flapData = JSON.parse(fs.readFileSync('scripts/latina_flap_data.json', 'utf8'));
const FLAP_CSS = fs.readFileSync('scripts/flap_css.txt', 'utf8');

// HTML Markup for #tabFlap
const FLAP_HTML = `
    <!-- ==================== TAB 5: LATINA FLAP MINI-GAME ==================== -->
    <div id="tabFlap" class="tab-content app-section" style="display: none;">
      <div class="flap-section">
        <!-- Banner Header -->
        <div class="flap-banner">
          <div class="flap-title-wrap">
            <div class="flap-banner-icon">🦅</div>
            <div>
              <div class="flap-title">Latina Flap · Aquila Romana</div>
              <div class="flap-subtitle">Fly the Roman Eagle through the correct Latin portals · 20 Levels of GCSE Mastery</div>
            </div>
          </div>
          <div class="flap-banner-stats">
            <div class="flap-stat-badge">
              <span>🏆 Peak Level:</span>
              <span class="val" id="flapStatPeakLevel">Level I</span>
            </div>
            <div class="flap-stat-badge">
              <span>⚡ Mode High Score:</span>
              <span class="val" id="flapStatHighScore">0</span>
            </div>
            <div class="flap-stat-badge">
              <span>⭐ Total Flights:</span>
              <span class="val" id="flapStatTotalFlights">0</span>
            </div>
          </div>
        </div>

        <!-- 1. LOBBY SCREEN (Mode & Level Select) -->
        <div id="flapLobbyScreen" class="flap-lobby">
          <!-- Vocabulary & Difficulty Mode Selector -->
          <div class="flap-card-panel">
            <div class="flap-card-title">
              <span>⚔️</span> Select Vocabulary & Difficulty Mode
            </div>
            <div class="flap-mode-grid">
              <button type="button" class="flap-mode-btn active" data-mode="easy" onclick="setFlapMode('easy')">
                <div class="mode-header">
                  <span class="mode-name">Easy</span>
                  <span class="mode-tag">Tirones</span>
                </div>
                <div class="mode-desc">Top 100 most common GCSE Latin words (puella, servus, currit, via). Ideal for warmup and building reflex speed.</div>
                <div class="mode-score">High Score: <span id="modeHighEasy">0</span></div>
              </button>

              <button type="button" class="flap-mode-btn" data-mode="intermediate" onclick="setFlapMode('intermediate')">
                <div class="mode-header">
                  <span class="mode-name">Intermediate</span>
                  <span class="mode-tag">Legionarii</span>
                </div>
                <div class="mode-desc">Core 446 DVL vocabulary list. Comprehensive syllabus coverage across all nouns, verbs, and conjunctions.</div>
                <div class="mode-score">High Score: <span id="modeHighInter">0</span></div>
              </button>

              <button type="button" class="flap-mode-btn" data-mode="hard" onclick="setFlapMode('hard')">
                <div class="mode-header">
                  <span class="mode-name">Hard</span>
                  <span class="mode-tag">Centuriones</span>
                </div>
                <div class="mode-desc">Subtle vocabulary distractors & confusable pairs (cadere vs caedere, manere vs monere, hostis vs hospes).</div>
                <div class="mode-score">High Score: <span id="modeHighHard">0</span></div>
              </button>

              <button type="button" class="flap-mode-btn" data-mode="cases" onclick="setFlapMode('cases')">
                <div class="mode-header">
                  <span class="mode-name">Case Mastery</span>
                  <span class="mode-tag">Grammatici</span>
                </div>
                <div class="mode-desc">Advanced declension traps & grammar syntax (e.g. 'to the slaves' -> servis vs servos, tenses & participles).</div>
                <div class="mode-score">High Score: <span id="modeHighCases">0</span></div>
              </button>
            </div>
          </div>

          <!-- 20-Level Difficulty Progression Grid -->
          <div class="flap-card-panel">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
              <div class="flap-card-title" style="margin-bottom: 0;">
                <span>🏛️</span> 20-Level Difficulty Progression (Target: Lvl 15 for Gamers · Lvl 20 for Champions)
              </div>
              <div style="font-size: 12px; color: #94a3b8;">
                Clear 3 correct gap passes per level to advance
              </div>
            </div>

            <div class="flap-level-grid" id="flapLevelGrid">
              <!-- Dynamically populated Levels 1 to 20 -->
            </div>
          </div>

          <!-- Launch Actions -->
          <div class="flap-actions-row">
            <button type="button" class="flap-play-btn" onclick="startFlapGame()">
              <span>🦅</span> START FLIGHT · <span id="btnSelectedLevelLabel">LEVEL I</span>
            </button>
          </div>

          <div class="flap-instructions">
            <div><kbd>Spacebar</kbd> or <kbd>↑ Up Arrow</kbd> to flap wings</div>
            <div>·</div>
            <div><kbd>Screen Tap</kbd> or <kbd>Mouse Click</kbd> on Mobile & Desktop</div>
            <div>·</div>
            <div>3 Lives per flight · Fly through the CORRECT Latin gap!</div>
          </div>
        </div>

        <!-- 2. ACTIVE GAME CANVAS SCREEN -->
        <div id="flapGameScreen" class="flap-canvas-container" style="display: none;">
          <div class="flap-canvas-outer" id="flapCanvasOuter">
            <!-- Prompt Bar Top -->
            <div class="flap-prompt-bar" id="flapPromptBar">
              <span class="flap-prompt-kicker">TRANSLATE:</span>
              <span class="flap-prompt-text" id="flapPromptText">loading prompt...</span>
            </div>

            <!-- Canvas Top HUD Overlays -->
            <div class="flap-hud-top">
              <div class="flap-hud-left">
                <div class="flap-hud-pill">
                  <span class="gold" id="hudLevelLabel">LEVEL I</span>
                  <span style="color: #38bdf8; font-size: 11px;" id="hudSpeedLabel">1.0x</span>
                </div>
                <div class="flap-hud-pill">
                  <span>SCORE:</span>
                  <span class="gold" id="hudScoreVal">0</span>
                </div>
              </div>

              <div class="flap-hud-right">
                <div class="flap-hud-pill" title="Lives Remaining">
                  <span id="hudLivesDisplay">❤️❤️❤️</span>
                </div>
                <div class="flap-hud-progress-wrap" title="Progress: 3 passes needed to clear level">
                  <span style="font-size: 11px; font-weight: 700; color: #94a3b8;">PASS:</span>
                  <div class="flap-progress-gem" id="progressGem1"></div>
                  <div class="flap-progress-gem" id="progressGem2"></div>
                  <div class="flap-progress-gem" id="progressGem3"></div>
                </div>
                <div style="display: flex; gap: 6px; margin-top: 4px;">
                  <button type="button" class="flap-hud-btn" onclick="toggleFlapPause()" title="Pause Game">⏸️</button>
                  <button type="button" class="flap-hud-btn" onclick="exitFlapToLobby()" title="Exit to Level Select">🏛️</button>
                </div>
              </div>
            </div>

            <!-- Ready / Tap to Flap Overlay -->
            <div class="flap-canvas-message" id="flapReadyOverlay">
              <h3 id="readyLevelTitle">LEVEL I · WARMUP</h3>
              <p id="readyLevelDesc">Speed 1.0x · Wide gap portals · Complete 3 correct Latin translations to clear this level.</p>
              <div class="flap-tap-prompt" onclick="triggerFlapFlap()">
                <span>🦅</span> TAP OR PRESS SPACE TO FLAP
              </div>
            </div>

            <!-- Game Over Overlay Modal -->
            <div class="flap-canvas-message" id="flapGameOverModal" style="display: none;">
              <div class="flap-modal-dialog">
                <div class="flap-modal-badge" id="gameOverIcon">💥</div>
                <div class="flap-modal-title danger" id="gameOverTitle">FLIGHT FAILED</div>
                <div class="flap-modal-cause" id="gameOverCause">
                  Cause of collision details...
                </div>
                <div class="flap-modal-stats">
                  <div class="flap-modal-stat-box">
                    <div class="lbl">Final Score</div>
                    <div class="val" id="goFinalScore">0</div>
                  </div>
                  <div class="flap-modal-stat-box">
                    <div class="lbl">Level Reached</div>
                    <div class="val" id="goLevelReached">I</div>
                  </div>
                </div>
                <div class="flap-modal-btns">
                  <button type="button" class="flap-modal-btn primary" onclick="retryFlapLevel()">
                    🔄 RETRY LEVEL
                  </button>
                  <button type="button" class="flap-modal-btn secondary" onclick="exitFlapToLobby()">
                    🏛️ LEVEL SELECT
                  </button>
                </div>
              </div>
            </div>

            <!-- Level Cleared Modal -->
            <div class="flap-canvas-message" id="flapLevelClearModal" style="display: none;">
              <div class="flap-modal-dialog">
                <div class="flap-modal-badge">🌿</div>
                <div class="flap-modal-title success" id="levelClearTitle">OPTIME! LEVEL CLEARED</div>
                <p style="color: #fed7aa; margin: 8px 0 16px 0; font-size: 14px;" id="levelClearDesc">
                  You flawlessly passed 3 correct Latin portals!
                </p>
                <div class="flap-modal-stats">
                  <div class="flap-modal-stat-box">
                    <div class="lbl">Current Score</div>
                    <div class="val" id="lcScoreVal">0</div>
                  </div>
                  <div class="flap-modal-stat-box">
                    <div class="lbl">Next Challenge</div>
                    <div class="val" id="lcNextLevel">LEVEL II</div>
                  </div>
                </div>
                <div class="flap-modal-btns">
                  <button type="button" class="flap-modal-btn primary" onclick="advanceToNextLevel()">
                    ⚔️ ADVANCE TO NEXT LEVEL
                  </button>
                  <button type="button" class="flap-modal-btn secondary" onclick="exitFlapToLobby()">
                    🏛️ LEVEL SELECT
                  </button>
                </div>
              </div>
            </div>

            <!-- Victory Modal (Level 20 Cleared - LATIN IMPERATOR!) -->
            <div class="flap-canvas-message" id="flapVictoryModal" style="display: none;">
              <div class="flap-modal-dialog" style="border-color: #fbbf24; box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);">
                <div class="flap-modal-badge">👑</div>
                <div class="flap-modal-title" style="color: #fef08a; font-size: 26px;">AVE IMPERATOR!</div>
                <p style="color: #fde68a; font-size: 15px; margin: 6px 0 14px 0; font-weight: 600;">
                  TRIUMPHUS ROMANUS! You have conquered all 20 levels of Latina Flap!
                </p>
                <div class="flap-modal-cause" style="border-color: #fbbf24; text-align: center; font-size: 13px;">
                  "Senatus Populusque Romanus acknowledges your mastery of the Latin language. Your name shall be engraved upon the columns of the Capitolium!"
                </div>
                <div class="flap-modal-stats">
                  <div class="flap-modal-stat-box">
                    <div class="lbl">Imperator Score</div>
                    <div class="val" id="vicScoreVal">0</div>
                  </div>
                  <div class="flap-modal-stat-box">
                    <div class="lbl">Title Awarded</div>
                    <div class="val" style="font-size: 14px; color: #34d399;">LATIN IMPERATOR</div>
                  </div>
                </div>
                <div class="flap-modal-btns">
                  <button type="button" class="flap-modal-btn primary" onclick="exitFlapToLobby()">
                    🏛️ RETURN TRIUMPHANT
                  </button>
                </div>
              </div>
            </div>

            <!-- Pause Modal -->
            <div class="flap-canvas-message" id="flapPauseModal" style="display: none;">
              <div class="flap-modal-dialog">
                <div class="flap-modal-badge">⏸️</div>
                <div class="flap-modal-title">FLIGHT PAUSED</div>
                <p style="color: #94a3b8; margin: 8px 0 18px 0;">Take a breath before resuming your Roman flight.</p>
                <div class="flap-modal-btns">
                  <button type="button" class="flap-modal-btn primary" onclick="toggleFlapPause()">
                    ▶️ RESUME
                  </button>
                  <button type="button" class="flap-modal-btn secondary" onclick="exitFlapToLobby()">
                    🏛️ LEVEL SELECT
                  </button>
                </div>
              </div>
            </div>

            <!-- The HTML5 Game Canvas -->
            <canvas id="latinaFlapCanvas" width="800" height="500"></canvas>
          </div>

          <!-- Dedicated Mobile Flap Button -->
          <div class="flap-mobile-controls">
            <button type="button" class="flap-mobile-big-btn" id="flapMobileBtn" ontouchstart="handleMobileFlap(event)" onclick="handleMobileFlap(event)">
              🦅 TAP TO FLAP WINGS
            </button>
          </div>
        </div>
      </div>
    </div>
`;

// Helper to escape strings safely for JS
function safeStr(s) {
  return JSON.stringify(s);
}

// Build the FLAP_JS code
const FLAP_JS = `
    // ==========================================================================
    // LATINA FLAP GAME ENGINE (Roman Aquila Flight & Dual-Gap Translation Gates)
    // ==========================================================================

    const FLAP_EASY_WORDS = ${JSON.stringify(flapData.easy)};
    const FLAP_HARD_CONFUSABLES = ${JSON.stringify(flapData.hard)};
    const FLAP_CASE_MASTERY = ${JSON.stringify(flapData.caseMastery)};

    // 20-Level Difficulty Progression Configurations (Tuned for smoother, accessible curve)
    const FLAP_LEVELS = [
      { level: 1,  roman: "I",    name: "Tirones I",        speed: 0.85, gap: 175, spacing: 440, tier: "Warmup" },
      { level: 2,  roman: "II",   name: "Tirones II",       speed: 0.92, gap: 170, spacing: 430, tier: "Warmup" },
      { level: 3,  roman: "III",  name: "Tirones III",      speed: 1.00, gap: 165, spacing: 420, tier: "Warmup" },
      { level: 4,  roman: "IV",   name: "Tirones IV",       speed: 1.08, gap: 160, spacing: 410, tier: "Warmup" },
      { level: 5,  roman: "V",    name: "Tirones V",        speed: 1.15, gap: 160, spacing: 400, tier: "Warmup" },
      { level: 6,  roman: "VI",   name: "Legionarii I",     speed: 1.25, gap: 150, spacing: 390, tier: "Gamer Base" },
      { level: 7,  roman: "VII",  name: "Legionarii II",    speed: 1.35, gap: 145, spacing: 380, tier: "Gamer Base" },
      { level: 8,  roman: "VIII", name: "Legionarii III",   speed: 1.45, gap: 140, spacing: 370, tier: "Gamer Base" },
      { level: 9,  roman: "IX",   name: "Legionarii IV",    speed: 1.55, gap: 140, spacing: 360, tier: "Gamer Base" },
      { level: 10, roman: "X",    name: "Legionarii V",     speed: 1.65, gap: 140, spacing: 350, tier: "Gamer Base" },
      { level: 11, roman: "XI",   name: "Centurio I",       speed: 1.75, gap: 130, spacing: 340, tier: "Gamer Challenge" },
      { level: 12, roman: "XII",  name: "Centurio II",      speed: 1.85, gap: 130, spacing: 330, tier: "Gamer Challenge" },
      { level: 13, roman: "XIII", name: "Centurio III",     speed: 1.95, gap: 125, spacing: 320, tier: "Gamer Challenge" },
      { level: 14, roman: "XIV",  name: "Centurio IV",      speed: 2.05, gap: 125, spacing: 310, tier: "Gamer Challenge" },
      { level: 15, roman: "XV",   name: "Optio Milestone",  speed: 2.15, gap: 115, spacing: 300, tier: "Pro Tier" },
      { level: 16, roman: "XVI",  name: "Tribunus I",       speed: 2.25, gap: 110, spacing: 295, tier: "Pro Tier" },
      { level: 17, roman: "XVII", name: "Tribunus II",      speed: 2.38, gap: 108, spacing: 290, tier: "Pro Tier" },
      { level: 18, roman: "XVIII",name: "Legatus I",        speed: 2.50, gap: 105, spacing: 285, tier: "Pro Tier" },
      { level: 19, roman: "XIX",  name: "Legatus II",       speed: 2.65, gap: 105, spacing: 280, tier: "Pro Tier" },
      { level: 20, roman: "XX",   name: "Imperator Boss",   speed: 2.85, gap: 100, spacing: 270, tier: "Final Boss" }
    ];

    // Game state variables
    let flapCurrentMode = localStorage.getItem('romalingua_flap_mode') || 'easy';
    let flapHighestLevel = parseInt(localStorage.getItem('romalingua_highest_level') || '1', 10);
    if (isNaN(flapHighestLevel) || flapHighestLevel < 1) flapHighestLevel = 1;
    if (flapHighestLevel > 20) flapHighestLevel = 20;

    let flapSelectedLevel = Math.min(flapHighestLevel, 20);
    let flapCurrentLevel = flapSelectedLevel;
    let flapScore = 0;
    let flapLives = 3;
    let flapLevelProgress = 0; // 0, 1, 2 (3 passes = clear)
    let flapGameState = 'LOBBY'; // 'LOBBY', 'READY', 'PLAYING', 'PAUSED', 'GAMEOVER', 'LEVELCLEAR', 'VICTORY'
    let flapAnimationId = null;
    let flapLastFrameTime = 0;

    // Canvas references
    let flapCanvas = null;
    let flapCtx = null;

    // Bird (Roman Aquila)
    const bird = {
      x: 130,
      y: 250,
      radius: 15,
      vy: 0,
      gravity: 0.33,
      jumpImpulse: -6.4,
      rotation: 0,
      wingPhase: 0,
      flapping: false,
      trail: []
    };

    // Pillars / Columns with Dual Gaps
    let pillars = [];
    let particles = [];
    let confetti = [];
    let currentPillarIndex = 0;
    let activeQuestionPrompt = "";

    // Parallax background stars & architecture
    const bgStars = [];
    for (let i = 0; i < 40; i++) {
      bgStars.push({
        x: Math.random() * 800,
        y: Math.random() * 320,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01
      });
    }

    // Audio Helpers for Latina Flap
    function playFlapSound() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(560, ctx.currentTime + 0.09);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.09);
      } catch (e) {}
    }

    function playCorrectGapSound() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        // Ascending triumphant chime
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
          setTimeout(() => {
            playTone(freq, 0.12, 'triangle', 0.18);
          }, i * 65);
        });
      } catch (e) {}
    }

    function playTrapSound() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } catch (e) {}
    }

    function playVictoryFanfare() {
      if (!soundEnabled) return;
      try {
        const notes = [
          { f: 523.25, d: 0.15, delay: 0 },
          { f: 659.25, d: 0.15, delay: 140 },
          { f: 783.99, d: 0.18, delay: 280 },
          { f: 1046.5, d: 0.45, delay: 440 },
          { f: 880.00, d: 0.15, delay: 750 },
          { f: 1046.5, d: 0.60, delay: 920 }
        ];
        notes.forEach(n => {
          setTimeout(() => playTone(n.f, n.d, 'triangle', 0.22), n.delay);
        });
      } catch (e) {}
    }

    // High Scores persistence per mode
    function getFlapHighScores() {
      try {
        return JSON.parse(localStorage.getItem('romalingua_flap_highscores') || '{}');
      } catch (e) {
        return {};
      }
    }

    function saveFlapHighScore(mode, score) {
      const scores = getFlapHighScores();
      if (!scores[mode] || score > scores[mode]) {
        scores[mode] = score;
        localStorage.setItem('romalingua_flap_highscores', JSON.stringify(scores));
        return true;
      }
      return false;
    }

    function updateFlapLobbyStatsUI() {
      const scores = getFlapHighScores();
      const easyEl = document.getElementById('modeHighEasy');
      const interEl = document.getElementById('modeHighInter');
      const hardEl = document.getElementById('modeHighHard');
      const casesEl = document.getElementById('modeHighCases');
      if (easyEl) easyEl.textContent = scores.easy || 0;
      if (interEl) interEl.textContent = scores.intermediate || 0;
      if (hardEl) hardEl.textContent = scores.hard || 0;
      if (casesEl) casesEl.textContent = scores.cases || 0;

      const currentScoreEl = document.getElementById('flapStatHighScore');
      if (currentScoreEl) currentScoreEl.textContent = scores[flapCurrentMode] || 0;

      const peakEl = document.getElementById('flapStatPeakLevel');
      if (peakEl) {
        const roman = FLAP_LEVELS[flapHighestLevel - 1] ? FLAP_LEVELS[flapHighestLevel - 1].roman : 'I';
        peakEl.textContent = 'Level ' + roman;
      }

      const totalFlightsEl = document.getElementById('flapStatTotalFlights');
      if (totalFlightsEl) {
        const flights = parseInt(localStorage.getItem('romalingua_flap_total_flights') || '0', 10);
        totalFlightsEl.textContent = flights;
      }
    }

    function renderFlapLevelGrid() {
      const grid = document.getElementById('flapLevelGrid');
      if (!grid) return;
      grid.innerHTML = '';

      FLAP_LEVELS.forEach(lvl => {
        const isUnlocked = lvl.level <= flapHighestLevel;
        const isSelected = lvl.level === flapSelectedLevel;

        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'flap-lvl-tile' + (isUnlocked ? '' : ' locked') + (isSelected ? ' selected' : '');
        tile.title = lvl.name + ' - Speed ' + lvl.speed.toFixed(1) + 'x (' + lvl.tier + ')';

        if (isUnlocked) {
          tile.onclick = () => selectFlapLevel(lvl.level);
        }

        tile.innerHTML = \`
          <span class="lvl-roman">\${lvl.roman}</span>
          <span class="lvl-num">Lvl \${lvl.level}</span>
          <span class="lvl-speed">\${lvl.speed.toFixed(1)}x</span>
          <span class="lvl-status">\${isUnlocked ? (lvl.level === flapHighestLevel ? '🌟' : '✅') : '🔒'}</span>
        \`;

        grid.appendChild(tile);
      });

      const label = document.getElementById('btnSelectedLevelLabel');
      if (label && FLAP_LEVELS[flapSelectedLevel - 1]) {
        label.textContent = 'LEVEL ' + FLAP_LEVELS[flapSelectedLevel - 1].roman;
      }
    }

    function setFlapMode(mode) {
      flapCurrentMode = mode;
      localStorage.setItem('romalingua_flap_mode', mode);

      document.querySelectorAll('.flap-mode-btn').forEach(btn => {
        if (btn.getAttribute('data-mode') === mode) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      updateFlapLobbyStatsUI();
    }

    function selectFlapLevel(level) {
      if (level > flapHighestLevel) return;
      flapSelectedLevel = level;
      renderFlapLevelGrid();
    }

    // Question Generator for Dual Gaps
    function getNextFlapQuestion() {
      let prompt = "";
      let correctLatin = "";
      let distractorLatin = "";
      let explanation = "";
      let category = "";

      if (flapCurrentMode === 'easy') {
        const item = FLAP_EASY_WORDS[Math.floor(Math.random() * FLAP_EASY_WORDS.length)];
        prompt = item.english;
        correctLatin = item.latin;
        distractorLatin = item.distractor;
        explanation = \`"\${item.latin}" means "\${item.english}". "\${item.distractor}" is a different word.\`;
        category = "Common GCSE Word";
      } else if (flapCurrentMode === 'intermediate') {
        if (Array.isArray(DVL_DATA) && DVL_DATA.length > 0) {
          const item = DVL_DATA[Math.floor(Math.random() * DVL_DATA.length)];
          prompt = item.english;
          correctLatin = item.stem || item.latin.split(',')[0];
          // Find distractor of same category
          const sameCat = DVL_DATA.filter(w => w.category === item.category && w.english !== item.english);
          const distItem = sameCat.length > 0
            ? sameCat[Math.floor(Math.random() * sameCat.length)]
            : DVL_DATA[Math.floor(Math.random() * DVL_DATA.length)];
          distractorLatin = distItem.stem || distItem.latin.split(',')[0];
          explanation = \`"\${correctLatin}" means "\${item.english}". "\${distractorLatin}" means "\${distItem.english}".\`;
          category = item.category || "DVL Vocabulary";
        } else {
          const item = FLAP_EASY_WORDS[Math.floor(Math.random() * FLAP_EASY_WORDS.length)];
          prompt = item.english;
          correctLatin = item.latin;
          distractorLatin = item.distractor;
          explanation = item.latin + ' = ' + item.english;
        }
      } else if (flapCurrentMode === 'hard') {
        const item = FLAP_HARD_CONFUSABLES[Math.floor(Math.random() * FLAP_HARD_CONFUSABLES.length)];
        prompt = item.prompt;
        correctLatin = item.correct;
        distractorLatin = item.distractor;
        explanation = item.hint;
        category = "Subtle Distractor";
      } else if (flapCurrentMode === 'cases') {
        const item = FLAP_CASE_MASTERY[Math.floor(Math.random() * FLAP_CASE_MASTERY.length)];
        prompt = item.prompt;
        correctLatin = item.correct;
        distractorLatin = item.distractor;
        explanation = item.explanation;
        category = "Case Mastery";
      }

      // Randomly assign whether correct answer goes in TOP gap or BOTTOM gap
      const isTopCorrect = Math.random() < 0.5;

      return {
        prompt,
        correctLatin,
        distractorLatin,
        topText: isTopCorrect ? correctLatin : distractorLatin,
        bottomText: isTopCorrect ? distractorLatin : correctLatin,
        correctGap: isTopCorrect ? 'top' : 'bottom',
        explanation,
        category
      };
    }

    // Launch & Screen Transition Functions
    function startFlapGame() {
      flapCurrentLevel = flapSelectedLevel;
      flapScore = 0;
      flapLives = 3;
      flapLevelProgress = 0;

      // Track total flights
      const totalFlights = parseInt(localStorage.getItem('romalingua_flap_total_flights') || '0', 10) + 1;
      localStorage.setItem('romalingua_flap_total_flights', totalFlights.toString());

      const lobby = document.getElementById('flapLobbyScreen');
      const gameScreen = document.getElementById('flapGameScreen');
      if (lobby) lobby.style.display = 'none';
      if (gameScreen) gameScreen.style.display = 'flex';

      initFlapCanvas();
      setupFlapLevel(flapCurrentLevel);
    }

    function exitFlapToLobby() {
      if (flapAnimationId) {
        cancelAnimationFrame(flapAnimationId);
        flapAnimationId = null;
      }
      flapGameState = 'LOBBY';

      const lobby = document.getElementById('flapLobbyScreen');
      const gameScreen = document.getElementById('flapGameScreen');
      if (lobby) lobby.style.display = 'block';
      if (gameScreen) gameScreen.style.display = 'none';

      // Hide all in-game modals
      hideFlapModals();
      updateFlapLobbyStatsUI();
      renderFlapLevelGrid();
    }

    function hideFlapModals() {
      const ids = ['flapReadyOverlay', 'flapGameOverModal', 'flapLevelClearModal', 'flapVictoryModal', 'flapPauseModal'];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    }

    function initFlapCanvas() {
      flapCanvas = document.getElementById('latinaFlapCanvas');
      if (!flapCanvas) return;
      flapCtx = flapCanvas.getContext('2d');

      // Setup event listeners once
      if (!flapCanvas.dataset.listenersAttached) {
        flapCanvas.dataset.listenersAttached = 'true';

        // Mouse click / touch on canvas flaps
        flapCanvas.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          onPlayerFlapAction();
        });

        // Key listeners: Space and Up Arrow
        window.addEventListener('keydown', (e) => {
          const flapTab = document.getElementById('tabFlap');
          if (!flapTab || flapTab.style.display === 'none') return;

          if (e.code === 'Space' || e.code === 'ArrowUp') {
            e.preventDefault();
            onPlayerFlapAction();
          } else if (e.code === 'KeyP') {
            toggleFlapPause();
          }
        });
      }
    }

    function handleMobileFlap(e) {
      if (e) e.preventDefault();
      onPlayerFlapAction();
    }

    function onPlayerFlapAction() {
      if (flapGameState === 'READY') {
        flapGameState = 'PLAYING';
        hideFlapModals();
        bird.vy = bird.jumpImpulse;
        bird.flapping = true;
        playFlapSound();
      } else if (flapGameState === 'PLAYING') {
        bird.vy = bird.jumpImpulse;
        bird.flapping = true;
        playFlapSound();
        spawnFeatherParticles(bird.x - 10, bird.y);
      }
    }

    function setupFlapLevel(levelNum) {
      const cfg = FLAP_LEVELS[levelNum - 1] || FLAP_LEVELS[0];

      bird.x = 130;
      bird.y = 250;
      bird.vy = 0;
      bird.rotation = 0;
      bird.trail = [];
      flapLevelProgress = 0;

      pillars = [];
      particles = [];

      // Spawn initial pillars ahead of the bird
      let startX = 600;
      for (let i = 0; i < 4; i++) {
        spawnPillar(startX + i * cfg.spacing, cfg);
      }

      // Update prompt bar with the first question
      if (pillars.length > 0 && pillars[0].question) {
        updatePromptBar(pillars[0].question.prompt, pillars[0].question.category);
      }

      updateFlapHud();

      // Show Ready Overlay
      flapGameState = 'READY';
      hideFlapModals();
      const readyOverlay = document.getElementById('flapReadyOverlay');
      const readyTitle = document.getElementById('readyLevelTitle');
      const readyDesc = document.getElementById('readyLevelDesc');
      if (readyTitle) readyTitle.textContent = \`LEVEL \${cfg.roman} · \${cfg.tier.toUpperCase()}\`;
      if (readyDesc) readyDesc.textContent = \`Speed \${cfg.speed.toFixed(1)}x · Gap \${cfg.gap}px · Complete 3 correct Latin gap passes to clear!\`;
      if (readyOverlay) readyOverlay.style.display = 'flex';

      if (!flapAnimationId) {
        flapLastFrameTime = performance.now();
        flapAnimationId = requestAnimationFrame(gameLoop);
      }
    }

    function spawnPillar(xPos, cfg) {
      const q = getNextFlapQuestion();
      const gapHeight = cfg.gap;
      const floorY = 460;
      const minGapSpacing = 50; // minimum solid column between top gap and bottom gap

      // Top gap center between y = 110 and 170
      const topGapCenter = Math.floor(Math.random() * 50) + 120;
      // Bottom gap center between y = 290 and 360
      const bottomGapCenter = Math.floor(Math.random() * 60) + 300;

      pillars.push({
        x: xPos,
        width: 80,
        gapHeight: gapHeight,
        topGap: {
          y: topGapCenter,
          top: topGapCenter - gapHeight / 2,
          bottom: topGapCenter + gapHeight / 2
        },
        bottomGap: {
          y: bottomGapCenter,
          top: bottomGapCenter - gapHeight / 2,
          bottom: bottomGapCenter + gapHeight / 2
        },
        question: q,
        passed: false,
        evaluated: false
      });
    }

    function updatePromptBar(promptText, category) {
      activeQuestionPrompt = promptText;
      const el = document.getElementById('flapPromptText');
      if (el) {
        el.textContent = promptText;
      }
    }

    function updateFlapHud() {
      const cfg = FLAP_LEVELS[flapCurrentLevel - 1] || FLAP_LEVELS[0];

      const lvlEl = document.getElementById('hudLevelLabel');
      if (lvlEl) lvlEl.textContent = 'LEVEL ' + cfg.roman;

      const spdEl = document.getElementById('hudSpeedLabel');
      if (spdEl) spdEl.textContent = cfg.speed.toFixed(1) + 'x';

      const scEl = document.getElementById('hudScoreVal');
      if (scEl) scEl.textContent = flapScore;

      const livesEl = document.getElementById('hudLivesDisplay');
      if (livesEl) {
        let hearts = '';
        for (let i = 0; i < 3; i++) {
          hearts += i < flapLives ? '❤️' : '🖤';
        }
        livesEl.textContent = hearts;
      }

      // Update progress gems (3 gems)
      for (let i = 1; i <= 3; i++) {
        const gem = document.getElementById('progressGem' + i);
        if (gem) {
          if (i <= flapLevelProgress) {
            gem.classList.add('filled');
          } else {
            gem.classList.remove('filled');
          }
        }
      }
    }

    // Main Game Loop
    function gameLoop(timestamp) {
      const dt = Math.min((timestamp - flapLastFrameTime) / 1000, 0.05);
      flapLastFrameTime = timestamp;

      if (flapGameState === 'PLAYING') {
        updatePhysics(dt);
      }

      renderGame();

      if (flapGameState !== 'LOBBY') {
        flapAnimationId = requestAnimationFrame(gameLoop);
      }
    }

    function updatePhysics(dt) {
      const cfg = FLAP_LEVELS[flapCurrentLevel - 1] || FLAP_LEVELS[0];
      const moveSpeed = 1.95 * cfg.speed;
      const floorY = 460;

      // Update Bird
      bird.vy += bird.gravity;
      bird.y += bird.vy;

      // Smooth rotation based on vertical velocity
      const targetRotation = Math.min(Math.max((bird.vy * 3.5) * (Math.PI / 180), -0.45), 1.1);
      bird.rotation += (targetRotation - bird.rotation) * 0.15;

      // Wing flapping cycle
      bird.wingPhase += 0.35;

      // Store trail
      if (Math.random() < 0.3) {
        bird.trail.push({ x: bird.x - 14, y: bird.y, alpha: 0.6, r: 4 });
      }
      bird.trail.forEach(t => {
        t.x -= moveSpeed;
        t.alpha -= 0.03;
      });
      bird.trail = bird.trail.filter(t => t.alpha > 0);

      // Floor & Ceiling bounds
      if (bird.y + bird.radius >= floorY) {
        handleCollision('ground', null);
        return;
      }
      if (bird.y - bird.radius <= 0) {
        bird.y = bird.radius;
        bird.vy = 0;
      }

      // Move pillars
      for (let i = 0; i < pillars.length; i++) {
        const p = pillars[i];
        p.x -= moveSpeed;

        // Collision & Gap Check when bird intersects pillar horizontal span
        const pillarLeft = p.x;
        const pillarRight = p.x + p.width;
        const birdLeft = bird.x - bird.radius;
        const birdRight = bird.x + bird.radius;

        if (birdRight > pillarLeft && birdLeft < pillarRight) {
          // Check if bird is within Top Gap
          const inTopGap = (bird.y - bird.radius >= p.topGap.top) && (bird.y + bird.radius <= p.topGap.bottom);
          // Check if bird is within Bottom Gap
          const inBottomGap = (bird.y - bird.radius >= p.bottomGap.top) && (bird.y + bird.radius <= p.bottomGap.bottom);

          if (!p.evaluated) {
            if (inTopGap) {
              p.evaluated = true;
              if (p.question.correctGap === 'top') {
                handleCorrectPass(p);
              } else {
                handleCollision('trap', p, p.question.topText, p.question.bottomText);
                return;
              }
            } else if (inBottomGap) {
              p.evaluated = true;
              if (p.question.correctGap === 'bottom') {
                handleCorrectPass(p);
              } else {
                handleCollision('trap', p, p.question.bottomText, p.question.topText);
                return;
              }
            } else {
              // Collided with column solid wall!
              handleCollision('pillar', p);
              return;
            }
          }
        }

        // Passed pillar cleanly
        if (!p.passed && p.x + p.width < bird.x - bird.radius) {
          p.passed = true;
        }
      }

      // Remove off-screen pillars & spawn new ones
      if (pillars.length > 0 && pillars[0].x + pillars[0].width < -50) {
        pillars.shift();
      }

      const lastPillar = pillars[pillars.length - 1];
      if (lastPillar && lastPillar.x < 800) {
        spawnPillar(lastPillar.x + cfg.spacing, cfg);
      }

      // Keep prompt bar updated with next upcoming pillar's question
      const upcoming = pillars.find(p => !p.passed && p.x + p.width > bird.x);
      if (upcoming && upcoming.question && upcoming.question.prompt !== activeQuestionPrompt) {
        updatePromptBar(upcoming.question.prompt, upcoming.question.category);
      }

      // Update Particles
      particles.forEach(pt => {
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha -= pt.decay;
        pt.r = Math.max(0, pt.r - 0.05);
      });
      particles = particles.filter(pt => pt.alpha > 0);

      // Update Confetti
      confetti.forEach(c => {
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.1;
        c.rotation += c.rotSpeed;
        c.alpha -= 0.005;
      });
      confetti = confetti.filter(c => c.alpha > 0);
    }

    function handleCorrectPass(pillar) {
      const cfg = FLAP_LEVELS[flapCurrentLevel - 1] || FLAP_LEVELS[0];
      const pts = Math.round(100 * cfg.speed);
      flapScore += pts;
      flapLevelProgress += 1;

      // Add Global XP to user's persistent profile
      addXP(20);

      playCorrectGapSound();
      spawnSuccessParticles(bird.x + 20, bird.y);

      updateFlapHud();

      // Check Level Clear condition (3 correct passes per level)
      if (flapLevelProgress >= 3) {
        handleLevelCleared();
      }
    }

    function handleLevelCleared() {
      flapGameState = 'LEVELCLEAR';
      const cfg = FLAP_LEVELS[flapCurrentLevel - 1];

      // Update highest level
      if (flapCurrentLevel < 20 && flapHighestLevel < flapCurrentLevel + 1) {
        flapHighestLevel = flapCurrentLevel + 1;
        localStorage.setItem('romalingua_highest_level', flapHighestLevel.toString());
      }

      saveFlapHighScore(flapCurrentMode, flapScore);

      // Check if Player conquered Level 20!
      if (flapCurrentLevel === 20) {
        handleVictory();
        return;
      }

      // Bonus XP for clearing a level
      addXP(100);
      playVictoryFanfare();

      hideFlapModals();
      const modal = document.getElementById('flapLevelClearModal');
      const title = document.getElementById('levelClearTitle');
      const desc = document.getElementById('levelClearDesc');
      const scoreVal = document.getElementById('lcScoreVal');
      const nextLvl = document.getElementById('lcNextLevel');

      if (title) title.textContent = \`OPTIME! LEVEL \${cfg.roman} CLEARED\`;
      if (desc) desc.textContent = \`You have conquered \${cfg.name}! Speed advancing to \${(FLAP_LEVELS[flapCurrentLevel] ? FLAP_LEVELS[flapCurrentLevel].speed.toFixed(1) : '3.0')}x.\`;
      if (scoreVal) scoreVal.textContent = flapScore;
      if (nextLvl) nextLvl.textContent = 'LEVEL ' + (FLAP_LEVELS[flapCurrentLevel] ? FLAP_LEVELS[flapCurrentLevel].roman : 'XX');

      if (modal) modal.style.display = 'flex';
    }

    function advanceToNextLevel() {
      flapCurrentLevel += 1;
      flapSelectedLevel = flapCurrentLevel;
      setupFlapLevel(flapCurrentLevel);
    }

    function handleVictory() {
      flapGameState = 'VICTORY';
      saveFlapHighScore(flapCurrentMode, flapScore);
      addXP(500); // Imperial triumph bonus!
      playVictoryFanfare();
      spawnTriumphConfetti();

      hideFlapModals();
      const modal = document.getElementById('flapVictoryModal');
      const scoreVal = document.getElementById('vicScoreVal');
      if (scoreVal) scoreVal.textContent = flapScore;
      if (modal) modal.style.display = 'flex';
    }

    function handleCollision(type, pillar, chosenWord, otherWord) {
      flapLives -= 1;
      playTrapSound();
      spawnErrorParticles(bird.x, bird.y);
      updateFlapHud();

      let causeText = "";
      let icon = "💥";
      let title = "FLIGHT COLLISION";

      if (type === 'trap') {
        icon = "❌";
        title = "GRAMMAR TRAP!";
        causeText = \`You flew through the incorrect gap "\${chosenWord}". \${pillar && pillar.question ? pillar.question.explanation : ''}\`;
      } else if (type === 'pillar') {
        icon = "🏛️";
        title = "COLUMN COLLISION!";
        causeText = "Your Aquila struck the Roman marble pillar. Steer cleanly through one of the two marked gaps!";
      } else {
        icon = "⚠️";
        title = "GROUND COLLISION!";
        causeText = "Your Aquila collided with the Roman stone mosaic floor. Flap to maintain altitude!";
      }

      if (flapLives > 0) {
        // Still have lives: reset current level attempt cleanly
        flapGameState = 'READY';
        bird.x = 130;
        bird.y = 250;
        bird.vy = 0;
        bird.rotation = 0;
        flapLevelProgress = 0;
        pillars = [];

        const cfg = FLAP_LEVELS[flapCurrentLevel - 1] || FLAP_LEVELS[0];
        let startX = 600;
        for (let i = 0; i < 4; i++) {
          spawnPillar(startX + i * cfg.spacing, cfg);
        }
        if (pillars.length > 0 && pillars[0].question) {
          updatePromptBar(pillars[0].question.prompt, pillars[0].question.category);
        }
        updateFlapHud();

        hideFlapModals();
        const readyOverlay = document.getElementById('flapReadyOverlay');
        const readyTitle = document.getElementById('readyLevelTitle');
        const readyDesc = document.getElementById('readyLevelDesc');
        if (readyTitle) readyTitle.textContent = title;
        if (readyDesc) readyDesc.innerHTML = \`<strong style="color: #f87171;">\${causeText}</strong><br><br>\${flapLives} \${flapLives === 1 ? 'Life' : 'Lives'} remaining. Tap to resume level.\`;
        if (readyOverlay) readyOverlay.style.display = 'flex';
      } else {
        // Out of lives: Game Over
        flapGameState = 'GAMEOVER';
        saveFlapHighScore(flapCurrentMode, flapScore);

        hideFlapModals();
        const modal = document.getElementById('flapGameOverModal');
        const iconEl = document.getElementById('gameOverIcon');
        const titleEl = document.getElementById('gameOverTitle');
        const causeEl = document.getElementById('gameOverCause');
        const scoreEl = document.getElementById('goFinalScore');
        const lvlEl = document.getElementById('goLevelReached');

        if (iconEl) iconEl.textContent = icon;
        if (titleEl) titleEl.textContent = title;
        if (causeEl) causeEl.textContent = causeText;
        if (scoreEl) scoreEl.textContent = flapScore;
        if (lvlEl) lvlEl.textContent = (FLAP_LEVELS[flapCurrentLevel - 1] ? FLAP_LEVELS[flapCurrentLevel - 1].roman : 'I');

        if (modal) modal.style.display = 'flex';
      }
    }

    function retryFlapLevel() {
      flapLives = 3;
      flapScore = 0;
      setupFlapLevel(flapCurrentLevel);
    }

    function toggleFlapPause() {
      if (flapGameState === 'PLAYING') {
        flapGameState = 'PAUSED';
        const modal = document.getElementById('flapPauseModal');
        if (modal) modal.style.display = 'flex';
      } else if (flapGameState === 'PAUSED') {
        flapGameState = 'PLAYING';
        hideFlapModals();
        flapLastFrameTime = performance.now();
      }
    }

    // Particle Systems
    function spawnFeatherParticles(x, y) {
      for (let i = 0; i < 4; i++) {
        particles.push({
          x: x + (Math.random() * 8 - 4),
          y: y + (Math.random() * 8 - 4),
          vx: -(Math.random() * 2 + 1),
          vy: Math.random() * 2 - 1,
          r: Math.random() * 3 + 2,
          color: '#fbbf24',
          alpha: 0.8,
          decay: 0.04
        });
      }
    }

    function spawnSuccessParticles(x, y) {
      for (let i = 0; i < 18; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: Math.random() * 4 + 2,
          color: Math.random() < 0.5 ? '#10b981' : '#fbbf24',
          alpha: 1.0,
          decay: 0.03
        });
      }
    }

    function spawnErrorParticles(x, y) {
      for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: Math.random() * 4 + 3,
          color: '#ef4444',
          alpha: 1.0,
          decay: 0.04
        });
      }
    }

    function spawnTriumphConfetti() {
      confetti = [];
      const colors = ['#f59e0b', '#fbbf24', '#10b981', '#38bdf8', '#ef4444', '#f1f5f9'];
      for (let i = 0; i < 70; i++) {
        confetti.push({
          x: Math.random() * 800,
          y: Math.random() * -200,
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 3 + 2,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: Math.random() * 0.1 - 0.05,
          alpha: 1.0
        });
      }
    }

    // Canvas Rendering Engine
    function renderGame() {
      if (!flapCtx) return;
      const ctx = flapCtx;
      const w = 800;
      const h = 500;
      const floorY = 460;

      // 1. Sky & Atmospheric Twilight Backdrop
      const skyGrad = ctx.createLinearGradient(0, 0, 0, floorY);
      skyGrad.addColorStop(0, '#090d16');
      skyGrad.addColorStop(0.5, '#0f172a');
      skyGrad.addColorStop(1, '#1e1b4b');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Stars
      bgStars.forEach(st => {
        st.alpha += Math.sin(performance.now() * st.twinkleSpeed) * 0.005;
        ctx.fillStyle = \`rgba(254, 240, 138, \${Math.max(0.2, Math.min(0.9, st.alpha))})\`;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Roman Crescent Moon
      ctx.save();
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(710, 70, 24, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#090d16';
      ctx.beginPath();
      ctx.arc(718, 66, 21, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Distant Roman Silhouette Skyline (Colosseum & Arches)
      ctx.fillStyle = '#172033';
      ctx.beginPath();
      ctx.moveTo(0, floorY);
      // Colosseum curves & arches
      ctx.lineTo(0, 390);
      ctx.lineTo(80, 390);
      ctx.arc(120, 390, 40, Math.PI, 0, false);
      ctx.lineTo(200, 370);
      ctx.lineTo(240, 370);
      ctx.lineTo(250, 350);
      ctx.lineTo(290, 350);
      ctx.lineTo(300, 380);
      // Arches
      for (let ax = 320; ax < 500; ax += 36) {
        ctx.lineTo(ax, 385);
        ctx.lineTo(ax + 10, 360);
        ctx.lineTo(ax + 26, 360);
        ctx.lineTo(ax + 36, 385);
      }
      ctx.lineTo(540, 395);
      ctx.arc(620, 395, 50, Math.PI, 0, false);
      ctx.lineTo(720, 410);
      ctx.lineTo(800, 410);
      ctx.lineTo(800, floorY);
      ctx.closePath();
      ctx.fill();

      // 3. Render Columns (Pillars) with Dual Gaps
      pillars.forEach(p => {
        renderDualGapPillar(ctx, p, floorY);
      });

      // 4. Render Bird Trail
      bird.trail.forEach(t => {
        ctx.fillStyle = \`rgba(251, 191, 36, \${t.alpha})\`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5. Render Roman Aquila (Eagle)
      renderRomanAquila(ctx, bird);

      // 6. Particles
      particles.forEach(pt => {
        ctx.save();
        ctx.globalAlpha = pt.alpha;
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 7. Confetti
      confetti.forEach(c => {
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
        ctx.restore();
      });

      // 8. Marble Mosaic Ground Floor
      renderGroundFloor(ctx, w, floorY, h);
    }

    function renderDualGapPillar(ctx, p, floorY) {
      const x = p.x;
      const w = p.width;
      const topGap = p.topGap;
      const bottomGap = p.bottomGap;

      ctx.save();

      // Solid Column Sections:
      // Section 1: Ceiling (0) down to Top Gap start
      drawMarbleColumnSegment(ctx, x, 0, w, topGap.top);

      // Section 2: Between Top Gap and Bottom Gap
      drawMarbleColumnSegment(ctx, x, topGap.bottom, w, bottomGap.top - topGap.bottom);

      // Section 3: Below Bottom Gap down to Floor
      drawMarbleColumnSegment(ctx, x, bottomGap.bottom, w, floorY - bottomGap.bottom);

      // Gap Tablets (Roman Plaques with Latin words)
      drawGapTablet(ctx, x, topGap.top, w, p.gapHeight, p.question.topText, p.evaluated && p.question.correctGap === 'top');
      drawGapTablet(ctx, x, bottomGap.top, w, p.gapHeight, p.question.bottomText, p.evaluated && p.question.correctGap === 'bottom');

      ctx.restore();
    }

    function drawMarbleColumnSegment(ctx, x, y, width, height) {
      if (height <= 0) return;

      // Base marble gradient
      const colGrad = ctx.createLinearGradient(x, 0, x + width, 0);
      colGrad.addColorStop(0, '#334155');
      colGrad.addColorStop(0.15, '#64748b');
      colGrad.addColorStop(0.4, '#94a3b8');
      colGrad.addColorStop(0.7, '#64748b');
      colGrad.addColorStop(1, '#1e293b');

      ctx.fillStyle = colGrad;
      ctx.fillRect(x, y, width, height);

      // Vertical fluting lines for classical column texture
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.45)';
      ctx.lineWidth = 2;
      const flutes = 5;
      const step = width / (flutes + 1);
      for (let i = 1; i <= flutes; i++) {
        ctx.beginPath();
        ctx.moveTo(x + i * step, y);
        ctx.lineTo(x + i * step, y + height);
        ctx.stroke();
      }

      // Column borders
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x, y, width, height);
    }

    function drawGapTablet(ctx, x, gapTop, width, gapHeight, latinWord, isHit) {
      const padX = 6;
      const tabletX = x + padX;
      const tabletW = width - padX * 2;
      const tabletH = 38;
      const tabletY = gapTop + (gapHeight - tabletH) / 2;

      // Glowing Tablet Plate
      ctx.save();
      ctx.fillStyle = isHit ? 'rgba(16, 185, 129, 0.85)' : 'rgba(15, 23, 42, 0.85)';
      ctx.strokeStyle = isHit ? '#34d399' : '#d97706';
      ctx.lineWidth = 2;

      // Rounded plaque
      ctx.beginPath();
      ctx.roundRect(tabletX, tabletY, tabletW, tabletH, 6);
      ctx.fill();
      ctx.stroke();

      // Golden Roman trim line inside plaque
      ctx.strokeStyle = isHit ? '#a7f3d0' : '#fbbf24';
      ctx.lineWidth = 1;
      ctx.strokeRect(tabletX + 2, tabletY + 2, tabletW - 4, tabletH - 4);

      // Text label
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px "Cinzel", serif, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Truncate long words cleanly if necessary
      let dispWord = latinWord || "";
      if (dispWord.length > 11) {
        dispWord = dispWord.slice(0, 10) + '..';
      }

      ctx.fillText(dispWord, tabletX + tabletW / 2, tabletY + tabletH / 2);

      // Floating portal indicators (soft glowing dots on borders)
      ctx.fillStyle = isHit ? '#34d399' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(tabletX - 4, tabletY + tabletH / 2, 3, 0, Math.PI * 2);
      ctx.arc(tabletX + tabletW + 4, tabletY + tabletH / 2, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    function renderRomanAquila(ctx, b) {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rotation);

      // Flapping Wing Offset
      const wingY = Math.sin(b.wingPhase) * 10;

      // Eagle Body (Golden Imperial Plumage)
      const bodyGrad = ctx.createLinearGradient(-15, -10, 15, 10);
      bodyGrad.addColorStop(0, '#fef08a');
      bodyGrad.addColorStop(0.5, '#d97706');
      bodyGrad.addColorStop(1, '#92400e');

      // Tail Feathers
      ctx.fillStyle = '#78350f';
      ctx.beginPath();
      ctx.moveTo(-16, 2);
      ctx.lineTo(-26, 8);
      ctx.lineTo(-24, 0);
      ctx.lineTo(-26, -6);
      ctx.lineTo(-16, -2);
      ctx.closePath();
      ctx.fill();

      // Wing (Upper & Flapping Layer)
      ctx.fillStyle = '#b45309';
      ctx.beginPath();
      ctx.moveTo(-6, -4);
      ctx.quadraticCurveTo(-4, -18 + wingY, 4, -22 + wingY);
      ctx.quadraticCurveTo(12, -14 + wingY, 6, 2);
      ctx.closePath();
      ctx.fill();

      // Golden Wing Highlights
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(-3, -2);
      ctx.quadraticCurveTo(-1, -12 + wingY, 6, -16 + wingY);
      ctx.quadraticCurveTo(10, -10 + wingY, 4, 2);
      ctx.closePath();
      ctx.fill();

      // Main Torso
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 18, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Roman Legion Laurel Wreath on Crown
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(8, -8, 6, 0.4 * Math.PI, 1.6 * Math.PI, true);
      ctx.stroke();

      // Head & Crown
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(12, -4, 9, 0, Math.PI * 2);
      ctx.fill();

      // Regal Eagle Eye
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(14, -6, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(14.6, -6.6, 0.8, 0, Math.PI * 2);
      ctx.fill();

      // Curved Golden Beak
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(18, -6);
      ctx.lineTo(26, -2);
      ctx.lineTo(19, 2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    }

    function renderGroundFloor(ctx, w, floorY, totalH) {
      // Marble Slab Base
      const groundGrad = ctx.createLinearGradient(0, floorY, 0, totalH);
      groundGrad.addColorStop(0, '#94a3b8');
      groundGrad.addColorStop(0.3, '#475569');
      groundGrad.addColorStop(1, '#0f172a');
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, floorY, w, totalH - floorY);

      // Gold Trim Curb
      ctx.fillStyle = '#d97706';
      ctx.fillRect(0, floorY, w, 4);

      // Roman Meander / Key pattern lines along the floor
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
      ctx.lineWidth = 2;
      const tileW = 40;
      for (let tx = 0; tx < w; tx += tileW) {
        ctx.strokeRect(tx + 4, floorY + 8, tileW - 8, 20);
      }
    }

    // Expose Latina Flap functions to window for global access
    window.setFlapMode = setFlapMode;
    window.selectFlapLevel = selectFlapLevel;
    window.startFlapGame = startFlapGame;
    window.exitFlapToLobby = exitFlapToLobby;
    window.toggleFlapPause = toggleFlapPause;
    window.retryFlapLevel = retryFlapLevel;
    window.advanceToNextLevel = advanceToNextLevel;
    window.triggerFlapFlap = onPlayerFlapAction;
    window.handleMobileFlap = handleMobileFlap;
`;

fs.writeFileSync('scripts/flap_html.txt', FLAP_HTML);
fs.writeFileSync('scripts/flap_js.txt', FLAP_JS);

console.log('Successfully generated flap_html.txt and flap_js.txt');
