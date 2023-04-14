@echo off
setlocal

set "PROGRAM=%1"
set "EXPECTED=%2"
set "ARGUMENT=%3"
set "SUBARGUMENT=%4"

set "TEMP_OUTPUT=test-output-%RANDOM%-%RANDOM%.txt"

if "%SUBARGUMENT%"=="" (
  echo Running %PROGRAM% ^< %ARGUMENT%  1>&2
  "%PROGRAM%" < "%ARGUMENT%" >"%TEMP_OUTPUT%" || exit /b 1
) else (
  echo Running %PROGRAM% %SUBARGUMENT% ^< %ARGUMENT%  1>&2
  "%PROGRAM%" "%SUBARGUMENT%" < "%ARGUMENT%" >"%TEMP_OUTPUT%" || exit /b 1
)

fc "%TEMP_OUTPUT%" "%EXPECTED%" > nul
if errorlevel 1 (
  echo Got 1>&2
  type "%TEMP_OUTPUT%"
  del "%TEMP_OUTPUT%"
  echo Expected 1>&2
  type "%EXPECTED%"
  exit /b 1
) else (
  del "%TEMP_OUTPUT%"
)
