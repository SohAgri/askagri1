# Static runtime audit for risky DOM writes and missing selectors
$ErrorActionPreference = 'Continue'
$root = Get-Location
$files = Get-ChildItem -Path $root -Include *.js,*.ts -Recurse | Where-Object { -not $_.PSIsContainer }
$dangerPatterns = @(
  'document\.getElementById\(',
  'document\.querySelector\(',
  '\.innerHTML\b',
  '\.innerText\b',
  '\.textContent\b',
  'document\.getElementsByClassName\(',
  'document\.getElementsByTagName\('
)

$results = @()
foreach ($f in $files) {
  $txt = Get-Content -Raw -Encoding UTF8 $f.FullName
  foreach ($p in $dangerPatterns) {
    $matches = [regex]::Matches($txt, $p)
    if ($matches.Count -gt 0) {
      $results += [PSCustomObject]@{ file = $f.FullName; pattern = $p; count = $matches.Count }
    }
  }
}
$results | Sort-Object file, pattern | Format-Table -AutoSize
# Also run a quick grep for 'data-key' occurrences missing corresponding translation entries
$keys = Get-ChildItem -Path $root -Include *.html,*.js,*.ts -Recurse | Select-String -Pattern 'data-key="([^"]+)"' -AllMatches | ForEach-Object { $_.Matches } | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$trans = Get-Content -Raw -Encoding UTF8 (Join-Path $root 'assets\sector-translations.js')
$missing = @()
foreach ($k in $keys) {
  $esc = [regex]::Escape($k)
  if ($trans -notmatch $esc) { $missing += $k }
}
Write-Output "\nMissing keys in assets/sector-translations.js: $($missing.Count)"
$missing | ForEach-Object { Write-Output " - $_" }
# Save a simple JSON report
$report = @{ timestamp = (Get-Date).ToString('o'); risky = $results; missing_keys = $missing }
$report | ConvertTo-Json -Depth 5 | Out-File -Encoding UTF8 audit-report.json
Write-Output "Saved audit-report.json"