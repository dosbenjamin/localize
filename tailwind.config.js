// eslint-disable-next-line
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      orange: '#FF8906',
      purple: {
        180: '#484570',
        360: '#211F32',
        540: '#171624',
        720: '#14131F',
        900: '#0F0E17'
      }
    },
    fontFamily: {
      mono: ['var(--font-inconsolata)']
    },
    fontSize: {
      base: ['100%', { lineHeight: '1.5' }],
      md: ['1.414rem', { lineHeight: '1.41467727675' }],
      lg: ['1.999rem', { lineHeight: '1.25039074711' }],
      xl: ['2.827rem', { lineHeight: '1.23811629449' }]
    },
    fontVariationSettings: {
      wght: {
        400: '400',
        500: '400',
        600: '600'
      },
      wdth: {
        100: '100',
        125: '125',
        150: '150'
      }
    }
  },
  plugins: [
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        html: {
          fontSize: theme('fontSize.base')
        }
      })

      addUtilities({
        '.optimize-legibility': {
          textRendering: 'optimizeLegibility'
        }
      })
    }),
    plugin(({ matchUtilities, theme }) => {
      const fontVariationSettings = "'wght' var(--tw-variation-wght), 'wdth' var(--tw-variation-wdth)"

      matchUtilities(
        {
          'variation-wght': (/** @type {string} */ value) => ({
            '--tw-variation-wght': value,
            fontVariationSettings
          })
        },
        {
          values: theme('fontVariationSettings.wght')
        }
      )

      matchUtilities(
        {
          'variation-wdth': (/** @type {string} */ value) => ({
            '--tw-variation-wdth': value,
            fontVariationSettings
          })
        },
        {
          values: theme('fontVariationSettings.wdth')
        }
      )
    })
  ]
}
