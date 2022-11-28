const plugin = require('tailwindcss/plugin');

const sveltePut = plugin(
  ({ addComponents, addUtilities, addBase }) => {
    addBase({
      'h1,h2,h3,h4,h5,h6': {
        '@apply relative': {},
        '& .heading-anchor': {
          '@apply text-primary absolute top-0 bottom-0 right-full opacity-0 transition-opacity duration-150 mr-1':
            {},
          'text-decoration': 'none',
          'font-weight': 'inherit',
        },
        '&:hover .heading-anchor': {
          '@apply opacity-100': {},
        },
      },
    });

    addUtilities({
      '.bg-gradient-brand': {
        '@apply bg-gradient-to-r from-svelte to-[#42b883]': {},
      },
      '.text-gradient-brand': {
        '@apply bg-gradient-brand bg-clip-text text-transparent': {},
      },
      '.inset-center': {
        '@apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2': {},
      },
    });
    addComponents({
      '.c-badge': {
        '@apply rounded-lg text-white px-1.5 py-px': {},
      },
      '.c-badge-primary': {
        '@apply c-badge bg-primary-darker': {},
      },
      '.c-badge-secondary': {
        '@apply c-badge bg-secondary-darker': {},
      },
      '.c-badge-gray': {
        '@apply c-badge bg-gray-700': {},
      },
      '.c-badge-red': {
        '@apply c-badge bg-red-700': {},
      },
      '.c-badge-blue': {
        '@apply c-badge bg-blue-700': {},
      },
      '.c-container': {
        '@apply mx-auto w-full px-4 md:px-5 md:px-6 xl:px-8 max-w-[1440px]': {},
      },
      '.c-link': {
        '@apply hover:text-primary data-current:text-primary': {},
      },
      '.c-link-primary': {
        '@apply text-primary hover:underline': {},
      },
      '.c-link-bg': {
        '@apply data-current:text-primary data-current:hover:text-white hover:bg-primary hover:text-white':
          {},
      },
      '.c-callout': {
        '@apply before:border-l-4 before:border-primary before:pr-4 rounded bg-bg-accent p-4 italic':
          {},
      },
      '.c-btn': {
        '@apply block rounded py-2 px-4 shadow hover:shadow-lg': {},
        'min-width': '100px',
        '&:active': {
          '@apply scale-[0.98]': {},
        },
      },
      '.c-btn-primary': {
        '@apply c-btn bg-primary text-white': {},
        '&:hover': {
          '@apply bg-primary-dark': {},
        },
      },
      '.c-btn-primary-outline': {
        '@apply c-btn text-primary border border-primary bg-bg': {},
        '&:hover': {
          '@apply text-bg bg-primary-dark': {},
        },
      },
      '.c-btn-text': {
        '@apply inline-block text-primary hover:underline': {},
      },
      '.c-btn-text-secondary': {
        '@apply inline-block text-secondary hover:underline': {},
      },
      '.c-footnote': {
        '@apply inline-flex items-center justify-center rounded-full w-4 h-4 text-2xs': {},
      },
      '.c-footnote-red': {
        '@apply c-footnote bg-red-700 text-white': {},
      },
    });
  },
  {
    theme: {
      extend: {
        typography: ({ theme }) => ({
          DEFAULT: {
            css: {
              h1: {
                'font-size': '2rem',
              },
              'h1,h2,h3,h4,h5,h6': {
                'scroll-margin-top': theme('spacing.header'),
              },
              'h1,h2,h3': {
                'padding-bottom': '0.5rem',
                'border-bottom': `1px ${theme('colors.border')} solid`,
              },
              a: {
                'text-decoration': 'none',
                'font-weight': 'inherit',
                color: theme('colors.primary.DEFAULT'),
                '&:hover': {
                  'text-decoration': 'underline',
                },
              },
              code: {
                color: theme('colors.primary.darker'),
                'background-color': theme('colors.bg.accent'),
                'font-size': theme('fontSize.sm'),
                'font-weight': 'inherit',
                display: 'inline-block',
                padding: `0 ${theme('spacing.2')}`,
                'border-radius': theme('borderRadius.DEFAULT'),
              },
            },
          },
        }),
        fontSize: {
          '2xs': '0.625rem',
        },
        fontFamily: {
          fira: ['Fira Code', 'monospace'],
          inter: ['Inter', 'sans-serif'],
        },
        spacing: {
          header: 'var(--header-height)',
          sidebar: 'var(--sidebar-width)',
        },
        data: {
          current: 'current="true"',
          open: 'open="true"',
        },
        backgroundImage: {
          paper: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        },
        colors: {
          fg: '#3c3836',
          bg: {
            DEFAULT: '#fbf1c7',
            accent: '#ebdbb2',
          },
          border: '#d5c4a1',
          primary: {
            DEFAULT: '#d65d03',
            dark: '#cd5a02',
            darker: '#6D3203',
          },
          svelte: '#ef4623',
          secondary: {
            DEFAULT: '#98971a',
            darker: '#5B5A0B',
          },
          code: {
            fg: '#e5e7eb',
            bg: '#46433e',
          },
        },
        keyframes: {
          'fade-in-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(100px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        animation: {
          'fade-in-up': 'fade-in-up 500ms ease-out',
        },
        zIndex: {
          px: '1',
          // modal: '80', // a modal/dialog
          header: '90', // top-fixed navbar
          sidebar: '92', // sidebar
          // float: '100', // floating buttons and such
          // tooltip: '120', // tooltip
          // overlay: '150', // a full screen overlay
          // command: '200', // command palette
          // notification: '300', // notification
        },
      },
    },
  },
);

/** @type {import("tailwindcss").Config } */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts,md}', 'svelte.config.js'],
  plugins: [sveltePut, require('@tailwindcss/typography')],
};

module.exports = config;
