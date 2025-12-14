# 🚀 GUÍA: Subir la Carta a Vercel (GRATIS)

## ¿Qué es Vercel?
Vercel es una plataforma que te permite subir tu sitio web de forma gratuita y obtener una URL para compartir tu carta.

---

## 📋 PASO A PASO (5 minutos)

### PASO 1: Crear cuenta en Vercel

1. **Abre tu navegador** y ve a:
   ```
   https://vercel.com
   ```

2. **Haz clic en "Sign Up"** (Registrarse)

3. **Elige cómo registrarte:**
   - ✅ Opción más fácil: **"Continue with GitHub"** (si tienes cuenta GitHub)
   - ✅ O **"Continue with Email"** (con tu email)

4. **Completa el registro**

---

### PASO 2: Subir tu proyecto (MÉTODO MÁS FÁCIL)

#### Opción A: Arrastrar y soltar (Drag & Drop) ⭐ RECOMENDADO

1. **Una vez dentro de Vercel**, verás el dashboard

2. **Haz clic en "Add New..."** → **"Project"**

3. **En la pantalla de crear proyecto:**
   - Verás opciones para conectar repositorios
   - **NO necesitas GitHub** - busca la opción que dice **"Deploy"** o desplázate abajo

4. **Método alternativo directo:**
   - Ve directamente a: https://vercel.com/new
   - Arrastra y suelta la carpeta completa **"CARTA EBANO"**
   - O haz clic en **"Browse"** y selecciona la carpeta

5. **Vercel detectará automáticamente:**
   - Framework: "Other" (está bien, es HTML estático)
   - Build Command: (déjalo vacío, no necesitas build)
   - Output Directory: (déjalo vacío o pon ".")

6. **Haz clic en "Deploy"**

7. **Espera 1-2 minutos** mientras Vercel sube tu sitio

8. **¡Listo!** Te dará una URL como:
   ```
   https://carta-ebano-xxxxx.vercel.app
   ```

---

#### Opción B: Con GitHub (Más profesional, recomendado a largo plazo)

**Si quieres actualizar la carta fácilmente después:**

1. **Crea cuenta en GitHub** (si no tienes): https://github.com

2. **Crea un nuevo repositorio:**
   - Haz clic en "+" → "New repository"
   - Nombre: `carta-ebano` (o el que prefieras)
   - Selecciona "Public" o "Private"
   - **NO marques** "Initialize with README"
   - Haz clic en "Create repository"

3. **Sube tus archivos a GitHub:**
   - Descarga GitHub Desktop (https://desktop.github.com) - ES MÁS FÁCIL
   - O usa estos comandos en la terminal:
   ```bash
   cd "/Users/neuromindaiyoutubeus/Desktop/CARTA EBANO"
   git init
   git add .
   git commit -m "Primera versión de la carta"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/carta-ebano.git
   git push -u origin main
   ```

4. **En Vercel:**
   - Haz clic en "Add New..." → "Project"
   - Selecciona tu repositorio de GitHub
   - Haz clic en "Import"
   - Deja la configuración por defecto
   - Haz clic en "Deploy"

---

### PASO 3: Configurar dominio personalizado (OPCIONAL)

**Si quieres una URL más bonita como `carta.miradorebano.com`:**

1. **En el dashboard de Vercel**, haz clic en tu proyecto

2. **Ve a "Settings"** → **"Domains"**

3. **Agrega tu dominio:**
   - Si tienes dominio: `carta.miradorebano.com`
   - Vercel te dará instrucciones para configurar DNS

4. **Si NO tienes dominio**, puedes comprar uno:
   - Vercel tiene integración con Namecheap, Google Domains, etc.
   - O compra en cualquier lugar y agrégalo aquí

---

### PASO 4: Configuración importante

**Antes de subir, revisa que tu `index.html` tenga:**

1. ✅ URLs relativas (no absolutas a localhost)
2. ✅ Meta tags correctos
3. ✅ Todas las imágenes en carpetas correctas

**Ya está todo listo en tu proyecto** ✅

---

## 🔄 ACTUALIZAR LA CARTA DESPUÉS

### Si usaste Drag & Drop:
- Tendrás que subir de nuevo arrastrando la carpeta

### Si usaste GitHub (RECOMENDADO):
1. Haz cambios en tus archivos
2. Sube los cambios a GitHub (git push)
3. **Vercel actualiza automáticamente** ✨

---

## 📱 COMPARTIR TU CARTA

Una vez desplegada, tendrás una URL como:
```
https://carta-ebano-xxxxx.vercel.app
```

**Puedes:**
- ✅ Compartirla en WhatsApp
- ✅ Ponerla en el perfil de Instagram
- ✅ Compartirla en Facebook
- ✅ Imprimirla como QR Code

---

## ⚙️ CONFIGURACIÓN AVANZADA (OPCIONAL)

Si necesitas configurar algo especial, crea un archivo `vercel.json` en la raíz:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

**Pero normalmente NO es necesario** - Vercel detecta HTML estático automáticamente.

---

## ✅ CHECKLIST PRE-SUBIDA

- [ ] Revisé que todas las imágenes están en sus carpetas
- [ ] Probé la carta localmente (localhost:8000)
- [ ] Todo funciona correctamente
- [ ] Creé cuenta en Vercel
- [ ] Subí el proyecto
- [ ] Probé la URL que me dio Vercel

---

## 🆘 PROBLEMAS COMUNES

### Las imágenes no se ven
- **Solución**: Verifica que las rutas de imágenes sean relativas (no absolutas)
- Ejemplo correcto: `fotos/recomendados/foto1.jpg`
- Ejemplo incorrecto: `http://localhost:8000/fotos/...`

### Error al desplegar
- **Solución**: Asegúrate de que el archivo `index.html` esté en la raíz de la carpeta
- Vercel necesita que `index.html` sea el archivo principal

### La página se ve en blanco
- **Solución**: Abre la consola del navegador (F12) y revisa errores
- Verifica que todos los archivos se subieron correctamente

---

## 🎉 ¡LISTO!

Una vez subida, tu carta estará disponible 24/7 en internet y podrás compartirla con todos tus clientes.

**¿Necesitas ayuda con algún paso?** ¡Pregunta! 😊

