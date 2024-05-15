/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : ['jit'],
  purge: {
    content : ["./src/**/*.{html,js}"],
    safelist: [
      'rotate-45',
      '-rotate-45',
      'absolute',
      'h-56'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'noto': ['Noto Serif', 'serif'],
    }
  },
  plugins: [],
}
}