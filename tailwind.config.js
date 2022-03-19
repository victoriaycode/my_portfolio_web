module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0F1624',
        background2: "hsl(232.7,27.3%,23.7%)",

      },
      fontFamily: {
        fancy: ['Space Grotesk']
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};