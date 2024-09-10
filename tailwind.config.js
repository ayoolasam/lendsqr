/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily:{
        'work-sans': ['"Work Sans"', 'sans-serif'],
        "roboto": ['"Roboto"', 'sans-serif'],
          },
      colors:{
        background:"rgba(255, 255, 255, 1)",
        welcome:"rgba(33, 63, 125, 1)",
        details:"rgba(84, 95, 125, 1)",
        bColor:"rgba(84, 95, 125, 0.15)",
        lems:"rgba(57, 205, 204, 1)",
        select:"rgba(33, 63, 125, 1)",
        item:"rgba(33, 63, 125, 1)",
        bordercol:"rgb(222,227,236)",
        users:"rgb(252,232,255)",
        activeUsers:"rgb(238,232,255)",
        loanUsers:"rgb(254,239,236)",
        saving:"rgb(255,235,240)",
        hspano:"rgba(84, 95, 125, 1)",
        first:"rgb(245,245,247)",
        second:"rgb(253,247,230)",
        third:"rgb(252,230,235)",
        fourth:"rgb(243,252,246)",
        inactive:"rgb(130,169,211)",
        pending:"rgb(245,221,144)",
        blacklist:"rgb(234,60,103)",
        active:"rgb(80,211,116)",
        bground:"rgb(251,251,251)",
        redo:"rgba(228, 3, 59, 1)",
        bder:"rgb(229,231,235)",
        bders:"rgb(238,241,245)"



        

      }
    },
  },
  plugins: [],
}

