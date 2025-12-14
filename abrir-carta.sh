#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Iniciando servidor local..."
python3 -m http.server 8000 > /dev/null 2>&1 &
sleep 2
echo "✅ Abriendo carta en navegador..."
open "http://localhost:8000/index.html"
echo "📱 La carta está disponible en: http://localhost:8000/index.html"
echo "💡 Presiona Ctrl+C para detener el servidor"

