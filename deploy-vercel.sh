#!/bin/bash

echo "🚀 DESPLEGANDO CARTA A VERCEL"
echo "================================"
echo ""

# Verificar si está autenticado
if ! vercel whoami &>/dev/null; then
    echo "⚠️  Necesitas autenticarte primero"
    echo ""
    echo "1. Se abrirá tu navegador para autenticarte"
    echo "2. Acepta los permisos en Vercel"
    echo "3. Vuelve aquí y el script continuará automáticamente"
    echo ""
    read -p "Presiona ENTER para iniciar login..."
    vercel login
fi

echo ""
echo "✅ Autenticado correctamente"
echo ""
echo "📤 Subiendo proyecto a Vercel..."
echo ""

# Desplegar a producción
vercel --prod --yes

echo ""
echo "✅ ¡DESPLIEGUE COMPLETADO!"
echo ""
echo "📋 Tu carta está online. Revisa la URL arriba ↑"

