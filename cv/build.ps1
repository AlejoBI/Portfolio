param(
  [string]$ProfileName = ""
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

$AssetsDir = Join-Path (Split-Path -Parent $CvDir) "src\assets\docs"

function Build-Cv {
  param([string]$Profile)

  Write-Host "`n=== Compiling $Profile ===" -ForegroundColor Cyan

  $texFile = Join-Path $CvDir "$Profile.tex"
  if (-not (Test-Path $texFile)) {
    Write-Host "ERROR: $texFile not found" -ForegroundColor Red
    return
  }

  for ($i = 1; $i -le 2; $i++) {
    Write-Host "  Pass $i/2..." -ForegroundColor Gray
    & $pdfLatex -interaction=nonstopmode "-output-directory=$OutputDir" "$Profile.tex"
    Write-Host "  Exit code: $LASTEXITCODE" -ForegroundColor DarkGray
  }

  $pdfFile = Join-Path $OutputDir "$Profile.pdf"
  $logFile = Join-Path $OutputDir "$Profile.log"
  if (Test-Path $pdfFile) {
    Write-Host "  DONE: $pdfFile" -ForegroundColor Green
  } else {
    Write-Host "  FAILED: no PDF generated" -ForegroundColor Red
    if (Test-Path $logFile) {
      Select-String -Path $logFile -Pattern "^! " | ForEach-Object { Write-Host "    $_" -ForegroundColor Red }
    }
  }

  $cleanup = @((Join-Path $OutputDir "$Profile.aux"), (Join-Path $OutputDir "$Profile.log"), (Join-Path $OutputDir "$Profile.out"))
  foreach ($f in $cleanup) {
    if (Test-Path $f) { Remove-Item $f -Force }
  }
}

if ($ProfileName -ne "") {
  Build-Cv -Profile $ProfileName
} else {
  Build-Cv -Profile "cv"
  Build-Cv -Profile "cv_en"
}

if (Test-Path $AssetsDir) {
  $cvEs = Join-Path $OutputDir "cv.pdf"
  $cvEn = Join-Path $OutputDir "cv_en.pdf"
  if (Test-Path $cvEs) { Copy-Item -Path $cvEs -Destination (Join-Path $AssetsDir "CV.pdf") -Force }
  if (Test-Path $cvEn) { Copy-Item -Path $cvEn -Destination (Join-Path $AssetsDir "CV_EN.pdf") -Force }
  Write-Host "`nPDFs copied to $AssetsDir" -ForegroundColor Green
}

Write-Host "`nDone." -ForegroundColor Cyan
