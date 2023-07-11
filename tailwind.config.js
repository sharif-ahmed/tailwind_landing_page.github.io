/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors : {
        "color-primary" : "#01051e",
        "color-primary-light" : "#020726",
        "color-primary-dark" : "#010417",
        "color-secondary" : "#ff7d3b",
        "color-gray" : "#333",
        "color-white" : "#fff",
        "color-blob" : "#a427df",
      },
      container : {
        center :true,
        padding : {
          default: '20px',
          md: "50px",
        }
      },
    },
  },
  plugins: [],
}

