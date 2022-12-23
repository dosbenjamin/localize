const plugin = require('tailwindcss/plugin') // eslint-disable-line @typescript-eslint/no-var-requires
const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(path.dirname(require.resolve('ui')), '**/*.tsx'), './app/**/*.tsx', './features/**/*.tsx'],
  theme: {
    colors: {
      white: '#FFF',
      orange: '#FF8906',
      purple: {
        180: '#484570',
        360: '#211F32',
        540: '#171624',
        720: '#14131F',
        900: '#0F0E17',
      },
      danger: '#FF2406',
    },
    fontFamily: {
      mono: 'Inconsolata, monospace',
    },
    fontSize: {
      base: ['100%', { lineHeight: '1.5' }],
      md: ['1.414rem', { lineHeight: '1.41467727675' }],
      lg: ['1.999rem', { lineHeight: '1.25039074711' }],
      xl: ['2.827rem', { lineHeight: '1.23811629449' }],
    },
    fontVariationSettings: {
      wght: {
        400: '400',
        500: '500',
        600: '600',
      },
      wdth: {
        100: '100',
        125: '125',
        150: '150',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          fontSize: theme('fontSize.base'),
        },
        body: {
          textRendering: 'optimizeLegibility',
          fontFamily: theme('fontFamily.mono'),
          '-webkit-font-smoothing': 'antialiased',
        },
      })
    }),
    plugin(({ addBase, matchUtilities, theme }) => {
      const fontVariationSettings = "'wght' var(--tw-variation-wght), 'wdth' var(--tw-variation-wdth)"

      addBase({
        ':root': {
          '--tw-variation-wght': '400',
          '--tw-variation-wdth': '100',
        },
      })

      matchUtilities(
        {
          'variation-wght': (/** @type {string} */ value) => ({
            '--tw-variation-wght': value,
            fontVariationSettings,
          }),
        },
        {
          values: theme('fontVariationSettings.wght'),
        },
      )

      matchUtilities(
        {
          'variation-wdth': (/** @type {string} */ value) => ({
            '--tw-variation-wdth': value,
            fontVariationSettings,
          }),
        },
        {
          values: theme('fontVariationSettings.wdth'),
        },
      )
    }),
  ],
}
