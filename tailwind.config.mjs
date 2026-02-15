/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        arepa: {
          DEFAULT: '#E8973C',
          light: '#F5C478',
          dark: '#C67B2E',
          50: '#FFF8E7',
        },
        verde: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          forest: '#2D5016',
        },
        crema: {
          DEFAULT: '#FFF8E7',
          dark: '#F5E6CC',
        },
        marron: {
          DEFAULT: '#3D2B1F',
          light: '#5D4037',
          medium: '#795548',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
