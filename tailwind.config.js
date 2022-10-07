/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        preact: "#673ab8aa",
        vite: "#646cffaa"
      },
      dropShadow: {
        preact: "0 0 10px #673ab8aa",
        vite: "0 0 10px #646cffaa"
      }
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.5xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
        p: { fontSize: theme('fontSize.base') },
      })
    })
  ]
}