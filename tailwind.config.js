/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '979px',
      xl: '1440px'
    },
    extend: {
      // colors: {
      //   bg: '#121423',
      //   lightGreen: '#ace731',
      //   gray: '#ffffff04',
      // }
    },
  },
  plugins: [],
}

