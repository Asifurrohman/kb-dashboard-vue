/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': '#2dce89',
        'soft-yellow': '#faca12',
        'hz-blue': '#56a2d6',
        'soft-blue': '#4384F6',
        'dark-blue': '#1D54B4',
        'light-grey': '#ECF0F6',
        'dark-grey': '#5C5F6C'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']

      },
    },
  },
  plugins: [],
}

