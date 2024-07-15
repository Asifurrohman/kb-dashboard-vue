/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': '#2dce89',
        'soft-yellow': '#faca12',
        'soft-blue': '#4384F6',
        'dark-blue-1': '#0369A1',
        'dark-blue-2': '#075985',
        'light-grey': '#ECF0F6',
        'dark-grey': '#5C5F6C',

        'hz-blue': '#56a2d6',
        'hz-white': '#fafafa',
        'heading-slate-color': '#0f172a',
        'paragraph-slate-color': '#334155'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'], //Open Sans untuk paragraf dan gunakan class leading-7 untuk membuat line-heigt 28px
        figtree: ['Figtree', 'sans-serif']

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

