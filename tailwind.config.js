/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EC4899', // Rosa/fucsia principal
          light: '#F9A8D4',
          dark: '#DB2777',
        },
        secondary: {
          DEFAULT: '#10B981', // Verde para CTAs
          light: '#34D399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#8B5CF6', // Lila para gradientes
        },
      },
      fontFamily: {
        sans: [
          'Geom',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      keyframes: {
        heroFade: {
          '0%': { opacity: '0', transform: 'scale(1.05)' },
          '10%': { opacity: '1' },
          '30%': { opacity: '1' },
          '40%': { opacity: '0', transform: 'scale(1)' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        heroFade: 'heroFade 9s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}


