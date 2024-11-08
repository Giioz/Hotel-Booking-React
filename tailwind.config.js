/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        jomhuria : ['Jomhuria', 'serif']
      },
      spacing : {
        lg: '10.3rem',
        sm : '2.5rem'
      }
    },
  },
  plugins: [],
}

