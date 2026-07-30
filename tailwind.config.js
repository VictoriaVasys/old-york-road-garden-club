/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#2D5A1B',
        sage: '#5A8A47',
        mint: '#A8D5A2',
        cream: '#F7F3E9',
        parchment: '#EDE8D8',
        gold: '#C4922A',
        bark: '#6B4226',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
