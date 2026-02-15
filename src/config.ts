// ============================================
// CONFIGURACION DEL SITIO
// Editar estos valores para personalizar el sitio
// ============================================

/** Numero de WhatsApp en formato internacional (sin +) */
export const WHATSAPP_NUMBER = '549XXXXXXXXXX';

/** Texto pre-llenado para WhatsApp (sin URL-encode, se codifica automaticamente) */
export const WHATSAPP_PREFILL_TEXT_ES =
  'Hola! Quiero reservar la experiencia de arepas. Somos ___ personas. Me gustaría para el día ___ / horario ___. ¿Hay disponibilidad?';

export const WHATSAPP_PREFILL_TEXT_EN =
  "Hi! I'd like to book the arepa experience. We are ___ people. I'd like it for ___ / time ___. Is it available?";

/** URL de Instagram */
export const INSTAGRAM_URL = 'https://instagram.com/tuusuario';

/** Endpoint del formulario (Formspree u otro servicio). Crear cuenta gratis en https://formspree.io */
export const FORM_ENDPOINT = 'https://formspree.io/f/XXXXXXXX';

/** Nombre del sitio */
export const SITE_NAME = 'Arepas With Friends';

/** Dominio */
export const SITE_URL = 'https://arepaswithfriends.com';

// ============================================
// IMAGENES — reemplazar placeholders por imagenes reales
// Colocar las imagenes en /public/images/
// ============================================
export const IMAGES = {
  logo: '/images/logo.svg',
  hero: '/images/hero.svg',
  experiencia: '/images/experiencia.svg',
  queVasAHacer: '/images/que-vas-a-hacer.svg',
  lugar: '/images/lugar.svg',
  gallery: [
    '/images/gallery-1.svg',
    '/images/gallery-2.svg',
    '/images/gallery-3.svg',
    '/images/gallery-4.svg',
    '/images/gallery-5.svg',
    '/images/gallery-6.svg',
    '/images/gallery-7.svg',
    '/images/gallery-8.svg',
  ],
};

// Helper: genera la URL de WhatsApp
export function whatsappUrl(lang: 'es' | 'en' = 'es'): string {
  const text = lang === 'es' ? WHATSAPP_PREFILL_TEXT_ES : WHATSAPP_PREFILL_TEXT_EN;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
