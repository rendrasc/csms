#!/bin/bash
echo "🚀 Starting Vercel Deployment..."
# Installs dependencies if missing and runs vercel
npm install
npx vercel
