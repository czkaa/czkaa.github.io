/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '500px' },
    },
    extend: {
      spacing: {
        'frame-w': 'min(100vw, 100dvw)',
        'frame-h': 'min(100vh, 100dvh)',
      },

      boxShadow: {
        custom:
          'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
      },

      animation: {
        rotate: 'rotate 600ms ease 1 linear infinite',
      },

      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(200deg)' },
        },
      },

      borderRadius: {
        custom: '0.15em',
      },
    },
  },
};
