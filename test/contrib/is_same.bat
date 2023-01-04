@echo off
setlocal enabledelayedexpansion
set "PROGRAM=%1"
set "EXPECTED=%2"
set "ARGUMENT=%3"
echo Running %PROGRAM% %ARGUMENT%
set "OUTPUT="
for /F "delims=" %%g in ('%PROGRAM% %ARGUMENT%') do (set "OUTPUT=!OUTPUT!%%g")
set /P EXPECTED_OUTPUT=<%EXPECTED%
if not "%OUTPUT%"=="%EXPECTED_OUTPUT%" (
  echo Got: %OUTPUT%
  echo Expected: %EXPECTED_OUTPUT%
  exit /b 1
)
