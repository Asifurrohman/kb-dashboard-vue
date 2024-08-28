/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-1': '#0369A1',
        'dark-blue-2': '#075985',

        'hz-blue': '#56a2d6',
        'hz-white': '#fafafa',
        'hz-green': '#67AF46',

        'paragraph-slate-color': '#334155'
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

