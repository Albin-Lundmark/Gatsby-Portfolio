/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Caveat', 'cursive'],
        body: ['Quicksand', 'sans-serif']
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.heading'),
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '2.5rem'
            },
            h2: {
              fontFamily: theme('fontFamily.heading'),
              fontSize: '1.875rem',
              fontWeight: '600',
              lineHeight: '2.25rem'
            },
            p: {
              fontFamily: theme('fontFamily.body'),
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.15rem'
            },
            ul: {
              listStyleType: 'none',
              listStyle: 'none'
            },
            a: {
              fontFamily: theme('fontFamily.body'),
              color: '#000000',
              textDecoration: 'none',
              '&:hover': {
                color: '#999999',
                textDecoration: 'underline',
                cursor: 'pointer'
              }
            }
          }
        }
      }),
      animation: {
        typing: 'typing 2s steps(20, end), blink .5s step-end infinite'
      },
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
