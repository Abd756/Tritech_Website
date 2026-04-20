module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c0392b', // TRI TECH Red
        accent: '#2856a3',  // TRI TECH Blue
        yellow: '#f1c40f'   // TRI TECH Yellow
      },
      fontFamily: {
        sans: ['Montserrat', 'Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};