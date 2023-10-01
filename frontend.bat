@echo off

REM Step 1: npm install
call npm i --force

REM Step 2: Run your Next application
call cmd /k npm run dev
