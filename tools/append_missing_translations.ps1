$ErrorActionPreference = 'Stop'
$root = Get-Location
$files = Get-ChildItem -Path $root -Include *.html,*.js,*.ts -Recurse | Where-Object { -not $_.PSIsContainer }
$pattern = 'data-key="([^"]+)"'
$keys = [System.Collections.Generic.HashSet[string]]::new()
foreach ($f in $files) {
  $txt = Get-Content -Raw -Encoding UTF8 $f.FullName
  $matches = [regex]::Matches($txt, $pattern)
  foreach ($m in $matches) { $k = $m.Groups[1].Value.Trim(); if (-not [string]::IsNullOrEmpty($k)) { $keys.Add($k) | Out-Null } }
}
$transPath = Join-Path $root 'assets\sector-translations.js'
if (-not (Test-Path $transPath)) { Write-Error "Missing $transPath"; exit 1 }
$transTxt = Get-Content -Raw -Encoding UTF8 $transPath
$missing = @()
$odLines = @()
$teLines = @()
foreach ($k in $keys) {
  # check if key already exists in file (simple heuristic)
  $escapedSingle = [regex]::Escape("'$k'")
  $escapedDouble = [regex]::Escape('"' + $k + '"')
  if (($transTxt -notmatch $escapedSingle) -and ($transTxt -notmatch $escapedDouble)) {
    $val = $k + ' /* AUTO */'
    $odLines += ("  " + (ConvertTo-Json $k -Compress) + ": " + (ConvertTo-Json $val -Compress) + ",")
    $teLines += ("  " + (ConvertTo-Json $k -Compress) + ": " + (ConvertTo-Json $val -Compress) + ",")
    $missing += $k
  }
}
if ($missing.Count -eq 0) { Write-Output "No missing translation keys found."; exit 0 }
$block = "`n// ===== AUTO-APPENDED TRANSLATIONS (run tools/append_missing_translations.ps1) =====`n;(function(){`n  if (typeof sectorTranslations === 'undefined') window.sectorTranslations = { od: {}, te: {} };`n  sectorTranslations.od = Object.assign({}, sectorTranslations.od || {}, {`n$($odLines -join "`n")`n  });`n  sectorTranslations.te = Object.assign({}, sectorTranslations.te || {}, {`n$($teLines -join "`n")`n  });`n})();`n"
Add-Content -Path $transPath -Value $block -Encoding UTF8
Write-Output "Appended $($missing.Count) AUTO entries to $transPath"