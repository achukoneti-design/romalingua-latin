const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const flapCss = fs.readFileSync('scripts/flap_css.txt', 'utf8');
const flapHtml = fs.readFileSync('scripts/flap_html.txt', 'utf8');
const flapJs = fs.readFileSync('scripts/flap_js.txt', 'utf8');

// 1. Insert CSS right before </style>
if (!html.includes('LATINA FLAP MINI-GAME STYLES')) {
  const styleEnd = '</style>';
  const idx = html.indexOf(styleEnd);
  if (idx === -1) throw new Error('Could not find </style>');
  html = html.slice(0, idx) + '\n' + flapCss + '\n' + html.slice(idx);
  console.log('Inserted FLAP_CSS');
} else {
  console.log('FLAP_CSS already present');
}

// 2. Insert Nav Button in nav-tabs right after tabBtnCodex
const codexBtnStr = `<button type="button" class="tab-btn" onclick="switchTab('codex', event)" id="tabBtnCodex">
        <span>📜</span> Grammar Notes
      </button>`;

const flapNavBtn = `
      <button type="button" class="tab-btn" onclick="switchTab('flap', event)" id="tabBtnFlap">
        <span>🎮</span> Latina Flap
      </button>`;

if (!html.includes('id="tabBtnFlap"')) {
  if (html.includes(codexBtnStr)) {
    html = html.replace(codexBtnStr, codexBtnStr + flapNavBtn);
    console.log('Inserted tabBtnFlap into nav-tabs');
  } else {
    throw new Error('Could not find codexBtnStr in index.html');
  }
} else {
  console.log('tabBtnFlap already present');
}

// 3. Insert FLAP_HTML right before </main>
if (!html.includes('id="tabFlap"')) {
  const mainEnd = '</main>';
  const idx = html.lastIndexOf(mainEnd);
  if (idx === -1) throw new Error('Could not find </main>');
  html = html.slice(0, idx) + '\n' + flapHtml + '\n' + html.slice(idx);
  console.log('Inserted FLAP_HTML before </main>');
} else {
  console.log('tabFlap already present');
}

// 4. Update switchTab to handle 'flap' tab
if (!html.includes('updateFlapLobbyStatsUI()') && html.includes('if (tabId === \'deck\') {')) {
  const switchTarget = `if (tabId === 'deck') {
        const grid = document.getElementById('cardsGrid');
        if (grid) grid.innerHTML = '';
        filterAndRenderCards();
      }`;

  const switchReplacement = `if (tabId === 'deck') {
        const grid = document.getElementById('cardsGrid');
        if (grid) grid.innerHTML = '';
        filterAndRenderCards();
      }

      if (tabId === 'flap') {
        if (typeof updateFlapLobbyStatsUI === 'function') updateFlapLobbyStatsUI();
        if (typeof renderFlapLevelGrid === 'function') renderFlapLevelGrid();
      } else {
        if (typeof flapGameState !== 'undefined' && flapGameState === 'PLAYING' && typeof toggleFlapPause === 'function') {
          toggleFlapPause();
        }
      }`;

  html = html.replace(switchTarget, switchReplacement);
  console.log('Updated switchTab with flap handlers');
}

// 5. Insert FLAP_JS inside script before window.loadSentence
if (!html.includes('LATINA FLAP GAME ENGINE')) {
  const targetScript = 'window.loadSentence = loadSentence;';
  const idx = html.indexOf(targetScript);
  if (idx === -1) throw new Error('Could not find window.loadSentence');
  html = html.slice(0, idx) + '\n' + flapJs + '\n\n    ' + html.slice(idx);
  console.log('Inserted FLAP_JS before window exports');
} else {
  console.log('FLAP_JS already present');
}

// 6. Update initApp to initialize Flap UI
if (!html.includes('renderFlapLevelGrid();') && html.includes('function initApp() {')) {
  const initTarget = 'setArenaDifficulty(currentDifficulty, false);';
  const initReplacement = `setArenaDifficulty(currentDifficulty, false);
      if (typeof updateFlapLobbyStatsUI === 'function') updateFlapLobbyStatsUI();
      if (typeof renderFlapLevelGrid === 'function') renderFlapLevelGrid();`;
  html = html.replace(initTarget, initReplacement);
  console.log('Updated initApp with flap initialization');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with Latina Flap!');
