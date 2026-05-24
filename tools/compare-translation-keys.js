const fs = require('fs');
const path = require('path');

const root = process.cwd();
const files = fs.readdirSync(root).filter(f => f.endsWith('.html'));

function extractDataKeys(content) {
  const re = /data-key="([^"]+)"/g;
  const keys = [];
  let m;
  while ((m = re.exec(content)) !== null) keys.push(m[1]);
  return keys;
}

// load translation file by executing it and returning sectorTranslations
function loadSectorTranslations(filePath) {
  const code = fs.readFileSync(filePath, 'utf8') + '\nreturn typeof sectorTranslations !== "undefined" ? sectorTranslations : null;';
  try {
    const fn = new Function(code);
    return fn();
  } catch (err) {
    console.error('Failed to parse translations:', err.message);
    return null;
  }
}

const allKeys = new Set();
const perFile = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(root, file), 'utf8');
  const keys = extractDataKeys(content);
  perFile[file] = Array.from(new Set(keys));
  perFile[file].forEach(k => allKeys.add(k));
}

const translations = loadSectorTranslations(path.join('assets','sector-translations.js')) || {};
const odKeys = Object.keys(translations.od || {});
const teKeys = Object.keys(translations.te || {});
const odSet = new Set(odKeys);
const teSet = new Set(teKeys);

const missingOd = Array.from(allKeys).filter(k => !odSet.has(k));
const missingTe = Array.from(allKeys).filter(k => !teSet.has(k));

const perFileMissing = {};
for (const [file, keys] of Object.entries(perFile)) {
  perFileMissing[file] = {
    missingInOd: keys.filter(k => !odSet.has(k)),
    missingInTe: keys.filter(k => !teSet.has(k))
  };
}

const report = {
  summary: {
    total_html_files_scanned: files.length,
    unique_data_keys_count: allKeys.size,
    sample_keys: Array.from(allKeys).slice(0, 30)
  },
  translations: {
    od_count: odKeys.length,
    te_count: teKeys.length,
    missing_in_od: missingOd,
    missing_in_te: missingTe
  },
  per_file: perFileMissing
};

fs.writeFileSync('translation-qa-report.json', JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify(report, null, 2));
process.exit(0);
