# 📊 GUÍA COMPLETA: Instalar Google Analytics en la Carta

## ❓ ¿Necesitas comprar dominio?

**¡NO!** Google Analytics funciona en:
- ✅ `localhost` (para desarrollo)
- ✅ Dominios gratuitos (GitHub Pages, Netlify, etc.)
- ✅ Dominios pagos (tu propio dominio)
- ✅ Cualquier URL que tengas

---

## 📋 PASO A PASO COMPLETO

### PASO 1: Crear cuenta de Google Analytics

1. **Ve a Google Analytics**
   - Abre tu navegador
   - Ve a: https://analytics.google.com/
   - Inicia sesión con tu cuenta de Gmail (la que uses para el restaurante)

2. **Crear cuenta (si no tienes una)**
   - Si es la primera vez, verás un botón "Comenzar a medir"
   - Haz clic en "Comenzar a medir"

3. **Configurar la cuenta**
   - **Nombre de cuenta**: `Mirador Restaurante Ébano` (o el que prefieras)
   - ✅ Acepta los términos y condiciones
   - Haz clic en "Siguiente"

4. **Crear propiedad**
   - **Nombre de propiedad**: `Carta Digital Ébano`
   - **Zona horaria**: Selecciona `(GMT-05:00) Bogotá, Lima, Quito`
   - **Moneda**: `Colombian Peso (COP)`
   - Haz clic en "Siguiente"

5. **Información del negocio**
   - **Industria**: `Restaurantes y Alimentos`
   - **Tamaño del negocio**: Elige el que corresponda
   - Haz clic en "Siguiente"

6. **Objetivos del negocio**
   - Marca las opciones que te interesen (recomiendo todas)
   - Haz clic en "Crear"

7. **Aceptar términos**
   - Lee y acepta los términos
   - Haz clic en "Acepto"

---

### PASO 2: Obtener tu Measurement ID

1. **Después de crear la propiedad**, verás una pantalla de "Configurar un flujo de datos"
2. **Selecciona "Web"**
3. **Configura el flujo de datos web:**
   - **URL del sitio web**: 
     - Si es localhost: `http://localhost:8000`
     - Si es un dominio: `https://tudominio.com`
   - **Nombre del flujo de datos**: `Carta Digital Ébano`
   - Haz clic en "Crear flujo"

4. **¡AQUÍ ESTÁ TU MEASUREMENT ID!**
   - Verás algo como: `G-XXXXXXXXXX`
   - **COPIA ESTE ID** (lo necesitarás en el siguiente paso)

---

### PASO 3: Activar Google Analytics en tu carta

1. **Abre el archivo `index.html`** en tu editor

2. **Busca esta sección** (está alrededor de la línea 85-95):
```html
    <!-- Google Analytics (reemplazar con tu ID real) -->
    <!-- 
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    </script>
    -->
```

3. **Reemplaza `G-XXXXXXXXXX` con TU Measurement ID**
   - Ejemplo: Si tu ID es `G-ABC123XYZ`, reemplázalo en AMBOS lugares

4. **QUITA los comentarios** (`<!--` y `-->`)
   - Debe quedar así (con TU ID):
```html
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ABC123XYZ');
    </script>
```

5. **Guarda el archivo**

---

### PASO 4: Verificar que funciona

1. **Abre la carta en tu navegador**
   - Ve a `http://localhost:8000/index.html`

2. **Abre la Consola del navegador**:
   - Chrome/Edge: `F12` o `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
   - Ve a la pestaña "Console"
   - No deberías ver errores rojos relacionados con Google Analytics

3. **Ve a Google Analytics**
   - Vuelve a https://analytics.google.com/
   - En el menú izquierdo, haz clic en **"Informes"** → **"Tiempo real"**
   - Navega por tu carta (cambia categorías, descarga PDF, comparte)
   - **Espera 1-2 minutos**
   - Deberías ver visitantes en tiempo real aparecer en el gráfico

---

## ✅ EVENTOS QUE SE TRACKEAN AUTOMÁTICAMENTE

Tu carta ya está preparada para trackear estos eventos:

1. **Vista de categoría**: Cuando alguien ve una categoría
   - Se registra automáticamente al cambiar de pestaña

2. **Descarga PDF**: Cuando alguien descarga el PDF
   - Se registra al hacer clic en el botón "📄 PDF"

3. **Compartir carta**: Cuando alguien comparte la carta
   - Se registra al hacer clic en el botón "🔗 Compartir"

---

## 📊 CÓMO VER LOS DATOS

### Tiempo Real (inmediato)
1. Ve a **Informes** → **Tiempo real**
2. Verás visitantes activos en este momento

### Eventos
1. Ve a **Informes** → **Tiempo real** → **Eventos**
2. Verás los eventos que se están registrando

### Reportes completos (después de 24-48 horas)
1. Ve a **Informes** → **Adquisición** o **Compromiso**
2. Aquí verás datos completos históricos

---

## 🆓 OPCIONES DE HOSTING GRATIS (si quieres ponerla online)

### Opción 1: GitHub Pages (GRATIS)
1. Crea cuenta en GitHub.com
2. Crea un repositorio
3. Sube tus archivos
4. Activa GitHub Pages
5. Tu carta estará en: `tuusuario.github.io/nombre-repositorio`

### Opción 2: Netlify (GRATIS)
1. Ve a netlify.com
2. Arrastra tu carpeta
3. ¡Listo! Te da una URL gratis

### Opción 3: Vercel (GRATIS)
1. Ve a vercel.com
2. Conecta tu repositorio o sube archivos
3. URL gratis automática

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### Problema: No veo datos en tiempo real
**Solución:**
- Espera 1-2 minutos (hay un pequeño delay)
- Recarga la página de Analytics
- Asegúrate de que el código esté correctamente instalado (sin comentarios)

### Problema: Veo errores en la consola
**Solución:**
- Verifica que copiaste bien el Measurement ID
- Asegúrate de que no haya espacios extra
- Verifica que quitaste los comentarios `<!--` y `-->`

### Problema: El código no carga
**Solución:**
- Verifica tu conexión a internet
- Prueba abrir la URL del script directamente en el navegador

---

## 📝 CHECKLIST FINAL

- [ ] Creé cuenta en Google Analytics
- [ ] Creé propiedad y obtuve Measurement ID
- [ ] Reemplacé `G-XXXXXXXXXX` con mi ID real
- [ ] Quité los comentarios del código
- [ ] Guardé el archivo index.html
- [ ] Abrí la carta y verifiqué que no hay errores
- [ ] Vi datos en tiempo real en Google Analytics

---

## 🎉 ¡LISTO!

Una vez que completes estos pasos, Google Analytics estará funcionando y podrás:
- Ver cuántas personas visitan tu carta
- Saber qué categorías son más populares
- Medir cuántas descargas de PDF hay
- Ver cómo comparten tu carta

**¿Necesitas ayuda con algún paso específico?** ¡Pregunta!

