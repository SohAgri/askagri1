#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const transPath = path.join(root, 'assets', 'sector-translations.js');

function extractDataKeysFromFiles() {
  const exts = ['.html', '.js', '.ts'];
  const files = fs.readdirSync(root).filter(f => exts.includes(path.extname(f)));
  const keys = new Set();
  files.forEach(f => {
    const txt = fs.readFileSync(path.join(root, f), 'utf8');
    const re = /data-key="([^"]+)"/g;
    let m;
    while ((m = re.exec(txt)) !== null) keys.add(m[1]);
  });
  return Array.from(keys).sort();
}

function loadTranslations() {
  const code = fs.readFileSync(transPath, 'utf8') + '\nreturn typeof sectorTranslations !== "undefined" ? sectorTranslations : null;';
  try {
    const fn = new Function(code);
    return fn();
  } catch (err) {
    console.error('Failed to load translations:', err.message);
    process.exit(1);
  }
}

function makeAutoBlock(missingOd, missingTe) {
  const odLines = Object.entries(missingOd).map(([k,v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)} /* AUTO */,`).join('\n');
  const teLines = Object.entries(missingTe).map(([k,v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)} /* AUTO */,`).join('\n');
  return `\n// ===== AUTO-APPENDED TRANSLATIONS (run tools/append_missing_translations.js) =====\n;(function(){\n  if (typeof sectorTranslations === 'undefined') window.sectorTranslations = { od: {}, te: {} };\n  sectorTranslations.od = Object.assign({}, sectorTranslations.od || {}, {\n${odLines}\n  });\n  sectorTranslations.te = Object.assign({}, sectorTranslations.te || {}, {\n${teLines}\n  });\n})();\n`;
}

function main() {
  if (!fs.existsSync(transPath)) {
    console.error('Missing assets/sector-translations.js');
    process.exit(1);
  }
  const keys = extractDataKeysFromFiles();
  const translations = loadTranslations();
  const od = translations.od || {};
  const te = translations.te || {};
  const missingOd = {};
  const missingTe = {};
  keys.forEach(k => {
    if (od[k] === undefined) missingOd[k] = (k).toString() + ' /* AUTO */';
    if (te[k] === undefined) missingTe[k] = (k).toString() + ' /* AUTO */';
  });
  if (Object.keys(missingOd).length === 0 && Object.keys(missingTe).length === 0) {
    console.log('No missing translation keys found.');
    return;
  }
  const block = makeAutoBlock(missingOd, missingTe);
  fs.appendFileSync(transPath, block, 'utf8');
  console.log('Appended', Object.keys(missingOd).length, 'AUTO od entries and', Object.keys(missingTe).length, 'AUTO te entries to', transPath);
}

main();
