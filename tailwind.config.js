/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      'hero': "url('../public/img/hero-bg.png')",
      'info_bg': "url('../public/img/info-bg.png')",
      'action-bg': "url('../public/img/Action-bg.png')",
    },
    gridTemplateColumns: {
      'my-col1': '1fr 8fr',
      'my-col2': '4fr 5fr',
      'my-col3': '4fr 3fr',
      'my-col4': '1fr 1fr',
    },
    fontFamily:{
      'Libre': [ 'Libre Baskerville' ],
      'math' : [ 'math' ],
      'cursive' : [ 'cursive' ],
      'mono' : [ 'monospace' ], 
    }
  },
  plugins: [],
}

