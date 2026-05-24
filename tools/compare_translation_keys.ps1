$root = Get-Location
$htmlFiles = Get-ChildItem -Path $root -Filter *.html
$allKeys = @()
$perFile = @{}

foreach ($f in $htmlFiles) {
    $text = Get-Content $f -Raw
    $matches = [regex]::Matches($text, 'data-key="([^"]+)"')
    $keys = $matches | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
    $perFile[$f.Name] = $keys
    $allKeys += $keys
}
$allKeys = $allKeys | Select-Object -Unique

$transPath = Join-Path $root 'assets\sector-translations.js'
$odKeys = @()
$teKeys = @()
if (Test-Path $transPath) {
    $t = Get-Content $transPath -Raw
    $m = [regex]::Match($t, 'od\s*:\s*{([\s\S]*?)}\s*,\s*te\s*:\s*{([\s\S]*?)}', 'Singleline')
    if ($m.Success) {
        $odBody = $m.Groups[1].Value
        $teBody = $m.Groups[2].Value
        $odKeys = ([regex]::Matches($odBody, '([^\r\n]+?)\s*:\s*["\']')) | ForEach-Object { $_.Groups[1].Value.Trim() } | Select-Object -Unique
        $teKeys = ([regex]::Matches($teBody, '([^\r\n]+?)\s*:\s*["\']')) | ForEach-Object { $_.Groups[1].Value.Trim() } | Select-Object -Unique
    } else {
        # fallback: try to extract keys inside od: {...} and te: {...} separately
        $m1 = [regex]::Match($t, 'od\s*:\s*{([\s\S]*?)}', 'Singleline')
        $m2 = [regex]::Match($t, 'te\s*:\s*{([\s\S]*?)}', 'Singleline')
        if ($m1.Success) { $odBody = $m1.Groups[1].Value; $odKeys = ([regex]::Matches($odBody, '([^\r\n]+?)\s*:\s*["\']')) | ForEach-Object { $_.Groups[1].Value.Trim() } | Select-Object -Unique }
        if ($m2.Success) { $teBody = $m2.Groups[1].Value; $teKeys = ([regex]::Matches($teBody, '([^\r\n]+?)\s*:\s*["\']')) | ForEach-Object { $_.Groups[1].Value.Trim() } | Select-Object -Unique }
    }
}

$missingOd = $allKeys | Where-Object { $odKeys -notcontains $_ }
$missingTe = $allKeys | Where-Object { $teKeys -notcontains $_ }

$perFileMissing = @{}
foreach ($k in $perFile.Keys) {
    $keys = $perFile[$k]
    $perFileMissing[$k] = @{ missingInOd = ($keys | Where-Object { $odKeys -notcontains $_ }); missingInTe = ($keys | Where-Object { $teKeys -notcontains $_ }) }
}

$report = @{ 
    summary = @{ total_html_files_scanned = $htmlFiles.Count; unique_data_keys_count = $allKeys.Count; sample_keys = ($allKeys | Select-Object -First 30) };
    translations = @{ od_count = $odKeys.Count; te_count = $teKeys.Count; missing_in_od = $missingOd; missing_in_te = $missingTe };
    per_file = $perFileMissing
}

$report | ConvertTo-Json -Depth 6 | Out-File translation-qa-report.json -Encoding utf8
$report | ConvertTo-Json -Depth 6
