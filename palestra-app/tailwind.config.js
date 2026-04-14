/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1C1208',
        light: '#FFFFFF',
        beige: '#F0E6D6',
        'beige-secondary': '#C4A882',
        accent: '#D4845A',
        'blue-data': '#4A90D9',
        'red-data': '#D85A4A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
