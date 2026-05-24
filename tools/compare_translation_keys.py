import re
import json
from pathlib import Path

root = Path('.').resolve()
html_files = [p for p in root.iterdir() if p.suffix == '.html']

def extract_data_keys(content):
    return re.findall(r'data-key="([^"]+)"', content)

all_keys = set()
per_file = {}
for p in html_files:
    text = p.read_text(encoding='utf8')
    keys = list(dict.fromkeys(extract_data_keys(text)))
    per_file[p.name] = keys
    all_keys.update(keys)

# load translations file by executing its JS object safely
trans_file = root / 'assets' / 'sector-translations.js'
translations = {'od': {}, 'te': {}}
if trans_file.exists():
    txt = trans_file.read_text(encoding='utf8')
    # extract od and te object bodies
    m_od = re.search(r'od\s*:\s*{([\s\S]*?)}\s*,\s*te\s*:', txt)
    if m_od:
        od_body = m_od.group(1)
        od_keys = re.findall(r"([\w\-\s\u0080-\uFFFF]+?)\s*:\s*['\"]", od_body)
        od_keys = [k.strip().strip('"\'') for k in od_keys]
        translations['od'] = {k: True for k in od_keys}
    m_te = re.search(r'te\s*:\s*{([\s\S]*?)}\s*}\s*;?\s*$', txt)
    if m_te:
        te_body = m_te.group(1)
        te_keys = re.findall(r"([\w\-\s\u0080-\uFFFF]+?)\s*:\s*['\"]", te_body)
        te_keys = [k.strip().strip('"\'') for k in te_keys]
        translations['te'] = {k: True for k in te_keys}
    # fallback: try a broader key match inside od: { ... }
    if not translations['od'] or not translations['te']:
        # find all keys like key: 'value' globally and then split by od/te blocks
        all_matches = re.findall(r"([\S ]+?)\s*:\s*['\"]", txt)

od_keys = list(translations['od'].keys())
te_keys = list(translations['te'].keys())

missing_od = [k for k in sorted(all_keys) if k not in od_keys]
missing_te = [k for k in sorted(all_keys) if k not in te_keys]

per_file_missing = {}
for fname, keys in per_file.items():
    per_file_missing[fname] = {
        'missingInOd': [k for k in keys if k not in od_keys],
        'missingInTe': [k for k in keys if k not in te_keys]
    }

report = {
    'summary': {
        'total_html_files_scanned': len(html_files),
        'unique_data_keys_count': len(all_keys),
        'sample_keys': list(sorted(all_keys))[:30]
    },
    'translations': {
        'od_count': len(od_keys),
        'te_count': len(te_keys),
        'missing_in_od': missing_od,
        'missing_in_te': missing_te
    },
    'per_file': per_file_missing
}

with open('translation-qa-report.json', 'w', encoding='utf8') as f:
    json.dump(report, f, indent=2, ensure_ascii=False)
print(json.dumps(report, indent=2, ensure_ascii=False))
