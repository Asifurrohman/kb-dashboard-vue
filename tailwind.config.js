/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': '#2dce89',
        'hz-blue': '#56a2d6',
        'soft-blue': '#4384F6',
        'light-grey': '#E5E7EB',
        'dark-grey': '#5C5F6C'
      },
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [],
}

