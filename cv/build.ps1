param(
  [string]$ProfileName = "cv"
)

$ErrorActionPreference = "Continue"

$pdfLatex = "C:\Users\Gamer\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe"
if (-not (Test-Path $pdfLatex)) {
  $pdfLatex = "pdflatex"
}

$env:MIKTEX_AUTOINSTALL = "1"

$CvDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $CvDir

$OutputDir = Join-Path $CvDir "output"
if (-not (Test-Path $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

$profile = $ProfileName

Write-Host "=== Compiling $profile ===" -ForegroundColor Cyan

$texFile = Join-Path $CvDir "$profile.tex"
if (-not (Test-Path $texFile)) {
  Write-Host "ERROR: $texFile not found" -ForegroundColor Red
  exit 1
}

for ($i = 1; $i -le 2; $i++) {
  Write-Host "  Pass $i/2..." -ForegroundColor Gray
  & $pdfLatex -interaction=nonstopmode "-output-directory=$OutputDir" "$profile.tex"
  Write-Host "  Exit code: $LASTEXITCODE" -ForegroundColor DarkGray
}

$pdfFile = Join-Path $OutputDir "$profile.pdf"
$logFile = Join-Path $OutputDir "$profile.log"
if (Test-Path $pdfFile) {
  Write-Host "  DONE: $pdfFile" -ForegroundColor Green
} else {
  Write-Host "  FAILED: no PDF generated" -ForegroundColor Red
  if (Test-Path $logFile) {
    Select-String -Path $logFile -Pattern "^! " | ForEach-Object { Write-Host "    $_" -ForegroundColor Red }
  }
}

$cleanup = @((Join-Path $OutputDir "$profile.aux"), (Join-Path $OutputDir "$profile.log"), (Join-Path $OutputDir "$profile.out"))
foreach ($f in $cleanup) {
  if (Test-Path $f) { Remove-Item $f -Force }
}

Write-Host "`nDone: $(Join-Path $OutputDir "$profile.pdf")" -ForegroundColor Cyan
