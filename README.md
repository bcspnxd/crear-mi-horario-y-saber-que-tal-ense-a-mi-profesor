# Horario Claro — Landing page

Página pública de presentación del proyecto. Es 100% estática (HTML, CSS y
un poco de JS decorativo), pensada para publicarse en **GitHub Pages** y
enlazar hacia la aplicación real, que corre en **Google Cloud Run**.

Esta página **no contiene** lógica de horarios, profesores, Firebase ni
autenticación. Solo presenta el proyecto y tiene un botón que lleva a la
aplicación.

---

## 1. Estructura del proyecto

```
landing/
├── index.html          → página principal (todo el contenido y el SEO)
├── css/
│   └── styles.css      → estilos visuales
├── js/
│   └── script.js       → solo detalles menores (año del footer)
├── icons/
│   ├── favicon.svg
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── icon-512.png
├── assets/
│   └── og-image.png    → imagen que se muestra al compartir el link
├── robots.txt           → indica a Google que puede indexar la página
├── sitemap.xml           → mapa del sitio para buscadores
├── site.webmanifest       → metadatos del ícono/PWA
└── .nojekyll              → evita que GitHub procese la página con Jekyll
```

No necesitas instalar nada para verla: puedes abrir `index.html` en el
navegador directamente, o usar la extensión **Live Server** de VS Code
para verla con recarga automática mientras la editas.

---

## 2. Lo único que debes personalizar antes de publicar

### A) La URL de tu aplicación en Cloud Run

El botón de la landing apunta a un valor de ejemplo. Debes reemplazarlo por
la URL real de tu app.

**BUSCA** (aparece 3 veces en `index.html`):
```
https://TU-APP.a.run.app
```

**REEMPLAZA CON** tu URL real, por ejemplo:
```
https://mi-app-horarios-xyz123-uc.a.run.app
```

Cómo hacerlo en VS Code:
1. Abre `index.html`.
2. Presiona `Ctrl+H` (Windows/Linux) o `Cmd+H` (Mac) para abrir "Buscar y reemplazar".
3. En el campo de búsqueda escribe: `https://TU-APP.a.run.app`
4. En el campo de reemplazo pega tu URL real de Cloud Run.
5. Haz clic en "Reemplazar todo" (icono de las dos flechas).

### B) La URL de tu GitHub Pages (para el SEO)

Una vez que sepas cómo quedará tu URL de GitHub Pages (paso 3), reemplaza
en `index.html`, `robots.txt` y `sitemap.xml`:

**BUSCA:**
```
https://tu-usuario.github.io/tu-repositorio/
```

**REEMPLAZA CON** tu URL real, por ejemplo:
```
https://joseperez.github.io/horario-claro/
```

Usa el mismo `Ctrl+H` en cada archivo (`index.html`, `robots.txt`,
`sitemap.xml`) y dale "Reemplazar todo".

> Si vas a usar un dominio propio (por ejemplo `horarioclaro.com`) en vez
> de la URL de github.io, usa ese dominio en su lugar y revisa la sección
> "Dominio propio" más abajo.

### C) El nombre del proyecto (opcional)

Si quieres cambiar el nombre "Horario Claro" por el nombre real de tu
proyecto, busca y reemplaza "Horario Claro" en `index.html`.

---

## 3. Publicar en GitHub Pages (paso a paso, desde cero)

### Paso 1 — Crear el repositorio en GitHub
1. Entra a [github.com](https://github.com) y crea una cuenta si no tienes.
2. Haz clic en **New repository** (Nuevo repositorio).
3. Ponle un nombre, por ejemplo `horario-claro`.
4. Déjalo en **Public** (debe ser público para que GitHub Pages sea gratuito).
5. Haz clic en **Create repository**.

### Paso 2 — Subir esta carpeta con VS Code
1. Abre VS Code.
2. Ve a **File → Open Folder** y selecciona esta carpeta (`landing`).
3. Abre la terminal integrada: **Terminal → New Terminal**.
4. Ejecuta estos comandos uno por uno (reemplaza la URL del repositorio
   por la tuya, la encuentras en la página de tu repositorio, botón verde **Code**):

```bash
git init
git add .
git commit -m "Landing page inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Si es la primera vez que usas Git, te pedirá iniciar sesión con tu cuenta
de GitHub: sigue las instrucciones en pantalla.

### Paso 3 — Activar GitHub Pages
1. En GitHub, entra a tu repositorio.
2. Ve a **Settings → Pages** (en el menú de la izquierda).
3. En "Build and deployment" → "Source", elige **Deploy from a branch**.
4. En "Branch", elige `main` y la carpeta `/ (root)`.
5. Haz clic en **Save**.
6. Espera uno o dos minutos y recarga la página. GitHub mostrará la URL
   pública, algo como:
   ```
   https://tu-usuario.github.io/tu-repositorio/
   ```

Esa es la URL que debes usar en el paso 2B de este documento (SEO) y la
que puedes compartir como la cara pública del proyecto.

### Paso 4 — Pedirle a Google que la indexe (opcional, pero recomendado)
1. Entra a [Google Search Console](https://search.google.com/search-console).
2. Agrega tu URL de GitHub Pages como propiedad.
3. Verifica la propiedad (Search Console te da instrucciones, por ejemplo
   con una etiqueta HTML o el archivo `sitemap.xml`).
4. Envía tu `sitemap.xml` (la URL completa, por ejemplo
   `https://tu-usuario.github.io/tu-repositorio/sitemap.xml`) en la sección
   "Sitemaps".
5. Google puede tardar desde algunas horas hasta unos días en indexar la
   página.

---

## 4. Dominio propio (opcional)

Si más adelante compras un dominio (por ejemplo `horarioclaro.com`) y
quieres usarlo en vez de `tu-usuario.github.io`:

1. Crea un archivo llamado `CNAME` (sin extensión) dentro de esta misma
   carpeta, con una sola línea de contenido: tu dominio, por ejemplo:
   ```
   horarioclaro.com
   ```
2. Configura en tu proveedor de dominio los registros DNS que GitHub
   Pages indica en su documentación oficial ("Managing a custom domain
   for your GitHub Pages site").
3. Actualiza también la URL canónica y las etiquetas Open Graph en
   `index.html`, además de `robots.txt` y `sitemap.xml`, para que usen tu
   nuevo dominio.

---

## 5. Cómo hacer cambios después de publicar

Cada vez que edites algo (por ejemplo el texto o la URL de Cloud Run):

1. Guarda los archivos en VS Code.
2. En la terminal, ejecuta:
   ```bash
   git add .
   git commit -m "Describe aquí tu cambio"
   git push
   ```
3. GitHub Pages actualiza el sitio automáticamente en uno o dos minutos.

---

## 6. Checklist final antes de compartir el link

- [ ] Reemplacé `https://TU-APP.a.run.app` por la URL real de Cloud Run (3 lugares en `index.html`).
- [ ] Reemplacé `https://tu-usuario.github.io/tu-repositorio/` por mi URL real de GitHub Pages en `index.html`, `robots.txt` y `sitemap.xml`.
- [ ] Activé GitHub Pages en Settings → Pages.
- [ ] Abrí la URL pública y probé el botón "Crear mi horario" / "Ir a la plataforma".
- [ ] Probé la página en el celular (o achicando la ventana del navegador).
- [ ] (Opcional) Envié el sitemap a Google Search Console.
