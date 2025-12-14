#!/bin/bash

# Script para hacer push a GitHub
# Necesitas un Personal Access Token

echo "🚀 HACIENDO PUSH A GITHUB..."
echo ""
echo "Si te pide usuario y contraseña:"
echo "  Username: neuromindriseai-afk"
echo "  Password: (pega tu Personal Access Token)"
echo ""
echo "Para crear un token: https://github.com/settings/tokens"
echo ""

cd "/Users/neuromindaiyoutubeus/Desktop/cartaebano-temp"
git push origin main

echo ""
echo "✅ Si no hubo errores, ¡listo!"
echo "✅ Ve a GitHub.com para verificar"
echo "✅ Luego ve a Vercel y haz Redeploy"
