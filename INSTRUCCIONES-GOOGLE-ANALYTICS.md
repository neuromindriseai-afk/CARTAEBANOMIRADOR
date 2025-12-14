# 📊 INSTRUCCIONES PARA ACTIVAR GOOGLE ANALYTICS

## Paso 1: Crear cuenta de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una cuenta (si no tienes una)
3. Crea una propiedad para "Mirador Restaurante Ébano"
4. Obtén tu **Measurement ID** (formato: `G-XXXXXXXXXX`)

## Paso 2: Activar en la carta

1. Abre el archivo `index.html`
2. Busca el comentario que dice:
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

3. Reemplaza `G-XXXXXXXXXX` con tu Measurement ID real
4. **Descomenta** el código (quita los `<!--` y `-->`)

## Paso 3: Eventos que se trackean automáticamente

La carta ya está preparada para trackear:

- ✅ **Vista de categoría**: Cuando un usuario ve una categoría
- ✅ **Descarga PDF**: Cuando alguien descarga el PDF
- ✅ **Compartir carta**: Cuando alguien comparte la carta

## Paso 4: Verificar que funciona

1. Activa Google Analytics
2. Abre la carta en tu navegador
3. Navega por categorías, descarga PDF, comparte
4. Ve a Google Analytics → Tiempo Real → Eventos
5. Deberías ver los eventos apareciendo

---

**Nota**: Los eventos aparecerán con un pequeño delay (1-2 minutos) en el reporte en tiempo real.

