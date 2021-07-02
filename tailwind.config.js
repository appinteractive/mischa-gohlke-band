/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',

  theme: {
    extend: {
      minWidth: {
        20: '20rem',
      },
      fontFamily: {
        sans: [
          'Signika',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        serif: [
          'Lora',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      colors: {
        gray: colors.gray,
      },
      spacing: {
        '16/9': '56.25%',
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
