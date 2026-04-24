

image.png
950×971

image.png
946×945

image.png
943×988

image.png
1280×588

image.png
1280×552
ayudame como diseñador web experto especialiado en frontend y marketing para emprendedores del aera del deporte.
este cliente tiene un club de ciclismo, vende ropa y articulos de ciclismo y ademas organiza carreras.
El suele vender via instagram, facebook y whatsapp, sus carreras las publica con afiches en las redes sociales, la inscripcion y cobro de las entradas era basicamente manual, papel y lapiz
Pero nos ha pedido un sitio web para su formulario de inscripcion. Comenzóese proyecto de conexion con getnet con otro desarrollador, quien uso wordpress y woocomerce. Esa conexion ya esta hecha y nosotros logramos incorporarla a nuestra version del sitio en react.
Solo nos resta embellecer y potenciar el sitio donde va el formulario.
El me paso dos afiches que tienen la informacion relevante del evento y ademas este mensaje pauteado de whatsapp:

🚴‍♂️ Premios y Beneficios Clásica CVBK/Virtual/2026

Este año la CVBK / Virtual Bike viene con todo 🔥
Prepárate para una experiencia completa, llena de premios, competencia y buen ambiente.

🏆 Premiación por categoría

* Tricota de Champion para cada categoría
* Trofeo virtual 🥇 al 1er lugar
* Medallones para los 5 primeros lugares
* Medallón Finisher para los 200 Primeros inscritos 
* ⁠ para todos los participantes

🚩 Competencia y dinámicas

* 3 metas volantes por grupo con premios en dinero 💰 y sorpresas virtuales
* Sistema de foto finish para resultados precisos

🎁 Sorteos y premios especiales

* Sorteos de productos Virtual y auspiciadores
* 🚲 1 bicicleta Mini CIC
* Conjunto Virtual de alta calidad a elección
* Porta bolso de ruedas Double
* Regalos de Fundax
* Regalos de Vittoria

🎥 Experiencia incluida

* Fotos y videos GRATIS para todos los participantes
* Cobertura audiovisual del evento

🎉 Ambiente del evento

* Locutor en vivo 🎤
* DJ para animación 🎶
* Vasos oficiales CVBK / Virtual

🍽️ Tercer tiempo
Disfruta un cierre como corresponde:

* Frutas 🍌
* Agua 💧
* Pan y pastelitos 🥐
* Un ambiente agradable para compartir
--------------------------
mensaje que use para construir esas secciones que ves abajo luego del formulario....

Este fue mi primer intento, se lo mostré, le gustó, pero siente lo mismo que yo.
Aqui el protagonista debe ser el formulario y boton de pago, ayudame a potenciar y mejorar el sitio de la mejor manera posible, queremos algo lo mas vivo y activo posible.
lo que no tocaria eso si, es la primera seccion con el carrrousel de imagenes y el contador en eversa para la fecha, quiza si quieres agregarle algo pequeño, perfecto, pero no modificarlo bruscamente. Ya para abajo, te dejo entera libertad para lograr el cometido, que es potenciar formulario e informacion del dia de carrera
Show less
Bash List project root files
IN
ls -la /home/seb/proyectos_web/virtual-bike-landing/

OUT
Exit code 2
ls: cannot access '/home/seb/proyectos_web/virtual-bike-landing/': No such file or directory
Bash List project root files via UNC path
IN
ls -la "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing" 2>&1 | head -40

OUT
total 132
drwxr-xr-x   7 sebas 197609      0 Apr 22 21:43 .
drwxr-xr-x   5 sebas 197609      0 Apr 22 21:57 ..
-rw-r--r--   1 sebas 197609    253 Apr 22 15:01 .gitignore
-rw-r--r--   1 sebas 197609   1027 Apr 22 15:01 README.md
-rw-r--r--   1 sebas 197609   3959 Apr 22 21:43 cvbk-inscripcion.php
drwxr-xr-x   6 sebas 197609      0 Apr 22 21:08 dist
-rw-r--r--   1 sebas 197609    758 Apr 22 15:01 eslint.config.js
-rw-r--r--   1 sebas 197609    866 Apr 22 15:27 index.html
drwxr-xr-x 134 sebas 197609      0 Apr 22 15:10 node_modules
-rw-r--r--   1 sebas 197609 102410 Apr 22 15:03 package-lock.json
-rw-r--r--   1 sebas 197609    710 Apr 22 15:03 package.json
drwxr-xr-x   4 sebas 197609      0 Apr 22 16:09 proyectos de referencia
drwxr-xr-x   5 sebas 197609      0 Apr 22 15:23 public
drwxr-xr-x   4 sebas 197609      0 Apr 22 18:59 src
-rw-r--r--   1 sebas 197609    218 Apr 22 17:46 vite.config.js
Bash List src directory
IN
ls -la "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing\\src" 2>&1

OUT
total 16
drwxr-xr-x 4 sebas 197609    0 Apr 22 18:59 .
drwxr-xr-x 7 sebas 197609    0 Apr 22 21:43 ..
-rw-r--r-- 1 sebas 197609 2891 Apr 22 15:01 App.css
-rw-r--r-- 1 sebas 197609  530 Apr 22 18:59 App.jsx
drwxr-xr-x 2 sebas 197609    0 Apr 22 16:45 assets
drwxr-xr-x 2 sebas 197609    0 Apr 22 21:04 components
-rw-r--r-- 1 sebas 197609  352 Apr 22 15:28 index.css
-rw-r--r-- 1 sebas 197609  229 Apr 22 15:01 main.jsx
Bash List components, assets, public
IN
ls -la "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing\\src\\components" "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing\\src\\assets" "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing\\public" 2>&1

OUT
\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\public:
total 196
drwxr-xr-x 5 sebas 197609      0 Apr 22 15:23 .
drwxr-xr-x 7 sebas 197609      0 Apr 22 21:43 ..
drwxr-xr-x 2 sebas 197609      0 Apr 22 15:23 Carreras
drwxr-xr-x 2 sebas 197609      0 Apr 22 15:23 Equipo
drwxr-xr-x 2 sebas 197609      0 Apr  6 21:09 Tienda
-rw-r--r-- 1 sebas 197609 111908 Apr  6 20:32 colores marca.jpg
-rw-r--r-- 1 sebas 197609     25 Apr 22 15:23 colores marca.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609   9522 Apr 22 15:01 favicon.svg
-rw-r--r-- 1 sebas 197609  44919 Apr  6 15:39 hero.png
-rw-r--r-- 1 sebas 197609     25 Apr 22 15:23 hero.png:Zone.Identifier
-rw-r--r-- 1 sebas 197609   5031 Apr 22 15:01 icons.svg
-rw-r--r-- 1 sebas 197609   5808 Apr  6 20:29 logo.jpg
-rw-r--r-- 1 sebas 197609     25 Apr 22 15:23 logo.jpg:Zone.Identifier

\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\assets:
total 9108
drwxr-xr-x 2 sebas 197609       0 Apr 22 16:45 .
drwxr-xr-x 4 sebas 197609       0 Apr 22 18:59 ..
-rw-r--r-- 1 sebas 197609  348752 Apr 22 15:35 clasica1.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica1.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609  205009 Apr 22 16:46 clasica2.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica2.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609 5290888 Apr 22 16:45 clasica2.orig.jpg
-rw-r--r-- 1 sebas 197609  182412 Apr 22 16:46 clasica3.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica3.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609 2802157 Apr 22 16:45 clasica3.orig.jpg
-rw-r--r-- 1 sebas 197609   88960 Apr 22 15:40 clasica4.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica4.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609  116090 Apr 22 15:39 clasica5.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica5.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609  110995 Apr 22 15:41 clasica6.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica6.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609   93355 Apr 22 15:41 clasica7.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica7.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609   13057 Apr 22 15:01 hero.png
-rw-r--r-- 1 sebas 197609    4126 Apr 22 15:01 react.svg
-rw-r--r-- 1 sebas 197609    8709 Apr 22 15:01 vite.svg

\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components:
total 48
drwxr-xr-x 2 sebas 197609    0 Apr 22 21:04 .
drwxr-xr-x 4 sebas 197609    0 Apr 22 18:59 ..
-rw-r--r-- 1 sebas 197609 4395 Apr 22 18:44 Categorias.jsx
-rw-r--r-- 1 sebas 197609 2004 Apr 22 15:36 Footer.jsx
-rw-r--r-- 1 sebas 197609 3998 Apr 22 15:51 Galeria.jsx
-rw-r--r-- 1 sebas 197609 6421 Apr 22 18:51 Hero.jsx
-rw-r--r-- 1 sebas 197609 6993 Apr 22 21:04 Inscripcion.jsx
-rw-r--r-- 1 sebas 197609 3360 Apr 22 15:28 Navbar.jsx
-rw-r--r-- 1 sebas 197609 1317 Apr 22 15:32 Patrocinadores.jsx
-rw-r--r-- 1 sebas 197609 7324 Apr 22 19:55 Premios.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\App.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Hero.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Premios.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Inscripcion.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Navbar.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Patrocinadores.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Footer.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Categorias.jsx
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Galeria.jsx
Entendido. Revisé todo el código (Hero, Premios, Inscripción, Patrocinadores, Footer) y los afiches. Mi diagnóstico del por qué el formulario no se siente protagonista y el plan para corregirlo:

El problema:

El formulario está enterrado después de 6 secciones flip-card de Premios que ocupan 6 pantallazos completos. Cuando el usuario llega al form ya agotó su atención.
Falta toda la info del día de carrera que está en los afiches: horarios por categoría (08:00 acreditación, 09:00/09:20/11:30/11:40 largadas), los premios en dinero escalados por cantidad de participantes (el dato más vendedor del afiche), el circuito.
Los patrocinadores están con emojis — los afiches muestran marcas reales (SHIMANO, CIC, VITTORIA, PROPAINT, BUMP LAB, MUTUAL, DRONEXP, CAVA).
Plan propuesto (de arriba hacia abajo, sin tocar el Hero):

Inscripción justo después del Hero — el form pasa a ser la segunda sección. Lo potenciamos con: columna izquierda con highlights visuales del precio, urgencia ("cupos 200 medallones finisher"), iconos en los beneficios; columna derecha el form más compacto con mejor jerarquía visual.

Nueva sección "Día de carrera" — compacta, con timeline visual de horarios por categoría, circuito (Alto Noviciado, ~40km, 3 giros, 3 metas volantes), e info del contacto. Esta info hoy no existe en el sitio y es crítica.

Nueva sección "Premios en dinero" — tabla/cards visuales con la escala por participantes ($100k → $40k al 1er lugar según cuántos se inscriban). Es el gancho más fuerte del afiche y crea urgencia de que más gente se inscriba.

Premios & Beneficios condensado — los 6 flip-cards actuales los fundimos en un bento-grid de una sola sección (tricota, medallones, sorteos, cobertura, ambiente, tercer tiempo). Pasa de 6 pantallas a 1.

CTA sticky móvil — barra inferior fija con "Inscríbete $40.000 →" que siempre empuja al form.

Patrocinadores con logos reales — placeholder visual (cajas con tipografía limpia) en lugar de emojis, hasta que consigamos los PNGs.

¿Arrancamos con esos 6 puntos en ese orden, o quieres que priorice/descarte algo? Si me das luz verde, empiezo por el #1 (mover y potenciar el formulario) que es el cambio de mayor impacto.

antes de que partas, como levanto localmente este proyecto para revisarlo? porfa no usemos el puerto 5173 5174
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\package.json
Read \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\vite.config.js
Desde WSL (Ubuntu), parado en la carpeta del proyecto:


npm install        # solo la primera vez
npm run dev -- --port 5180
Dos cosas a tener presentes:

Por el base: '/clasica-2026/' en vite.config.js, la URL local NO es http://localhost:5180/ sino http://localhost:5180/clasica-2026/. Si entras a la raíz vas a ver un 404.

Si quieres dejarlo fijo y no tener que escribir -- --port 5180 cada vez, puedes agregarlo a vite.config.js:


export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/clasica-2026/',
  server: { port: 5180, strictPort: true },
})
Con strictPort: true falla en vez de saltar a 5181 si el 5180 está ocupado — así te enteras si hay conflicto en lugar de que mute silencioso.

¿Quieres que lo deje configurado en el vite.config.js o prefieres pasarlo por CLI cuando levantes?


image.png
946×977
no te preocupes ya lo veo
Perfecto, ya estás dentro. Cuando quieras que arranque con el plan, me avisas — sugiero empezar por el #1 (mover y potenciar Inscripción) porque es el cambio de mayor impacto y nos deja la estructura lista para lo demás.

estoy subiendo al folder las fotos de logos de las marcas
Dale, voy pendiente. Cuando termines avísame con el nombre del folder donde las dejaste (o si las subes a public/ o src/assets/) y sus nombres de archivo — los cableo en Patrocinadores y en la nueva sección de día-de-carrera.

listo
Bash List public and assets folders
IN
ls -la "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing\\public" "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing\\src\\assets" 2>&1

OUT
\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\public:
total 196
drwxr-xr-x 5 sebas 197609      0 Apr 22 15:23 .
drwxr-xr-x 7 sebas 197609      0 Apr 24 09:08 ..
drwxr-xr-x 2 sebas 197609      0 Apr 22 15:23 Carreras
drwxr-xr-x 2 sebas 197609      0 Apr 22 15:23 Equipo
drwxr-xr-x 2 sebas 197609      0 Apr  6 21:09 Tienda
-rw-r--r-- 1 sebas 197609 111908 Apr  6 20:32 colores marca.jpg
-rw-r--r-- 1 sebas 197609     25 Apr 22 15:23 colores marca.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609   9522 Apr 22 15:01 favicon.svg
-rw-r--r-- 1 sebas 197609  44919 Apr  6 15:39 hero.png
-rw-r--r-- 1 sebas 197609     25 Apr 22 15:23 hero.png:Zone.Identifier
-rw-r--r-- 1 sebas 197609   5031 Apr 22 15:01 icons.svg
-rw-r--r-- 1 sebas 197609   5808 Apr  6 20:29 logo.jpg
-rw-r--r-- 1 sebas 197609     25 Apr 22 15:23 logo.jpg:Zone.Identifier

\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\assets:
total 9108
drwxr-xr-x 2 sebas 197609       0 Apr 22 16:45 .
drwxr-xr-x 4 sebas 197609       0 Apr 22 18:59 ..
-rw-r--r-- 1 sebas 197609  348752 Apr 22 15:35 clasica1.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica1.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609  205009 Apr 22 16:46 clasica2.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica2.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609 5290888 Apr 22 16:45 clasica2.orig.jpg
-rw-r--r-- 1 sebas 197609  182412 Apr 22 16:46 clasica3.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica3.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609 2802157 Apr 22 16:45 clasica3.orig.jpg
-rw-r--r-- 1 sebas 197609   88960 Apr 22 15:40 clasica4.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica4.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609  116090 Apr 22 15:39 clasica5.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica5.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609  110995 Apr 22 15:41 clasica6.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica6.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609   93355 Apr 22 15:41 clasica7.jpg
-rw-r--r-- 1 sebas 197609      25 Apr 22 15:41 clasica7.jpg:Zone.Identifier
-rw-r--r-- 1 sebas 197609   13057 Apr 22 15:01 hero.png
-rw-r--r-- 1 sebas 197609    4126 Apr 22 15:01 react.svg
-rw-r--r-- 1 sebas 197609    8709 Apr 22 15:01 vite.svg
Globpattern: "\\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\**\*logo*"
Found 28 files
Bash Find logo files in project root
IN
ls -la "\\\\wsl.localhost\\Ubuntu-24.04\\home\\seb\\proyectos_web\\virtual-bike-landing" 2>&1 | grep -i -E "logo|propaint|bump"

OUT
-rw-r--r--   1 sebas 197609  94255 Apr 24 09:06 logo cava.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:06 logo cava.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609  64995 Apr 24 09:08 logo cic.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:08 logo cic.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609 110770 Apr 24 09:06 logo dronexp.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:06 logo dronexp.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609 148686 Apr 24 09:07 logo mutual.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:07 logo mutual.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609  94442 Apr 24 09:07 logo shimano.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:07 logo shimano.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609 120920 Apr 24 09:05 logo virtual 1.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:05 logo virtual 1.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609  76698 Apr 24 09:06 logo virtual redondo.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:06 logo virtual redondo.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609 342781 Apr 24 09:07 logo virtual ropa.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:07 logo virtual ropa.JPEG:Zone.Identifier
-rw-r--r--   1 sebas 197609 106574 Apr 24 09:07 logo vitoria.JPEG
-rw-r--r--   1 sebas 197609     60 Apr 24 09:07 logo vitoria.JPEG:Zone.Identifier
Listo, detecté 9 logos en la raíz del proyecto:

logo shimano.JPEG, logo cic.JPEG, logo vitoria.JPEG, logo mutual.JPEG, logo dronexp.JPEG, logo cava.JPEG
logo virtual 1.JPEG, logo virtual redondo.JPEG, logo virtual ropa.JPEG
Dos cosas antes de seguir:

Faltan dos que aparecen en los afiches: PROPAINT y BUMP LAB. ¿Los puedes subir también o los dejamos fuera del carrusel de auspiciadores por ahora?

Los voy a mover a public/sponsors/ y renombrar sin espacios ni mayúsculas (shimano.jpg, cic.jpg, vittoria.jpg, mutual.jpg, dronexp.jpg, cava.jpg). Vite no permite imports con espacios limpiamente, y tenerlos en public/ los sirve directo sin pasar por el bundler. ¿Procedo?

De los tres "virtual", para distinguirlos: virtual 1 parece el principal rectangular (uso para patrocinador/hero), virtual redondo para navbar/footer, y virtual ropa parece el de la tricota — ¿está bien ese uso o tienes otra idea para cada uno?

esta perfecto tal cual lo dijiste, virtual ropa quiza lo tiramos al footer como una marca extra, propain y bump lab mientras coloquemos almenos el nombre coseguire luego sus logos
Voy a crear public/sponsors/ y mover/renombrar los logos.

Bash Move and rename sponsor logos to public/sponsors
Reason: ah por cierto como te decia esto lo estaba subiendo a worpress, no afecta que creemos esta carpeta?
IN
cd "//wsl.localhost/Ubuntu-24.04/home/seb/proyectos_web/virtual-bike-landing" && mkdir -p public/sponsors && mv "logo shimano.JPEG" public/sponsors/shimano.jpg && mv "logo cic.JPEG" public/sponsors/cic.jpg && mv "logo vitoria.JPEG" public/sponsors/vittoria.jpg && mv "logo mutual.JPEG" public/sponsors/mutual.jpg && mv "logo dronexp.JPEG" public/sponsors/dronexp.jpg && mv "logo cava.JPEG" public/sponsors/cava.jpg && mv "logo virtual 1.JPEG" public/sponsors/virtual.jpg && mv "logo virtual redondo.JPEG" public/sponsors/virtual-round.jpg && mv "logo virtual ropa.JPEG" public/sponsors/virtual-ropa.jpg && rm -f "logo "*.JPEG:Zone.Identifier "logo "*"Zone.Identifier" && ls public/sponsors

No afecta a WordPress. Son mundos separados:

public/sponsors/ vive dentro de este proyecto React. Al hacer npm run build se copia a dist/sponsors/ y termina sirviéndose desde virtual-bike.cl/clasica-2026/sponsors/*.jpg cuando subas el build. No toca ni wp-content/, ni la base de datos, ni el plugin cvbk-inscripcion.php.
WordPress tiene su propio /wp-content/uploads/ que vive en otra parte del servidor. Crear carpetas acá no choca con nada de allá.
La única pregunta real es dónde prefieres que terminen las imágenes en producción:

Bundle con React (lo que iba a hacer): los logos viajan con el build de /clasica-2026/. Autocontenido, rápido, no depende de WP. Si algún día migras fuera de WP, siguen funcionando. Recomendado.
Usar URLs de WordPress: si ya los subiste a la biblioteca de medios de WP, puedo apuntar a https://virtual-bike.cl/wp-content/uploads/... directamente. Evita duplicar archivos pero acopla la landing al WP.
¿Procedo con la opción 1 (crear public/sponsors/ y mover)?


image.png
943×875
a esto me referia, aque hago cambios localmente, los pruebo y luego copio la carpeta dist en el worpress
Ah perfecto, ahora lo entiendo bien. El flujo es:


local: public/sponsors/*.jpg
  ↓ npm run build
dist/sponsors/*.jpg
  ↓ subes dist vía WP File Manager
public_html/clasica-2026/sponsors/*.jpg  ← URL pública: virtual-bike.cl/clasica-2026/sponsors/
Cero conflicto con WordPress. Solo se escribe dentro de public_html/clasica-2026/, que es la carpeta exclusiva de esta landing. El WP y sus plugins viven en public_html/wp-content/ y wp-admin/ — no los tocas.

Un detalle del File Manager: cuando subas dist/ la próxima vez, reemplaza el contenido de clasica-2026/ (no le hagas merge, o quedarán restos viejos de builds anteriores). O sea, borras assets/ e index.html que ya están ahí y subes los nuevos + la nueva sponsors/.

¿Procedo con crear public/sponsors/ y mover los logos?

crealo y continua con las mejoras recomendadas porfavor
Voy a implementar todo el plan. Arranco creando la todo list y moviendo logos.

Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción (jerarquía visual, iconos, urgencia)

Crear sección 'Día de carrera' (timeline de horarios, circuito, contacto)

Crear sección 'Premios en dinero' (tabla escalada por participantes)

Condensar Premios & Beneficios a bento grid de una sola pantalla

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Bash Create public/sponsors and move+rename logo files
IN
cd "//wsl.localhost/Ubuntu-24.04/home/seb/proyectos_web/virtual-bike-landing" && mkdir -p public/sponsors && mv "logo shimano.JPEG" public/sponsors/shimano.jpg && mv "logo cic.JPEG" public/sponsors/cic.jpg && mv "logo vitoria.JPEG" public/sponsors/vittoria.jpg && mv "logo mutual.JPEG" public/sponsors/mutual.jpg && mv "logo dronexp.JPEG" public/sponsors/dronexp.jpg && mv "logo cava.JPEG" public/sponsors/cava.jpg && mv "logo virtual 1.JPEG" public/sponsors/virtual.jpg && mv "logo virtual redondo.JPEG" public/sponsors/virtual-round.jpg && mv "logo virtual ropa.JPEG" public/sponsors/virtual-ropa.jpg && rm -f logo*Zone.Identifier && ls public/sponsors/

OUT
cava.jpg
cic.jpg
dronexp.jpg
mutual.jpg
shimano.jpg
virtual-ropa.jpg
virtual-round.jpg
virtual.jpg
vittoria.jpg
Logos movidos. Ahora voy al grano con la redistribución. Empiezo reordenando App.jsx y potenciando Inscripción.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\App.jsx
27 lines
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inscripcion from './components/Inscripcion'
import DiaCarrera from './components/DiaCarrera'
import PremiosDinero from './components/PremiosDinero'
import Premios from './components/Premios'
import Patrocinadores from './components/Patrocinadores'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Inscripcion />
      <DiaCarrera />
      <PremiosDinero />
      <Premios />
      <Patrocinadores />
      <Footer />
      <StickyCTA />
    </div>
  )
}
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción (jerarquía visual, iconos, urgencia)

Crear sección 'Día de carrera' (timeline de horarios, circuito, contacto)

Crear sección 'Premios en dinero' (tabla escalada por participantes)

Condensar Premios & Beneficios a bento grid de una sola pantalla

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Ahora potencio Inscripción — más énfasis visual al precio, beneficios con iconos, barra de urgencia ("200 medallones finisher"), y polish en el form.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Inscripcion.jsx
278 lines
import { useState, useEffect } from 'react'
import eventoImg from '../assets/clasica2.jpg'

const API_URL = 'https://virtual-bike.cl/wp-json/cvbk/v1/inscribir'

const categorias = [
  'Debutantes sin edad',
  'Master C mayor 50 y más años',
  'Damas',
  'Menor 23 años',
  'Mayor 24 años',
  'Mayor 35 años Master',
  'Todo competidor y Sub/23',
  'Master A 30/39 años',
  'Master B 40/49 años',
]

const beneficios = [
  { icon: '🏅', title: 'Medallón finisher', sub: 'Los 200 primeros inscritos' },
  { icon: '📸', title: 'Fotos y videos', sub: 'Cobertura completa, sin costo' },
  { icon: '💰', title: '3 metas volantes', sub: 'Premios en dinero por grupo' },
  { icon: '🍽️', title: 'Tercer tiempo', sub: 'Frutas, agua, pan y pastelitos' },
  { icon: '🎁', title: 'Sorteos', sub: 'Bici Mini CIC, ropa Virtual, más' },
  { icon: '🎤', title: 'Ambiente en vivo', sub: 'DJ + locutor toda la jornada' },
]

const initialForm = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  rut: '',
  categoria: '',
  club: '',
}

function Field({ label, name, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-[11px] text-white/50 uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, letterSpacing: '0.15em' }}>
        {label} {required && <span className="text-[#f5e400]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#f5e400] focus:bg-black transition-all placeholder-white/20 text-sm"
        style={{ backgroundColor: '#0f0f0f' }}
      />
    </div>
  )
}

export default function Inscripcion() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const reset = () => setStatus('idle')
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Error al procesar la inscripción')

      window.location.href = data.redirect
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

  return (
    <section id="inscripcion" className="relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img src={eventoImg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/75" />
      </div>

      {/* Banner urgencia */}
      <div className="relative z-10 bg-[#f5e400] text-black text-center py-2.5 px-4">
        <span
          className="text-xs md:text-sm uppercase"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, letterSpacing: '0.2em' }}
        >
          🔥 Inscripciones abiertas — Mayo 2026 · Solo 200 medallones finisher
        </span>
      </div>

      <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-4"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Reserva tu cupo
          </p>
          <h2
            className="text-5xl md:text-7xl text-white uppercase leading-none mb-4"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            Inscríbete <span className="text-[#f5e400]">ahora</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base">
            Clásica Virtual Bike 2026 · 21 de Mayo · Alto Noviciado
          </p>
        </div>

        {/* Caja precio + resumen — horizontal arriba del form */}
        <div className="bg-black/60 backdrop-blur-sm border border-white/10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 md:gap-0">
            {/* Precio */}
            <div className="border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-8 flex flex-col justify-center md:min-w-[260px]">
              <div
                className="text-6xl md:text-7xl text-[#f5e400] leading-none"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
              >
                $40.000
              </div>
              <p className="text-white/40 text-[10px] md:text-xs mt-2 tracking-[0.2em] uppercase">
                CLP · Inscripción única
              </p>
            </div>

            {/* Quick beneficios */}
            <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
              {[
                'Medallón finisher (200 primeros)',
                'Premios en dinero + sorteos',
                'Fotos y videos GRATIS',
                '3 metas volantes por grupo',
                'Tercer tiempo incluido',
                'Tricota Champion al 1°',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[#f5e400] mt-0.5 text-xs">✓</span>
                  <span className="text-white/80 text-xs md:text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-black/70 backdrop-blur-sm border border-white/10 p-6 md:p-10">
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
            <h3
              className="text-xl md:text-2xl text-white uppercase"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '0.04em' }}
            >
              Datos de inscripción
            </h3>
            <span className="text-white/30 text-[10px] uppercase tracking-widest hidden sm:block">
              Todos los campos son obligatorios
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
              <Field label="Apellido" name="apellido" value={form.apellido} onChange={handleChange} required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Teléfono" name="telefono" type="tel" placeholder="9 1234 5678" value={form.telefono} onChange={handleChange} required />
              <Field label="RUT" name="rut" placeholder="12.345.678-9" value={form.rut} onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] text-white/50 uppercase tracking-wider mb-1.5" style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, letterSpacing: '0.15em' }}>
                  Categoría <span className="text-[#f5e400]">*</span>
                </label>
                <select
                  name="categoria"
                  value={form.categoria}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#f5e400] focus:bg-black transition-all text-sm"
                  style={{ backgroundColor: '#0f0f0f' }}
                >
                  <option value="">Selecciona tu categoría</option>
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <Field label="Club / Equipo (opcional)" name="club" value={form.club} onChange={handleChange} />
            </div>

            {errorMsg && (
              <div className="border border-red-500/30 bg-red-500/5 text-red-400 text-sm px-4 py-3">
                {errorMsg}
              </div>
            )}

            <div className="pt-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#f5e400] text-black py-4 text-lg uppercase hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '0.08em' }}
              >
                {status === 'loading' ? 'Procesando...' : (
                  <>
                    <span>Inscribirme por $40.000</span>
                    <span className="text-xl">→</span>
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-4 mt-4 text-white/30 text-[10px] uppercase tracking-widest">
                <span className="flex items-center gap-1.5">🔒 Pago seguro vía Getnet</span>
                <span className="hidden sm:flex items-center gap-1.5">✓ Datos protegidos</span>
              </div>
            </div>
          </form>
        </div>

        {/* Beneficios expandidos abajo del form */}
        <div className="mt-14">
          <p
            className="text-center text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Incluido con tu inscripción
          </p>
          <h3
            className="text-center text-3xl md:text-4xl text-white uppercase mb-10"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            Todo lo que te llevas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {beneficios.map((b) => (
              <div
                key={b.title}
                className="border border-white/10 bg-black/40 backdrop-blur-sm p-5 hover:border-[#f5e400]/40 hover:bg-black/60 transition-all"
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <div
                  className="text-white uppercase text-lg leading-tight mb-1"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                >
                  {b.title}
                </div>
                <div className="text-white/50 text-xs leading-relaxed">{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción (jerarquía visual, iconos, urgencia)

Crear sección 'Día de carrera' (timeline de horarios, circuito, contacto)

Crear sección 'Premios en dinero' (tabla escalada por participantes)

Condensar Premios & Beneficios a bento grid de una sola pantalla

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Ahora la sección Día de carrera — timeline visual de horarios por categoría + info del circuito + contacto.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\DiaCarrera.jsx
165 lines
import clasica3 from '../assets/clasica3.jpg'

const horarios = [
  { hora: '08:00', label: 'Acreditación', categorias: ['Todas las categorías'], destacado: false },
  { hora: '09:00', label: 'Primera largada', categorias: ['Debutantes (sin edad)', 'Master C (50+ años)'], destacado: true },
  { hora: '09:20', label: 'Damas', categorias: ['Menor 23 · Mayor 24 · Mayor 35'], destacado: true },
  { hora: '11:30', label: 'Competidores', categorias: ['Todo Competidor', 'Sub/23'], destacado: true },
  { hora: '11:40', label: 'Master A y B', categorias: ['Master A (30-39)', 'Master B (40-49)'], destacado: true },
]

const datos = [
  { icon: '📍', label: 'Circuito', value: 'Alto Noviciado, Lampa' },
  { icon: '🔁', label: 'Vueltas', value: '3 giros al circuito' },
  { icon: '⚡', label: 'Metas volantes', value: '3 por grupo' },
  { icon: '🎯', label: 'Sistema', value: 'Foto finish oficial' },
]

export default function DiaCarrera() {
  return (
    <section id="dia-carrera" className="relative overflow-hidden py-20 md:py-28">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-20">
        <img src={clasica3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-[#080808]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            21 de Mayo · 2026
          </p>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            El día de <span className="text-[#f5e400]">carrera</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Una jornada completa de competencia, premios y buen ambiente en Alto Noviciado
          </p>
        </div>

        {/* Info rápida — 4 datos clave */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {datos.map((d) => (
            <div key={d.label} className="border border-white/10 bg-black/40 backdrop-blur-sm p-5 text-center">
              <div className="text-2xl mb-2">{d.icon}</div>
              <div
                className="text-white text-base md:text-lg uppercase leading-tight"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
              >
                {d.value}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{d.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline horarios */}
        <div className="mb-12">
          <div className="flex items-baseline justify-between mb-6">
            <h3
              className="text-2xl md:text-3xl text-white uppercase"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
            >
              Horarios <span className="text-[#f5e400]">por categoría</span>
            </h3>
            <span className="text-white/30 text-[10px] uppercase tracking-widest hidden md:block">
              Revisa tu largada
            </span>
          </div>

          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-[58px] md:left-[82px] top-3 bottom-3 w-px bg-white/10" />

            <div className="space-y-3">
              {horarios.map((h, i) => (
                <div key={i} className="relative flex items-stretch">
                  {/* Hora */}
                  <div className="w-[52px] md:w-[72px] flex-shrink-0 flex items-center">
                    <span
                      className={`text-xl md:text-3xl leading-none ${h.destacado ? 'text-[#f5e400]' : 'text-white/50'}`}
                      style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                    >
                      {h.hora}
                    </span>
                  </div>

                  {/* Punto */}
                  <div className="flex-shrink-0 flex items-center justify-center w-[12px] md:w-[20px] relative z-10">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        h.destacado
                          ? 'bg-[#f5e400] border-[#f5e400]'
                          : 'bg-black border-white/30'
                      }`}
                    />
                  </div>

                  {/* Contenido */}
                  <div
                    className={`flex-1 ml-4 border p-4 transition-all ${
                      h.destacado
                        ? 'border-[#f5e400]/30 bg-[#f5e400]/5 hover:border-[#f5e400]/60'
                        : 'border-white/10 bg-black/40 hover:border-white/20'
                    }`}
                  >
                    <div
                      className="text-white text-lg md:text-xl uppercase leading-tight mb-1"
                      style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                    >
                      {h.label}
                    </div>
                    <div className="text-white/60 text-xs md:text-sm">
                      {h.categorias.join(' · ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-[#f5e400] text-[10px] uppercase tracking-[0.3em] mb-2"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
            >
              ¿Dudas antes de inscribirte?
            </p>
            <p className="text-white/70 text-base md:text-lg">
              Escríbenos directo y te ayudamos con lo que necesites
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/56999542821"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black px-5 py-3 text-sm uppercase hover:bg-white transition-all"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, letterSpacing: '0.06em' }}
            >
              WhatsApp +56 9 9954 2821
            </a>
            <a
              href="#inscripcion"
              className="border border-[#f5e400] text-[#f5e400] px-5 py-3 text-sm uppercase hover:bg-[#f5e400] hover:text-black transition-all"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, letterSpacing: '0.06em' }}
            >
              Inscribirme ahora →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción

Crear sección 'Día de carrera'

Crear sección 'Premios en dinero' (tabla escalada por participantes)

Condensar Premios & Beneficios a bento grid de una sola pantalla

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Ahora la tabla de premios en dinero — es el gancho más fuerte del afiche.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\PremiosDinero.jsx
294 lines
import { useState } from 'react'

const tramos = [
  {
    id: 'general-60',
    grupo: 'General',
    badge: 'Mayor a 60',
    subtitulo: 'Cuando el grupo supera los 60 inscritos',
    destacado: true,
    puestos: [
      { lugar: 1, premio: 100000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 80000, extra: 'Medallón' },
      { lugar: 3, premio: 70000, extra: 'Medallón' },
      { lugar: 4, premio: 60000, extra: 'Medallón' },
      { lugar: 5, premio: 50000, extra: 'Medallón' },
      { lugar: 6, premio: 40000, extra: 'Medallón' },
      { lugar: 7, premio: 40000, extra: 'Medallón' },
    ],
  },
  {
    id: 'general-59',
    grupo: 'General',
    badge: 'Menor a 59',
    subtitulo: 'Entre 40 y 59 inscritos en el grupo',
    puestos: [
      { lugar: 1, premio: 80000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 70000, extra: 'Medallón' },
      { lugar: 3, premio: 60000, extra: 'Medallón' },
      { lugar: 4, premio: 50000, extra: 'Medallón' },
      { lugar: 5, premio: 40000, extra: 'Medallón' },
    ],
  },
  {
    id: 'general-39',
    grupo: 'General',
    badge: 'Menor a 39',
    subtitulo: 'Entre 20 y 39 inscritos en el grupo',
    puestos: [
      { lugar: 1, premio: 60000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 50000, extra: 'Medallón' },
      { lugar: 3, premio: 40000, extra: 'Medallón' },
      { lugar: 4, premio: 40000, extra: 'Medallón' },
      { lugar: 5, premio: 40000, extra: 'Medallón' },
    ],
  },
  {
    id: 'general-19',
    grupo: 'General',
    badge: 'Menor a 19',
    subtitulo: 'Hasta 19 inscritos en el grupo',
    puestos: [
      { lugar: 1, premio: 40000, extra: 'Medallón + Tricota' },
      { lugar: 2, premio: 30000, extra: 'Medallón' },
      { lugar: 3, premio: 20000, extra: 'Medallón' },
      { lugar: 4, premio: 20000, extra: 'Medallón' },
      { lugar: 5, premio: 20000, extra: 'Medallón' },
    ],
  },
  {
    id: 'damas-5',
    grupo: 'Damas',
    badge: 'Mayor a 5',
    subtitulo: 'Categoría Damas con 5+ participantes',
    puestos: [
      { lugar: 1, premio: 40000, extra: 'Medallón + Tricota + Trofeo' },
      { lugar: 2, premio: 30000, extra: 'Medallón' },
      { lugar: 3, premio: 20000, extra: 'Medallón' },
      { lugar: 4, premio: 10000, extra: 'Medallón' },
      { lugar: 5, premio: 10000, extra: 'Medallón' },
    ],
    extraNote: 'Trofeo + Tricota de Campeona a la 1ª en cruzar la meta',
  },
  {
    id: 'damas-3',
    grupo: 'Damas',
    badge: 'Menor a 3',
    subtitulo: 'Categoría Damas con menos de 3 participantes',
    puestos: [
      { lugar: 1, premio: 20000, extra: 'Medallón' },
      { lugar: 2, premio: 10000, extra: 'Medallón' },
      { lugar: 3, premio: 10000, extra: 'Medallón' },
    ],
  },
]

function formatCLP(n) {
  return '$' + n.toLocaleString('es-CL')
}

function TramoCard({ tramo, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(tramo.id)}
      className={`text-left border p-4 transition-all ${
        selected
          ? 'border-[#f5e400] bg-[#f5e400]/10'
          : 'border-white/10 bg-black/40 hover:border-white/30'
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className={`text-[10px] uppercase tracking-widest ${selected ? 'text-[#f5e400]' : 'text-white/40'}`}
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
        >
          {tramo.grupo}
        </span>
        {tramo.destacado && (
          <span className="bg-[#f5e400] text-black text-[9px] px-2 py-0.5 uppercase tracking-wider" style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}>
            Top
          </span>
        )}
      </div>
      <div
        className="text-white text-xl uppercase leading-tight mb-1"
        style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
      >
        {tramo.badge}
      </div>
      <div
        className={`text-2xl leading-none ${selected ? 'text-[#f5e400]' : 'text-white/70'}`}
        style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
      >
        {formatCLP(tramo.puestos[0].premio)}
      </div>
      <div className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">al 1° lugar</div>
    </button>
  )
}

export default function PremiosDinero() {
  const [selectedId, setSelectedId] = useState('general-60')
  const tramo = tramos.find((t) => t.id === selectedId)

  return (
    <section id="premios-dinero" className="relative py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Encabezado */}
        <div className="mb-12">
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Premios en dinero · Clásica 2026
          </p>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none mb-4"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            Compite por <span className="text-[#f5e400]">más de $2 millones</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl">
            Los premios escalan según cuántos se inscriban en cada grupo. Mientras más competidores en tu categoría,
            más dinero reparte el podio. Además, hay premios en dinero en las <span className="text-white">3 metas volantes de cada grupo</span>.
          </p>
        </div>

        {/* Selector de tramos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {tramos.map((t) => (
            <TramoCard
              key={t.id}
              tramo={t}
              selected={selectedId === t.id}
              onSelect={setSelectedId}
            />
          ))}
        </div>

        {/* Detalle tramo seleccionado */}
        <div className="border border-[#f5e400]/30 bg-[#f5e400]/5 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 pb-5 border-b border-white/10 gap-3">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-[#f5e400] text-xs uppercase tracking-[0.3em]"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
                >
                  {tramo.grupo}
                </span>
                <span className="text-white/30 text-[10px]">·</span>
                <span
                  className="text-white text-sm uppercase"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, letterSpacing: '0.1em' }}
                >
                  {tramo.badge} participantes
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl text-white uppercase leading-tight"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
              >
                {tramo.subtitulo}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-white/40 text-[10px] uppercase tracking-widest">Total podio</div>
              <div
                className="text-3xl md:text-4xl text-[#f5e400] leading-none"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
              >
                {formatCLP(tramo.puestos.reduce((sum, p) => sum + p.premio, 0))}
              </div>
            </div>
          </div>

          {/* Puestos */}
          <div className="space-y-2">
            {tramo.puestos.map((p) => (
              <div
                key={p.lugar}
                className={`flex items-center justify-between gap-4 p-3 md:p-4 ${
                  p.lugar === 1 ? 'bg-[#f5e400] text-black' : 'bg-black/40 text-white'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-5 min-w-0">
                  <div
                    className={`text-3xl md:text-4xl leading-none flex-shrink-0 ${p.lugar === 1 ? 'text-black' : 'text-white/40'}`}
                    style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                  >
                    {p.lugar}°
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-xl md:text-2xl uppercase leading-none ${p.lugar === 1 ? 'text-black' : 'text-white'}`}
                      style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
                    >
                      {formatCLP(p.premio)}
                    </div>
                    <div className={`text-[11px] md:text-xs mt-1 truncate ${p.lugar === 1 ? 'text-black/70' : 'text-white/50'}`}>
                      {p.extra}
                    </div>
                  </div>
                </div>
                {p.lugar === 1 && (
                  <span
                    className="bg-black text-[#f5e400] text-[10px] px-2.5 py-1 uppercase tracking-widest flex-shrink-0"
                    style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                  >
                    Champion
                  </span>
                )}
              </div>
            ))}
          </div>

          {tramo.extraNote && (
            <p className="text-white/60 text-xs mt-5 italic">⭐ {tramo.extraNote}</p>
          )}
        </div>

        {/* Nota metas volantes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-white/10 bg-black/40 p-5">
            <div className="text-[#f5e400] text-2xl mb-2">💰</div>
            <div
              className="text-white text-lg uppercase mb-1"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
            >
              3 metas volantes
            </div>
            <div className="text-white/50 text-xs">
              $10.000 + premios Virtual en cada meta, por grupo
            </div>
          </div>
          <div className="border border-white/10 bg-black/40 p-5">
            <div className="text-[#f5e400] text-2xl mb-2">🎁</div>
            <div
              className="text-white text-lg uppercase mb-1"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
            >
              Sorteos
            </div>
            <div className="text-white/50 text-xs">
              Bici Mini CIC, ropa Virtual, Vittoria, Fundax
            </div>
          </div>
          <div className="border border-white/10 bg-black/40 p-5">
            <div className="text-[#f5e400] text-2xl mb-2">🏅</div>
            <div
              className="text-white text-lg uppercase mb-1"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
            >
              Medallón finisher
            </div>
            <div className="text-white/50 text-xs">
              Para los 200 primeros inscritos de la Clásica
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción

Crear sección 'Día de carrera'

Crear sección 'Premios en dinero'

Condensar Premios & Beneficios a bento grid

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Ahora condenso Premios & Beneficios a un bento grid — las 6 flip-cards gigantes pasan a una sola sección.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Premios.jsx
130 lines
import clasica1 from '../assets/clasica1.jpg'
import clasica2 from '../assets/clasica2.jpg'
import clasica3 from '../assets/clasica3.jpg'
import clasica5 from '../assets/clasica5.jpg'
import clasica6 from '../assets/clasica6.jpg'

const items = [
  {
    tag: 'Premiación',
    titulo: 'Cada categoría, su champion',
    body: 'Tricota de Champion al 1° de cada categoría. Top 5 con medallón de podio. Medallón finisher para los 200 primeros inscritos.',
    img: clasica1,
    span: 'md:col-span-2 md:row-span-2',
    size: 'lg',
  },
  {
    tag: 'En carrera',
    titulo: 'Metas volantes + foto finish',
    body: '3 metas volantes por grupo con dinero y sorpresas Virtual. Resultados oficiales por foto finish.',
    img: clasica2,
    span: 'md:col-span-2',
  },
  {
    tag: 'Sorteos',
    titulo: 'Premios que valen pedalear',
    body: 'Bici Mini CIC · Conjunto Virtual a elección · Porta bolso Double · Productos Vittoria y Fundax.',
    img: clasica3,
    span: 'md:col-span-2',
  },
  {
    tag: 'Cobertura',
    titulo: 'Fotos y videos GRATIS',
    body: 'Cobertura audiovisual profesional sin costo adicional para todos los participantes.',
    img: null,
    icon: '📸',
    span: '',
  },
  {
    tag: 'Ambiente',
    titulo: 'DJ + locutor en vivo',
    body: 'Música y narración desde la largada hasta el podio. Vasos oficiales CVBK / Virtual.',
    img: clasica5,
    span: '',
  },
  {
    tag: 'Tercer tiempo',
    titulo: 'Para celebrar la meta',
    body: 'Frutas, agua, pan y pastelitos. Ambiente para compartir al cierre de la carrera.',
    img: clasica6,
    span: '',
  },
]

function BentoCard({ tag, titulo, body, img, icon, span = '', size }) {
  const hasImg = !!img
  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-[#0f0f0f] hover:border-[#f5e400]/40 transition-all group ${span} ${
        size === 'lg' ? 'min-h-[360px] md:min-h-[480px]' : 'min-h-[220px]'
      }`}
    >
      {hasImg && (
        <>
          <img
            src={img}
            alt={tag}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </>
      )}

      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-7">
        {icon && !hasImg && <div className="text-4xl mb-3">{icon}</div>}
        <span
          className="text-[#f5e400] text-[10px] uppercase tracking-[0.3em] mb-2"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
        >
          — {tag}
        </span>
        <h3
          className={`text-white uppercase leading-tight mb-2 ${
            size === 'lg' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
          }`}
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
        >
          {titulo}
        </h3>
        <p className={`text-white/70 leading-relaxed ${size === 'lg' ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
          {body}
        </p>
      </div>
    </div>
  )
}

export default function Premios() {
  return (
    <section id="premios" className="py-20 md:py-28 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Encabezado */}
        <div className="mb-12">
          <p
            className="text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
          >
            Este año viene con todo
          </p>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
          >
            La experiencia <span className="text-[#f5e400]">completa</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base mt-4 max-w-2xl">
            Más allá del podio y los premios en dinero, esto incluye tu inscripción a la Clásica Virtual Bike 2026.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]">
          {items.map((it, i) => (
            <BentoCard key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción

Crear sección 'Día de carrera'

Crear sección 'Premios en dinero'

Condensar Premios & Beneficios a bento grid

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Ahora Patrocinadores con logos reales. Vite sirve lo que está en public/ desde la raíz, pero como el base es /clasica-2026/, los paths tienen que ser absolutos con el base prepended. Uso import.meta.env.BASE_URL.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Patrocinadores.jsx
74 lines
const BASE = import.meta.env.BASE_URL

const logos = [
  { nombre: 'Shimano', src: `${BASE}sponsors/shimano.jpg` },
  { nombre: 'CIC', src: `${BASE}sponsors/cic.jpg` },
  { nombre: 'Vittoria', src: `${BASE}sponsors/vittoria.jpg` },
  { nombre: 'Mutual de Seguridad', src: `${BASE}sponsors/mutual.jpg` },
  { nombre: 'DronExp', src: `${BASE}sponsors/dronexp.jpg` },
  { nombre: 'C.A.V.A', src: `${BASE}sponsors/cava.jpg` },
]

const textOnly = [
  { nombre: 'Propaint' },
  { nombre: 'Bump Lab' },
]

export default function Patrocinadores() {
  return (
    <section id="auspiciadores" className="py-20 px-6 md:px-12 border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center text-[#f5e400] text-xs uppercase tracking-[0.3em] mb-3"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
        >
          Auspiciadores & Colaboradores
        </p>
        <h2
          className="text-center text-3xl md:text-4xl text-white uppercase mb-12"
          style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
        >
          Las marcas que nos acompañan
        </h2>

        {/* Logos reales */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-6">
          {logos.map((s) => (
            <div
              key={s.nombre}
              className="group bg-white border border-white/5 aspect-[3/2] flex items-center justify-center p-4 hover:border-[#f5e400]/40 transition-all overflow-hidden"
              title={s.nombre}
            >
              <img
                src={s.src}
                alt={s.nombre}
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Placeholders texto (mientras consiguen logos) */}
        {textOnly.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
            {textOnly.map((s) => (
              <div
                key={s.nombre}
                className="bg-[#111] border border-white/10 aspect-[3/2] flex items-center justify-center hover:border-[#f5e400]/40 transition-all"
              >
                <span
                  className="text-white/80 uppercase text-lg md:text-xl tracking-wider"
                  style={{ fontFamily: 'Barlow Condensed', fontWeight: 800 }}
                >
                  {s.nombre}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción

Crear sección 'Día de carrera'

Crear sección 'Premios en dinero'

Condensar Premios & Beneficios a bento grid

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Ahora el CTA sticky móvil + actualizo links del Navbar para que apunten a las nuevas secciones.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\StickyCTA.jsx
37 lines
import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const viewportH = window.innerHeight
      setVisible(scrolled > viewportH * 0.8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#inscripcion"
        className="flex items-center justify-between gap-3 bg-[#f5e400] text-black px-5 py-3.5 w-full"
        style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '0.05em' }}
      >
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-widest opacity-70">Inscripción</span>
          <span className="text-lg uppercase">Inscríbete · $40.000</span>
        </div>
        <span className="text-2xl">→</span>
      </a>
    </div>
  )
}
Edit \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Navbar.jsx
Modified
Edit \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Navbar.jsx
Modified
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción

Crear sección 'Día de carrera'

Crear sección 'Premios en dinero'

Condensar Premios & Beneficios a bento grid

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Por último, actualizo el Footer con el logo round y agrego el logo virtual-ropa como marca extra.

Write \\wsl.localhost\Ubuntu-24.04\home\seb\proyectos_web\virtual-bike-landing\src\components\Footer.jsx
86 lines
const BASE = import.meta.env.BASE_URL

export default function Footer() {
  return (
    <footer className="pb-28 md:pb-14 pt-14 px-6 md:px-12 border-t border-white/5 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/5">
          <div className="flex items-center gap-3">
            <img
              src={`${BASE}sponsors/virtual-round.jpg`}
              alt="Virtual BK"
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <div
                className="text-white text-xl uppercase leading-none"
                style={{ fontFamily: 'Barlow Condensed', fontWeight: 900 }}
              >
                Virtual-Bike.cl
              </div>
              <div className="text-white/40 text-xs mt-1">Clásica CVBK 2026 · 21 de Mayo</div>
            </div>
          </div>

          <div className="flex gap-6 md:gap-8">
            <a
              href="https://www.instagram.com/virtual_bike_cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#f5e400] transition-colors text-sm uppercase tracking-widest"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
            >
              Instagram
            </a>
            <a
              href="https://wa.me/56999542821"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#f5e400] transition-colors text-sm uppercase tracking-widest"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
            >
              WhatsApp
            </a>
            <a
              href="https://virtual-bike.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#f5e400] transition-colors text-sm uppercase tracking-widest"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
            >
              Sitio web
            </a>
          </div>
        </div>

        {/* Marca extra + copy */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">
          <div className="flex items-center gap-3">
            <span
              className="text-white/30 text-[10px] uppercase tracking-[0.25em]"
              style={{ fontFamily: 'Barlow Condensed', fontWeight: 700 }}
            >
              También en ropa deportiva
            </span>
            <div className="bg-white p-1.5 rounded">
              <img
                src={`${BASE}sponsors/virtual-ropa.jpg`}
                alt="Virtual Ropa"
                className="h-7 object-contain"
              />
            </div>
          </div>

          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: 'Barlow Condensed', fontWeight: 600 }}
          >
            © {new Date().getFullYear()} Virtual-Bike.cl · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
Update Todos

Mover y renombrar logos a public/sponsors/

Mover Inscripción justo después del Hero

Potenciar el formulario de Inscripción

Crear sección 'Día de carrera'

Crear sección 'Premios en dinero'

Condensar Premios & Beneficios a bento grid

Reemplazar Patrocinadores con logos reales

Agregar CTA sticky móvil + actualizar Navbar links

Agregar logo virtual-ropa al Footer
Listo, todo el plan implementado. Resumen de la redistribución:

Nuevo flujo de la página:

Hero (intacto, como pediste)
Inscripción (Inscripcion.jsx) — subió de posición, ahora es lo primero tras el Hero. Incluye banner urgencia "Solo 200 medallones finisher", caja precio $40.000 con beneficios en ✓, formulario en card y grid de 6 beneficios con iconos abajo.
Día de carrera (DiaCarrera.jsx) — nueva. Timeline vertical con 5 horarios (08:00 acreditación → 11:40 Master), 4 datos clave del circuito, CTA de WhatsApp directo.
Premios en dinero (PremiosDinero.jsx) — nueva. Selector de 6 tramos (4 general + 2 damas). Cada tramo muestra podio completo con el 1° destacado en amarillo y total del podio arriba. Es el gancho más fuerte del afiche.
Beneficios (Premios.jsx) — condensado. Las 6 flip-cards gigantes ahora son un bento grid de 1 pantallazo. La card grande arriba-izquierda es "Premiación", las demás son cards medianas.
Patrocinadores (Patrocinadores.jsx) — con logos reales (Shimano, CIC, Vittoria, Mutual, DronExp, CAVA) en grid blanco. Propaint y Bump Lab como texto hasta que consigas sus PNGs.
Footer (Footer.jsx) — con logo round, WhatsApp, y logo virtual-ropa como "También en ropa deportiva".
StickyCTA (StickyCTA.jsx) — barra sticky solo móvil, aparece al 80% del Hero, siempre empuja al form.
Revisa en localhost:5180/clasica-2026/ y dime:

Si algún textual está off (nombres de categorías, horarios, montos de premios — los saqué del afiche pero quiero que los confirme el cliente).
Si el bento grid de Premios lo quieres aún más compacto o está bien.
Si el selector interactivo de Premios en dinero se siente bien o prefieres verlos todos desplegados.
creo que este proyecto lo tengo en github, no?
Sí, probablemente. ¿Quieres que revise si está en GitHub y que pushee los cambios que acaba de hacer? Te digo el estado si quieres.

si xfa revisa sie sta
You've hit your limit · resets 1:10pm (America/Santiago)

