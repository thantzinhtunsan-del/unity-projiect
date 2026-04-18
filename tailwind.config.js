/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#008080',
          dark: '#006666',
        },
        gold: {
          accent: '#D4AF37',
          hover: '#B8962E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'Noto Sans Myanmar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
