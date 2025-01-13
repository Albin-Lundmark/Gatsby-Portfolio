/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '2.5rem'
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              lineHeight: '2.25rem'
            },
            p: {
              fontSize: '1.125rem',
              fontWeight: '400',
              lineHeight: '1.15rem'
            },
            ul: {
              listStyleType: 'none',
              listStyle: 'none'
            },
            a: {
              color: '#000000',
              textDecoration: 'none',
              '&:hover': {
                color: '#999999',
                textDecoration: 'underline'
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
