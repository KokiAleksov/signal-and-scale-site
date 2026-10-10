@echo off
rem Double-click this file to start the Signal and Scale site on this computer.
rem It installs the packages the first time, starts the site, and opens your browser.
title Signal and Scale
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Get it from https://nodejs.org and run this file again.
  pause
  exit /b 1
)

if not exist "node_modules\.package-lock.json" call :install
if errorlevel 1 (
  echo.
  echo The install did not finish. Check your internet connection and run this file again.
  pause
  exit /b 1
)
if exist "npm-offline" rmdir /s /q "npm-offline"

rem Use port 3000, or the next free one if another app already has it.
set PORT=
for /f %%p in ('powershell -NoProfile -Command "$p=3000; while (Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue) { $p++ }; $p"') do set PORT=%%p
if "%PORT%"=="" set PORT=3000

echo.
echo Starting the site at http://localhost:%PORT%
echo Your browser opens when it is ready. Close this window to stop the site.
echo.

rem Open the browser once the site answers.
start "" /min powershell -NoProfile -WindowStyle Hidden -Command "$u='http://localhost:%PORT%'; for ($i=0; $i -lt 180; $i++) { try { Invoke-WebRequest -UseBasicParsing -TimeoutSec 120 $u | Out-Null; break } catch { if ($_.Exception.Response) { break }; Start-Sleep 1 } }; Start-Process $u"

call npm run dev -- --port %PORT%
pause
exit /b 0


:install
rem A half-finished install can leave broken files behind, so start clean.
if exist "node_modules" (
  echo Removing the unfinished install...
  rmdir /s /q "node_modules"
)

rem Packages delivered next to this file skip the slowest downloads.
if exist "npm-offline\next-16.4.0.tgz.part1" (
  echo Adding the Next.js packages that were delivered to this folder...
  copy /b "npm-offline\next-16.4.0.tgz.part1" + "npm-offline\next-16.4.0.tgz.part2" "npm-offline\next-16.4.0.tgz" >nul
  call npm cache add ".\npm-offline\next-16.4.0.tgz"
)
if exist "npm-offline\next-swc-win32-x64-msvc-16.4.0.tgz.part1" (
  copy /b "npm-offline\next-swc-win32-x64-msvc-16.4.0.tgz.part1" + "npm-offline\next-swc-win32-x64-msvc-16.4.0.tgz.part2" "npm-offline\next-swc-win32-x64-msvc-16.4.0.tgz" >nul
  call npm cache add ".\npm-offline\next-swc-win32-x64-msvc-16.4.0.tgz"
)

echo Installing packages. This can take a few minutes...
rem "npm ci" installs exactly what package-lock.json lists and leaves that file alone.
call npm ci --prefer-offline --no-audit --no-fund
exit /b %errorlevel%
