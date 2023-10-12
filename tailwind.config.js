/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'white': '#FCFCFC',
        'pink':'#F04A94'
      },
      boxShadow:{
          "pre": '0px 0px 10px 0px rgba(0, 0, 0, 0.25)'
        },
        fontFamily:{
          'alata':["Alata", 'sans-serif'],
          'montserrat':["Montserrat", 'sans-serif'],
        }
    },
  },
  plugins: [],
}
