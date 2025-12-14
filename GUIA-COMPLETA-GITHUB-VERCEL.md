# 🚀 GUÍA COMPLETA: GitHub + Vercel - Paso a Paso

**Objetivo:** Subir tu carta a internet y obtener una URL para compartir.

**Tiempo estimado:** 15-20 minutos

---

## 📋 PREPARACIÓN (2 minutos)

### ✅ Verificar que todo esté listo

Antes de empezar, asegúrate de tener:
- ✅ Tu carpeta "CARTA EBANO" completa
- ✅ Conexión a internet
- ✅ Una cuenta de email (para GitHub y Vercel)

---

## PARTE 1: GITHUB (10 minutos)

### PASO 1: Crear cuenta en GitHub

1. **Abre tu navegador** y ve a:
   ```
   https://github.com
   ```

2. **Haz clic en "Sign up"** (Registrarse)

3. **Completa el formulario:**
   - Username: (elige uno, ej: `tu-nombre` o `mirador-ebano`)
   - Email: (tu email)
   - Password: (crea una contraseña segura)
   - Haz clic en "Create account"

4. **Verifica tu email** (revisa tu bandeja de entrada)

5. **Completa el onboarding** (puedes saltar las preguntas opcionales)

---

### PASO 2: Crear un nuevo repositorio

1. **Una vez dentro de GitHub**, verás el dashboard

2. **Haz clic en el botón verde "New"** (o el ícono "+" arriba a la derecha → "New repository")

3. **Completa el formulario:**
   - **Repository name:** `carta-ebano` (o el nombre que prefieras)
   - **Description:** (opcional) "Carta digital del Mirador Restaurante Ébano"
   - **Visibility:** 
     - ✅ **Public** (recomendado - es gratis y permite Vercel gratis)
     - ⚠️ Private (requiere plan de pago para Vercel)
   - **NO marques** "Add a README file"
   - **NO marques** "Add .gitignore"
   - **NO marques** "Choose a license"
   
4. **Haz clic en "Create repository"** (botón verde)

5. **¡Importante!** GitHub te mostrará una página con instrucciones. **NO la cierres todavía**, la necesitarás en el siguiente paso.

---

### PASO 3: Subir tu proyecto a GitHub

Tienes **2 opciones**. Elige la que te resulte más fácil:

#### 🎯 OPCIÓN A: Usando GitHub Desktop (MÁS FÁCIL) ⭐ RECOMENDADO

1. **Descarga GitHub Desktop:**
   - Ve a: https://desktop.github.com
   - Descarga e instala (es gratis)

2. **Abre GitHub Desktop** y:
   - Haz clic en "Sign in to GitHub.com"
   - Inicia sesión con tu cuenta

3. **Conecta tu repositorio:**
   - En GitHub Desktop: File → "Clone repository"
   - O haz clic en "Add" → "Clone repository"
   - Busca `carta-ebano` en la lista
   - Elige dónde guardarlo (puede ser el Escritorio)
   - Haz clic en "Clone"

4. **Copia tus archivos:**
   - Abre la carpeta que acabas de clonar (estará vacía)
   - **Copia TODOS los archivos** de tu carpeta "CARTA EBANO" a esta nueva carpeta
   - **EXCEPTO** `.DS_Store` (si aparece, puedes ignorarlo)

5. **Sube los cambios:**
   - Vuelve a GitHub Desktop
   - Verás todos tus archivos listados
   - En la parte inferior izquierda, escribe un mensaje: "Primera versión de la carta"
   - Haz clic en "Commit to main"
   - Luego haz clic en "Push origin" (arriba a la derecha)

6. **¡Listo!** Ve a tu repositorio en GitHub.com y verás todos tus archivos.

---

#### 🎯 OPCIÓN B: Usando la Terminal (Más rápido si ya sabes usarla)

1. **Abre la Terminal** (en Mac: Cmd + Espacio, escribe "Terminal")

2. **Navega a tu carpeta:**
   ```bash
   cd "/Users/neuromindaiyoutubeus/Desktop/CARTA EBANO"
   ```

3. **Inicializa Git:**
   ```bash
   git init
   ```

4. **Agrega todos los archivos:**
   ```bash
   git add .
   ```

5. **Crea el primer commit:**
   ```bash
   git commit -m "Primera versión de la carta"
   ```

6. **Conecta con GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/carta-ebano.git
   ```
   ⚠️ **IMPORTANTE:** Reemplaza `TU-USUARIO` con tu username de GitHub

7. **Sube los archivos:**
   ```bash
   git push -u origin main
   ```

8. **Si te pide credenciales:**
   - Username: tu username de GitHub
   - Password: necesitarás un **Personal Access Token** (ver abajo)

---

### 🔑 Crear Personal Access Token (si usas Terminal)

Si GitHub te pide autenticación:

1. Ve a: https://github.com/settings/tokens
2. Haz clic en "Generate new token" → "Generate new token (classic)"
3. **Nombre:** "Vercel Deploy"
4. **Expiración:** 90 días (o el que prefieras)
5. **Permisos:** Marca solo "repo" (todos los sub-items)
6. Haz clic en "Generate token"
7. **¡COPIA EL TOKEN INMEDIATAMENTE!** (solo se muestra una vez)
8. Úsalo como password cuando Git te lo pida

---

### ✅ Verificar que GitHub funciona

1. Ve a: `https://github.com/TU-USUARIO/carta-ebano`
2. Deberías ver todos tus archivos:
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
   - ✅ `fotos-ebano/` (carpeta)
   - ✅ `vercel.json`
   - ✅ etc.

**Si ves todo, ¡perfecto! Sigue al siguiente paso.**

---

## PARTE 2: VERCEL (5 minutos)

### PASO 4: Crear cuenta en Vercel

1. **Abre tu navegador** y ve a:
   ```
   https://vercel.com
   ```

2. **Haz clic en "Sign Up"**

3. **Elige "Continue with GitHub"** ⭐ (RECOMENDADO - más fácil)

4. **Autoriza Vercel** a acceder a tus repositorios:
   - Haz clic en "Authorize Vercel"
   - Esto permite que Vercel vea tus repositorios

---

### PASO 5: Importar tu proyecto desde GitHub

1. **En el dashboard de Vercel**, verás "Add New..." → **"Project"**

2. **Busca tu repositorio:**
   - Verás una lista de tus repositorios de GitHub
   - Busca `carta-ebano` (o el nombre que le pusiste)
   - Haz clic en **"Import"**

3. **Configuración del proyecto:**
   - **Framework Preset:** Deja "Other" (o "Other" si aparece)
   - **Root Directory:** Déjalo vacío (o pon `.`)
   - **Build Command:** Déjalo vacío (no necesitas build)
   - **Output Directory:** Déjalo vacío (o pon `.`)
   - **Install Command:** Déjalo vacío

4. **Variables de entorno:** No necesitas ninguna, déjalo vacío

5. **Haz clic en "Deploy"** (botón azul)

6. **Espera 1-2 minutos** mientras Vercel:
   - Clona tu repositorio
   - Detecta que es un sitio estático
   - Lo despliega

---

### PASO 6: ¡Obtener tu URL!

1. **Cuando termine el deploy**, verás:
   - ✅ "Congratulations! Your project has been deployed"
   - Una URL como: `https://carta-ebano-xxxxx.vercel.app`

2. **Haz clic en la URL** o en "Visit" para ver tu carta online

3. **¡FELICIDADES!** 🎉 Tu carta está en internet

---

## 📱 COMPARTIR TU CARTA

### Tu URL será algo como:
```
https://carta-ebano-xxxxx.vercel.app
```

### Puedes:
- ✅ Compartirla en WhatsApp
- ✅ Ponerla en tu perfil de Instagram (link en bio)
- ✅ Compartirla en Facebook
- ✅ Crear un QR Code para imprimir
- ✅ Enviarla por email

---

## 🔄 ACTUALIZAR LA CARTA (Después)

### Cada vez que quieras actualizar:

1. **Haz cambios** en tus archivos localmente

2. **Si usaste GitHub Desktop:**
   - Abre GitHub Desktop
   - Verás tus cambios
   - Escribe un mensaje (ej: "Agregué nuevos platos")
   - Haz clic en "Commit to main"
   - Haz clic en "Push origin"

3. **Si usaste Terminal:**
   ```bash
   cd "/Users/neuromindaiyoutubeus/Desktop/CARTA EBANO"
   git add .
   git commit -m "Descripción de tus cambios"
   git push
   ```

4. **Vercel se actualiza automáticamente** ✨
   - En 1-2 minutos verás los cambios en tu URL
   - No necesitas hacer nada más

---

## 🎯 CONFIGURAR DOMINIO PERSONALIZADO (OPCIONAL)

Si quieres una URL más bonita como `carta.miradorebano.com`:

1. **En el dashboard de Vercel**, haz clic en tu proyecto

2. **Ve a "Settings"** → **"Domains"**

3. **Agrega tu dominio:**
   - Escribe: `carta.miradorebano.com` (o el que prefieras)
   - Vercel te dará instrucciones para configurar DNS

4. **Sigue las instrucciones** para configurar en tu proveedor de dominio

---

## ⚠️ SOLUCIÓN DE PROBLEMAS

### Problema: "Repository not found"
**Solución:** Asegúrate de que el repositorio sea **Public** o que hayas dado permisos a Vercel

### Problema: "Build failed"
**Solución:** 
- Verifica que `index.html` esté en la raíz
- Revisa que `vercel.json` esté correcto
- Revisa los logs en Vercel para ver el error específico

### Problema: "Las imágenes no se ven"
**Solución:**
- Verifica que las rutas sean relativas (sin `/` al inicio)
- Asegúrate de que todas las fotos estén en `fotos-ebano/`

### Problema: "Error al hacer push"
**Solución:**
- Si usas Terminal, verifica tu Personal Access Token
- Si usas GitHub Desktop, cierra y vuelve a abrir

---

## ✅ CHECKLIST FINAL

Antes de considerar que terminaste:

- [ ] ✅ Proyecto subido a GitHub
- [ ] ✅ Repositorio visible en GitHub.com
- [ ] ✅ Proyecto conectado en Vercel
- [ ] ✅ Deploy exitoso
- [ ] ✅ URL funcionando
- [ ] ✅ Probé la carta en mi celular
- [ ] ✅ Todas las imágenes se ven
- [ ] ✅ Todas las funcionalidades funcionan

---

## 🎉 ¡LISTO!

Tu carta está ahora:
- ✅ En GitHub (control de versiones)
- ✅ En Vercel (online y accesible)
- ✅ Con actualizaciones automáticas
- ✅ Lista para compartir

**¿Necesitas ayuda con algún paso?** ¡Pregunta! 😊

---

## 📞 RECURSOS ÚTILES

- **GitHub:** https://github.com
- **Vercel:** https://vercel.com
- **GitHub Desktop:** https://desktop.github.com
- **Documentación Vercel:** https://vercel.com/docs

---

**¡Felicitaciones por llevar tu carta digital a internet! 🚀**
