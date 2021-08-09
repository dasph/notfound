module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    preserveHtmlElements: false,
    options: { keyframes: true },
    content: ['./src/index.html']
  },
  theme: {
    fontFamily: {
      sans: ['Inconsolata', 'monospace']
    },
    extend: {
      colors: {
        main: '#101010'
      },
      animation: {
        'type': 'type .5s alternate infinite'
      },
      keyframes: {
        type: {
          'from': { 'box-shadow': 'inset -2px 0px 0px currentColor' },
          'to': { 'box-shadow': 'inset -2px 0px 0px transparent' }
        }
      },
    }
  }
}
