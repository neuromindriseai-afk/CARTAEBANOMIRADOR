# 🎯 COMANDOS EXACTOS PARA DESPLEGAR

## Paso 1: Login (SOLO UNA VEZ)

```bash
vercel login
```

**IMPORTANTE:**
- Presiona ENTER cuando te lo pida
- Se abrirá el navegador automáticamente
- Acepta los permisos en Vercel
- Vuelve a la terminal - deberías ver "Authentication complete ✅"

---

## Paso 2: Desplegar

```bash
vercel --prod --yes
```

**Esto te dará:**
- ✅ URL de producción inmediatamente
- ✅ Link para compartir
- ✅ Todo listo en menos de 1 minuto

---

## ⚠️ Si el login no funciona:

1. Elimina el token anterior:
   ```bash
   rm -rf ~/.vercel
   ```

2. Vuelve a hacer login:
   ```bash
   vercel login
   ```

---

## 🚀 ALTERNATIVA RÁPIDA (Sin terminal):

1. Ve a: https://app.netlify.com/drop
2. Arrastra la carpeta "CARTA EBANO"
3. ¡Link al instante!

