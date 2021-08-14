module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ui: {
          pri: "#FEBE44",
          base: "#252772",
          head: "#010D3E",
          text: "#9595A4",
          succ: "#F2F5F8"
        }
      },
      screens: {
        'big': '1320px',
      },
      borderRadius: {
        '4xl': '19px',
        'big': '53px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
