/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
        headerColor:'hsl(356, 100%, 66%)',
        footerColor:'hsl(240, 10%, 16%)',
        headingsColor:'hsl(208, 49%, 24%)',
        hoverColor:'hsl(355, 100%, 74%)',
        whiteText:'hsl(0, 0%, 100%)',
        footerText:'hsl(240, 2%, 79%)',
        bodyColor:'hsl(207, 13%, 34%)',
        lightRed:'hsl(353, 100%, 62%)',
        vlightRed:'hsl(13, 100%, 72%)'

      },

      maxWidth:{
        xl:'1440px',
        sm: '375px'
      },

      borderRadius:{
        radius:'150px'
      },

      fontFamily:{
        overpass:['Overpass',],
        ubuntu:['Ubuntu']
      }




    },
  },
  plugins: [],
}