Actúa como un desarrollador frontend senior. Genera un sitio web estático en Astro (última versión estable), para una “Experiencia de Arepas” para grupos. Debe ser un one-page (landing) con navegación por anclas, responsive, muy visual, y con CTA principal “Reservar por WhatsApp”. No uses backend. Entrega el proyecto completo (estructura de archivos) y el código listo para correr con npm install + npm run dev.

REQUISITOS TÉCNICOS
- Framework: Astro (SSG) con TypeScript.
- Estilos: CSS moderno (puede ser Tailwind si lo prefieres, pero si lo usas incluye la configuración). Si no, usa CSS variables + un archivo global.
- Sitio one-page con secciones y anclas (#experiencia, #que-vas-a-hacer, #degustacion, #lugar, #fotos, #faq, #reservar).
- Botón WhatsApp visible en el hero y repetido al menos en otra sección y en el footer junto a los otros botones sociales.
- Incluir botón/ícono flotante de WhatsApp en móvil y desktop.
- SEO básico: title, meta description, og tags. Accesibilidad: buen contraste, alt en imágenes, headings en orden.
- Imágenes: usar placeholders locales en /public/images (ej: hero.jpg, gallery-1.jpg ... gallery-8.jpg). Si no hay imágenes reales, usa rectángulos o imágenes de placeholder, pero deja el código preparado para reemplazarlas.
- Cada sección va a llegar luego una imagen de fondo, usa por favor una placeholder e implementa el efecto parallax para los scrolls.
- Logo: usar /public/images/logo.png y mostrarlo en el header y favicon (si puedes). Usa un placeholder de una arepa mientras tanto.
- Añadir link a Instagram (en header y footer).
- No inventes datos sensibles: deja placeholders para WhatsApp e Instagram como variables en un config.
- Internacionalizable: Aunque el contenido presente en este prompt sea en español quisiéra también que fuera internacionalizable y que el idioma pudiera cambiarse manualmente entre inglés y español pero que la versión que se muestre por defecto a la primera visita sea el idioma autodetectado del navegador del visitante.

CONTENIDO Y COPY (usar exactamente este contenido, con pequeños ajustes de puntuación si hace falta)
Nombre/Marca: "Arepas With Friends" (si necesitas un nombre)
Dominio web: "arepaswithfriends.com"
Ciudad/Barrio: no especificar exacto; si hace falta poner “Castelar, Buenos Aires”.

HEADER
- Notas sobre el FAQ: No es una sección de la página sino que apunta a una página nueva que hay que construir y que contiene todas las preguntas frecuentes.
- Logo a la izquierda
- Menú: La experiencia | Qué vas a hacer | El lugar | Fotos | FAQ | Contacto
- Botón pequeño: “Reservar por WhatsApp”
- Botón para cambiar idioma entre inglés y español (usar "ES" o "EN")

HERO (PORTADA)
- Título: “AREPAS WITH FRIENDS”
- Subtítulo (1-2 líneas): “Aprende a hacer AUTÉNTICAS arepas VENEZOLANAS con tus amigos: 
cocina, risas y degustación”
- Línea destacada: “📍 Disponible en nuestro espacio o a domicilio”
- Bullets cortos:
  - “✔ Elaboración de arepas desde cero”
  - “✔ Degustación con distintos rellenos”
  - “✔ Grupos de hasta 10 personas”
- CTA principal: “Reservar por WhatsApp”
- Texto pequeño debajo: “Reservas por WhatsApp · Fechas a coordinar · Cupos limitados”

SECCIÓN: LA EXPERIENCIA (id=experiencia)
Título: “La experiencia”
Texto (landing, breve):
“Viví una experiencia gastronómica de 3 horas donde aprendés a hacer arepas desde cero, participás en todo el proceso y disfrutás una degustación con distintos rellenos. Pensada para grupos de hasta 10 personas, disponible en nuestro espacio o a domicilio. No necesitás experiencia previa, solo ganas de compartir y disfrutar.”

SECCIÓN: QUÉ VAS A HACER (id=que-vas-a-hacer)
Título: “Qué vas a hacer”
Bullets:
• “Conocer los ingredientes y preparar la masa desde cero”
• “Formar y cocinar tus propias arepas”
• “Aprender tips simples para que queden perfectas”
• “Armar y degustar arepas con distintos rellenos preparados previamente para que el foco esté en cocinar y disfrutar”
• “Disfrutar la experiencia compartiendo en grupo”

SECCIÓN: EL LUGAR (id=lugar)
Título: “El lugar”
Texto corto:
“Un espacio agradable, cálido y cómodo, ideal para cocinar en grupo y pasarla bien. Pensado para que te sientas en casa.”

SECCIÓN: FOTOS (id=fotos)
Título: “Fotos”
- Galería tipo carrusel (8 imágenes placeholder) con lightbox simple sin que se abra en una nueva pestaña.
- Cada imagen con alt descriptivo genérico (ej: “Preparación de arepas”, “Degustación de rellenos”, etc.)

SECCIÓN FINAL: RESERVAR / CONTACTO (id=reservar)
Título: “Reservá tu fecha”
- Texto: “Escribinos por WhatsApp para confirmar disponibilidad y coordinar fecha y grupo.”
- CTA grande: “Reservar por WhatsApp”
- Link a Instagram: “Ver Instagram”
- Nota corta: “Ubicación exacta a confirmar al reservar.”
- Implementa un formulario básico que podamos recibir vía correo electrónico que tenga email, nombre y un campo de texto.

FOOTER
- Logo pequeño
- Links de navegación
- WhatsApp + Instagram
- Texto de copyright simple.

PÁGINA: PREGUNTAS FRECUENTES (id=faq)
Título: “Preguntas frecuentes”
Items (acorde a lo acordado, incluir a domicilio):
1) “¿Cuánto dura la experiencia?” → “La experiencia tiene una duración total de 3 horas. En caso de requerir mas tiempo coordinarlo durante la reserva.”
2) “¿Para cuántas personas es?” → “Está pensada para grupos entre 4 y 10 personas.”
3) “¿Dónde se realiza la experiencia?” → “Sugerimos realizarlo en nuestro espacio el cual cuenta con las comodidades y está pensado para disfrutar por completo la experiencia. Sin embargo, podemos ir a tu domicilio.”
4) “¿Cómo funciona la experiencia a domicilio?” → 
   “Nosotros llevamos todos los materiales e ingredientes necesarios para la elaboración de las arepas. Solo necesitamos una cocina disponible para preparar las arepas y vajilla completa acorde a la cantidad de personas. Para más detalles, condiciones y disponibilidad, consultanos por privado vía WhatsApp.”
5) “¿Qué incluye la experiencia?” → “Participación completa en la elaboración, degustación de arepas con distintos rellenos previamente preparados y 1 bebida sin alcohol individual por persona. Pero tenemos a la venta variedad de bebidas adicionales. Consultar al momento de la reserva.”
6) “¿Necesito saber cocinar?” → “No, está pensado para que cualquiera pueda participar y disfrutar.”
7) “¿Cómo se reserva?” → “La reserva de fecha se realiza exclusivamente por WhatsApp. Escribinos indicando cantidad de personas y fecha deseada.”


CONFIGURACIÓN (variables)
- WHATSAPP_NUMBER en formato internacional (placeholder): 549XXXXXXXXXX
- WHATSAPP_PREFILL_TEXT (URL encoded) con este texto:
  “Hola! Quiero reservar la experiencia de arepas. Somos ___ personas. Me gustaría para el día ___ / horario ___. ¿Hay disponibilidad?”
- INSTAGRAM_URL placeholder: https://instagram.com/tuusuario

ENTREGABLES
- Estructura del proyecto Astro
- Código completo de páginas, componentes y estilos
- Instrucciones de instalación y ejecución para ser desplegado via github pages.
- Nota breve de dónde cambiar WhatsApp/Instagram y dónde poner imágenes reales

No inventes precios ni dirección exacta. Mantén el tono cálido y profesional.
