# 🚀 GUÍA PASO A PASO: Instalar Google Analytics

## ❌ NO necesitas comprar dominio

Google Analytics funciona perfectamente en:
- ✅ `localhost` (tu computadora)
- ✅ Dominios gratuitos (GitHub Pages, Netlify)
- ✅ Cualquier URL que tengas

---

## 📝 PASO A PASO (5 minutos)

### PASO 1: Crear cuenta en Google Analytics

1. **Abre tu navegador** y ve a:
   ```
   https://analytics.google.com
   ```

2. **Inicia sesión** con tu cuenta de Gmail (la del restaurante)

3. **Si es primera vez**, verás "Comenzar a medir" → Haz clic

4. **Llena el formulario:**
   - **Nombre de cuenta**: `Mirador Restaurante Ébano`
   - **País**: Colombia
   - ✅ Marca las opciones de compartir datos
   - Haz clic en **"Siguiente"**

---

### PASO 2: Crear propiedad

1. **Nombre de propiedad**: `Carta Digital Ébano`
2. **Zona horaria**: `(GMT-05:00) Bogotá, Lima, Quito`
3. **Moneda**: `Colombian Peso (COP)`
4. Haz clic en **"Siguiente"**

5. **Información del negocio:**
   - **Industria**: `Restaurantes y Alimentos`
   - **Tamaño**: Elige el que corresponda
   - Haz clic en **"Siguiente"**

6. **Objetivos**: Marca todos (o los que quieras)
7. Haz clic en **"Crear"**
8. **Acepta los términos** → Haz clic en **"Acepto"**

---

### PASO 3: Configurar flujo de datos web

1. Verás "Configurar un flujo de datos"
2. Haz clic en **"Web"** (el botón azul)

3. **Llena el formulario:**
   - **URL del sitio web**: 
     - Si es localhost: `http://localhost:8000`
     - Si tienes dominio: `https://tudominio.com`
   - **Nombre del flujo**: `Carta Digital Ébano`
   - Haz clic en **"Crear flujo"**

---

### PASO 4: Copiar tu Measurement ID ⭐

**¡ESTE ES EL PASO MÁS IMPORTANTE!**

1. Después de crear el flujo, verás una pantalla con tu **Measurement ID**
2. **Se ve así**: `G-ABC123XYZ` (pero con letras y números diferentes)
3. **COPIA ESTE ID COMPLETO** (empieza con G-)
   - Puedes hacer clic en el botón de copiar 📋
   - O seleccionarlo y copiar manualmente (Ctrl+C / Cmd+C)

**✅ GUARDA ESTE ID, LO NECESITARÁS EN EL SIGUIENTE PASO**

---

### PASO 5: Pegar el ID en tu carta

1. **Abre el archivo `index.html`** en tu editor de código

2. **Busca esta línea** (está alrededor de la línea 88):
   ```html
   <!-- Google Analytics (reemplazar con tu ID real) -->
   ```

3. **Encuentra este código** (está comentado):
   ```html
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

4. **REEMPLAZA `G-XXXXXXXXXX` con TU ID** en DOS lugares:
   - En la primera línea: `<script async src="...id=TU-ID-AQUI">`
   - En la última línea: `gtag('config', 'TU-ID-AQUI');`

5. **QUITA los comentarios** `<!--` y `-->`

6. **Debería quedar así** (ejemplo con ID ficticio):
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

7. **GUARDA el archivo** (Ctrl+S / Cmd+S)

---

### PASO 6: Verificar que funciona

1. **Abre tu carta en el navegador:**
   - Ve a `http://localhost:8000/index.html`

2. **Abre las herramientas de desarrollador:**
   - Presiona `F12` (o `Ctrl+Shift+I` en Windows / `Cmd+Option+I` en Mac)
   - Ve a la pestaña **"Console"**
   - No deberías ver errores rojos

3. **Ve a Google Analytics:**
   - Vuelve a https://analytics.google.com/
   - En el menú izquierdo: **Informes** → **Tiempo real**
   - **Navega por tu carta** (cambia categorías, descarga PDF)
   - **Espera 1-2 minutos**
   - Deberías ver **"1 usuario activo"** o más

---

## ✅ ¡LISTO!

Ahora Google Analytics está funcionando. Puedes ver:
- ✅ Cuántas personas visitan tu carta
- ✅ Qué categorías son más populares
- ✅ Cuántos PDFs se descargan
- ✅ Cuántas veces se comparte la carta

---

## 🆘 PROBLEMAS COMUNES

### No veo datos después de 5 minutos
- **Revisa**: ¿Quitaste los comentarios `<!--` y `-->`?
- **Revisa**: ¿Copiaste bien el ID completo (incluye G-)?
- **Revisa**: ¿Guardaste el archivo?

### Veo errores en la consola
- **Revisa**: Que el ID no tenga espacios extra
- **Revisa**: Que ambos IDs (las dos veces que aparece) sean iguales

### ¿Necesitas ayuda?
¡Pregúntame y te ayudo! 😊

---

## 🌐 BONUS: Opciones para poner tu carta online (GRATIS)

Si más adelante quieres ponerla online sin comprar dominio:

### GitHub Pages (100% gratis)
1. Crea cuenta en github.com
2. Crea repositorio
3. Sube tus archivos
4. Activa Pages en Settings
5. URL gratis: `tuusuario.github.io/nombre-carta`

### Netlify (100% gratis)
1. Ve a netlify.com
2. Arrastra tu carpeta completa
3. ¡Listo! URL gratis automática

