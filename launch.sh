#!/bin/bash

# Multikor.ai Investor Platform Launcher
# This script starts a local web server to view the presentation

echo "🚀 Starting Multikor.ai Investor Platform..."
echo ""
echo "📍 Server will be available at: http://localhost:8000"
echo "🔐 Access password: multikor2026"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    # Open browser automatically (works on macOS)
    sleep 2 && open http://localhost:8000 &

    # Start Python server
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    # Fallback to Python 2 if needed
    sleep 2 && open http://localhost:8000 &
    python -m SimpleHTTPServer 8000
else
    echo "❌ Error: Python is not installed"
    echo "Please install Python or open index.html directly in your browser"
    exit 1
fi
