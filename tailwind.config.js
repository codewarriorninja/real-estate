/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        '42' :['162px'],
      },
      fontFamily:{
        Urbanist :["Urbanist", "sans-serif"],
      },
      colors:{
        'primary-purple' : '#703BF7',
      },
      backgroundColor:{
        'bg' : '#141414'
      },
      backgroundImage:{
        'Hero':'url(assets/images/BackGround.png)'
      }
    },
  },
  plugins: [],
  darkMode:'class'
}

