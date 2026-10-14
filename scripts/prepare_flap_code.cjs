const fs = require('fs');

const flapData = JSON.parse(fs.readFileSync('scripts/latina_flap_data.json', 'utf8'));

// 1. Generate FLAP_CSS
const FLAP_CSS = `
    /* ==========================================================================
       LATINA FLAP MINI-GAME STYLES (Dark Roman Aesthetic)
       ========================================================================== */
    .flap-nav-badge {
      background: linear-gradient(135deg, #d97706, #b45309);
      color: #ffffff;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 9999px;
      margin-left: 6px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .flap-section {
      background: #0f172a;
      border: 2px solid #1e293b;
      border-radius: var(--radius);
      color: #f8fafc;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      margin-bottom: 32px;
    }

    .flap-banner {
      background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #450a0a 100%);
      border-bottom: 2px solid #d97706;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      position: relative;
    }

    .flap-banner::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #fbbf24, transparent);
    }

    .flap-title-wrap {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .flap-banner-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, #d97706, #78350f);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      box-shadow: 0 4px 12px rgba(217, 119, 6, 0.4), inset 0 1px 0 rgba(254, 240, 138, 0.4);
      border: 1px solid #fef08a;
      flex-shrink: 0;
    }

    .flap-title {
      font-family: 'Cinzel', serif;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #fef08a;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
      margin-bottom: 2px;
    }

    .flap-subtitle {
      font-size: 13px;
      color: #fed7aa;
      font-weight: 500;
    }

    .flap-banner-stats {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .flap-stat-badge {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(217, 119, 6, 0.5);
      border-radius: 8px;
      padding: 6px 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      color: #f1f5f9;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }

    .flap-stat-badge span.val {
      color: #fbbf24;
      font-size: 15px;
    }

    /* Lobby Screen */
    .flap-lobby {
      padding: 24px;
      max-width: 900px;
      margin: 0 auto;
    }

    .flap-card-panel {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }

    .flap-card-title {
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: 700;
      color: #fbbf24;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: 0.5px;
    }

    .flap-mode-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
    }

    .flap-mode-btn {
      background: #0f172a;
      border: 2px solid #334155;
      border-radius: 10px;
      padding: 14px 16px;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      color: #f8fafc;
    }

    .flap-mode-btn:hover {
      border-color: #d97706;
      background: #1e293b;
      transform: translateY(-2px);
    }

    .flap-mode-btn.active {
      border-color: #fbbf24;
      background: linear-gradient(135deg, rgba(217, 119, 6, 0.25), rgba(15, 23, 42, 0.9));
      box-shadow: 0 0 16px rgba(217, 119, 6, 0.35);
    }

    .flap-mode-btn .mode-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .flap-mode-btn .mode-name {
      font-family: 'Cinzel', serif;
      font-size: 15px;
      font-weight: 700;
      color: #fef08a;
    }

    .flap-mode-btn .mode-tag {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(217, 119, 6, 0.3);
      color: #fbbf24;
      border: 1px solid rgba(251, 191, 36, 0.3);
    }

    .flap-mode-btn .mode-desc {
      font-size: 12px;
      color: #94a3b8;
      line-height: 1.4;
      margin-bottom: 8px;
    }

    .flap-mode-btn .mode-score {
      font-size: 11px;
      font-weight: 700;
      color: #38bdf8;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    /* 20-Level Selection Grid */
    .flap-level-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(76px, 1fr));
      gap: 10px;
    }

    .flap-lvl-tile {
      background: #0f172a;
      border: 2px solid #334155;
      border-radius: 10px;
      padding: 10px 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      cursor: pointer;
      transition: all 0.15s ease;
      color: #f8fafc;
      min-height: 84px;
    }

    .flap-lvl-tile:hover:not(.locked) {
      border-color: #fbbf24;
      background: #1e293b;
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(217, 119, 6, 0.3);
    }

    .flap-lvl-tile.selected {
      border-color: #fbbf24;
      background: linear-gradient(135deg, rgba(217, 119, 6, 0.3), rgba(15, 23, 42, 0.95));
      box-shadow: 0 0 12px rgba(251, 191, 36, 0.4);
    }

    .flap-lvl-tile.locked {
      background: rgba(15, 23, 42, 0.5);
      border-color: #1e293b;
      opacity: 0.5;
      cursor: not-allowed;
    }

    .flap-lvl-tile .lvl-roman {
      font-family: 'Cinzel', serif;
      font-size: 15px;
      font-weight: 800;
      color: #fef08a;
    }

    .flap-lvl-tile.locked .lvl-roman {
      color: #64748b;
    }

    .flap-lvl-tile .lvl-num {
      font-size: 11px;
      font-weight: 700;
      color: #94a3b8;
    }

    .flap-lvl-tile .lvl-speed {
      font-size: 10px;
      color: #38bdf8;
      font-weight: 600;
    }

    .flap-lvl-tile .lvl-status {
      font-size: 12px;
      margin-top: 2px;
    }

    .flap-actions-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-top: 24px;
      flex-wrap: wrap;
    }

    .flap-play-btn {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      color: #ffffff;
      border: 2px solid #fef08a;
      border-radius: 12px;
      font-family: 'Cinzel', serif;
      font-size: 18px;
      font-weight: 800;
      padding: 14px 42px;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(217, 119, 6, 0.45);
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 10px;
      letter-spacing: 0.5px;
    }

    .flap-play-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(217, 119, 6, 0.6);
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    }

    .flap-play-btn:active {
      transform: translateY(1px);
    }

    .flap-instructions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      font-size: 12px;
      color: #94a3b8;
      margin-top: 16px;
      flex-wrap: wrap;
    }

    .flap-instructions kbd {
      background: #334155;
      border: 1px solid #475569;
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 11px;
      color: #f1f5f9;
      font-weight: 700;
    }

    /* Game Canvas Screen */
    .flap-canvas-container {
      position: relative;
      width: 100%;
      max-width: 840px;
      margin: 0 auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .flap-canvas-outer {
      position: relative;
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      border: 3px solid #334155;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(217, 119, 6, 0.2);
      background: #0f172a;
      aspect-ratio: 16 / 10;
      user-select: none;
      -webkit-user-select: none;
      touch-action: none;
    }

    #latinaFlapCanvas {
      width: 100%;
      height: 100%;
      display: block;
      background: #0f172a;
    }

    /* Prompt Bar at top of canvas */
    .flap-prompt-bar {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      background: rgba(15, 23, 42, 0.92);
      border: 2px solid #d97706;
      border-radius: 8px;
      padding: 8px 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.6), 0 0 10px rgba(217, 119, 6, 0.3);
      max-width: 90%;
      pointer-events: none;
      transition: all 0.2s ease;
    }

    .flap-prompt-kicker {
      font-family: 'Cinzel', serif;
      font-size: 12px;
      font-weight: 800;
      color: #f59e0b;
      letter-spacing: 1px;
      white-space: nowrap;
    }

    .flap-prompt-text {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Canvas HUD Top Overlays */
    .flap-hud-top {
      position: absolute;
      top: 12px;
      left: 12px;
      right: 12px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      pointer-events: none;
      z-index: 12;
    }

    .flap-hud-left {
      display: flex;
      flex-direction: column;
      gap: 4px;
      pointer-events: auto;
    }

    .flap-hud-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
      pointer-events: auto;
    }

    .flap-hud-pill {
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(217, 119, 6, 0.6);
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 700;
      color: #f1f5f9;
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }

    .flap-hud-pill .gold {
      color: #fbbf24;
      font-family: 'Cinzel', serif;
    }

    .flap-hud-progress-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(217, 119, 6, 0.6);
      border-radius: 6px;
      padding: 4px 8px;
    }

    .flap-progress-gem {
      width: 14px;
      height: 14px;
      border-radius: 4px;
      background: #334155;
      border: 1px solid #475569;
      transition: all 0.2s ease;
    }

    .flap-progress-gem.filled {
      background: linear-gradient(135deg, #10b981, #059669);
      border-color: #34d399;
      box-shadow: 0 0 6px #10b981;
    }

    .flap-hud-btn {
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(217, 119, 6, 0.6);
      border-radius: 6px;
      padding: 4px 8px;
      color: #f1f5f9;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      pointer-events: auto;
      transition: all 0.15s ease;
    }

    .flap-hud-btn:hover {
      background: #1e293b;
      border-color: #fbbf24;
    }

    /* Ready / Tap Overlay */
    .flap-canvas-message {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.75);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 20;
      text-align: center;
      padding: 24px;
      backdrop-filter: blur(2px);
      transition: opacity 0.2s ease;
    }

    .flap-canvas-message.hidden {
      display: none;
    }

    .flap-canvas-message h3 {
      font-family: 'Cinzel', serif;
      font-size: 26px;
      color: #fef08a;
      margin-bottom: 8px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    }

    .flap-canvas-message p {
      font-size: 14px;
      color: #fed7aa;
      max-width: 440px;
      margin-bottom: 20px;
      line-height: 1.5;
    }

    .flap-tap-prompt {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #d97706, #b45309);
      border: 2px solid #fef08a;
      color: #ffffff;
      padding: 10px 24px;
      border-radius: 30px;
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: 800;
      box-shadow: 0 4px 14px rgba(217, 119, 6, 0.5);
      animation: flapPulse 1.6s infinite ease-in-out;
      cursor: pointer;
    }

    @keyframes flapPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); box-shadow: 0 6px 20px rgba(217, 119, 6, 0.7); }
    }

    /* Dedicated Mobile Flap Button */
    .flap-mobile-controls {
      display: none;
      width: 100%;
      max-width: 840px;
      margin-top: 12px;
      padding: 0 16px;
    }

    @media (max-width: 768px) {
      .flap-mobile-controls {
        display: block;
      }
    }

    .flap-mobile-big-btn {
      width: 100%;
      background: linear-gradient(135deg, #d97706, #92400e);
      border: 2px solid #fef08a;
      border-radius: 12px;
      color: #ffffff;
      font-family: 'Cinzel', serif;
      font-size: 20px;
      font-weight: 800;
      padding: 16px;
      box-shadow: 0 4px 12px rgba(217, 119, 6, 0.4);
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .flap-mobile-big-btn:active {
      transform: scale(0.98);
      background: linear-gradient(135deg, #f59e0b, #b45309);
    }

    /* In-Game Modal Overlays */
    .flap-modal-dialog {
      background: #1e293b;
      border: 2px solid #d97706;
      border-radius: 14px;
      padding: 24px;
      max-width: 480px;
      width: 90%;
      text-align: center;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 24px rgba(217, 119, 6, 0.3);
      position: relative;
      animation: modalPop 0.25s ease-out;
    }

    @keyframes modalPop {
      0% { transform: scale(0.9); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    .flap-modal-badge {
      font-size: 40px;
      margin-bottom: 8px;
    }

    .flap-modal-title {
      font-family: 'Cinzel', serif;
      font-size: 22px;
      font-weight: 800;
      color: #fef08a;
      margin-bottom: 8px;
    }

    .flap-modal-title.danger {
      color: #f87171;
    }

    .flap-modal-title.success {
      color: #34d399;
    }

    .flap-modal-cause {
      font-size: 14px;
      color: #fed7aa;
      background: rgba(15, 23, 42, 0.7);
      border-radius: 8px;
      padding: 12px;
      margin: 12px 0 16px 0;
      line-height: 1.5;
      text-align: left;
      border-left: 3px solid #d97706;
    }

    .flap-modal-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 20px;
    }

    .flap-modal-stat-box {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 10px;
    }

    .flap-modal-stat-box .lbl {
      font-size: 11px;
      color: #94a3b8;
      text-transform: uppercase;
      font-weight: 700;
    }

    .flap-modal-stat-box .val {
      font-size: 18px;
      font-weight: 800;
      color: #fbbf24;
      font-family: 'Cinzel', serif;
      margin-top: 2px;
    }

    .flap-modal-btns {
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .flap-modal-btn {
      padding: 10px 20px;
      border-radius: 8px;
      font-family: 'Cinzel', serif;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.15s ease;
      border: 1px solid transparent;
    }

    .flap-modal-btn.primary {
      background: linear-gradient(135deg, #d97706, #b45309);
      color: #ffffff;
      border-color: #fef08a;
    }

    .flap-modal-btn.primary:hover {
      background: linear-gradient(135deg, #f59e0b, #d97706);
    }

    .flap-modal-btn.secondary {
      background: #334155;
      color: #f1f5f9;
      border-color: #475569;
    }

    .flap-modal-btn.secondary:hover {
      background: #475569;
    }
`;

console.log('FLAP_CSS length:', FLAP_CSS.length);
fs.writeFileSync('scripts/flap_css.txt', FLAP_CSS);
