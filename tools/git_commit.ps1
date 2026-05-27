$ErrorActionPreference = 'Stop'
# Ensure we're in a git repo
try {
  git rev-parse --is-inside-work-tree > $null 2>&1
} catch {
  Write-Error 'Not a git repository here.'; exit 1
}
# Create/force branch
git checkout -B i18n/auto-translations-append
# Stage all changes
git add -A
# Commit if there are staged changes
$staged = git diff --staged --name-only
if ([string]::IsNullOrWhiteSpace($staged)) {
  Write-Output 'No staged changes to commit.'
} else {
  git commit -m 'i18n: append missing Odia/Telugu AUTO translations; add append scripts'
}
# Output branch and commit
$branch = git rev-parse --abbrev-ref HEAD
$head = git rev-parse --short HEAD
Write-Output "BRANCH:$branch"
Write-Output "HEAD:$head"
