const customColor = require('./config/tailwind/color')
const customAnimation = require('./config/tailwind/animation')
const customKeyFrames = require('./config/tailwind/keyframes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    animationDelay: {
      none: '0s',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      800: '800ms',
      900: '900ms',
      1000: '1000ms',
      1100: '1100ms',
      1200: '1200ms',
      1300: '1300ms',
      1400: '1400ms',
      1500: '1500ms'
    },
    extend: {
      colors: customColor,
      animation: customAnimation,
      keyframes: customKeyFrames,
      fontFamily: {
        prompt: ['Prompt'],
        sarabun: ['Sarabun']
      },
      fontSize: {
        paragraph: [
          '15px',
          {
            lineHeight: '22px'
          }
        ]
      },
      screens: {
        xs: '480px'
      },
      spacing: {
        4.5: '1.125rem',
        6.5: '1.625rem',
        15: '3.75rem',
        22: '5.5rem',
        26: '6.5rem'
      },
      borderWidth: {
        0.5: '0.5px'
      },
      boxShadow: {
        card: '0px 2px 15px rgba(0, 0, 0, 0.05)',
        section: '0px 6px 30px rgba(0, 0, 0, 0.08)',
        'menu-button': '0px 8px 24px 0px rgba(0, 0, 0, 0.08)',
        'prev-button': '0px 2px 1px rgba(0, 0, 0, 0.25)'
      },
      lineClamp: {
        5: '5'
      }
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover'],
    extend: {
      fontFamily: ['hover', 'focus'],
    }
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const values = theme('animationDelay')
      var utilities = Object.entries(values).map(([key, value]) => {
        return {
          [`.${e(`animation-delay-${key}`)}`]: { animationDelay: `${value}` }
        }
      })
      addUtilities(utilities)
    },
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp')
  ],
  corePlugins: {
    fontFamily: true
  }
}
