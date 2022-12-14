const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'white': '#FFF',
      'orange': '#FF8906',
      'purple': {
        '180': '#484570',
        '360': '#211F32',
        '540': '#171624',
        '720': '#14131F',
        '900': '#0F0E17'
      }
    },
    fontFamily: {
      'mono': ['var(--font-inconsolata)']
    },
    fontSize: {
      'base': ['100%', { lineHeight: '1.5' }],
      'md': ['1.414rem', { lineHeight: '1.41467727675' }],
      'lg': ['1.999rem', { lineHeight: '1.25039074711' }],
      'xl': ['2.827rem', { lineHeight: '1.23811629449' }],
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        'html': {
          fontSize: theme('fontSize.base')
        }
      })
    })
  ]
}
