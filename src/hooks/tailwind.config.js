/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        bebas:    ['"Bebas Neue"', 'sans-serif'],
        dm:       ['"DM Sans"', 'sans-serif'],
      },

      colors: {
        'ev-yellow': '#f9ab00',
        'ev-blue':   '#4285f4',
        'ev-green':  '#34a853',
        'ev-red':    '#ea4335',
        'ev-white':  '#f8f6f1',
        'ev-black':  '#050505',
        'ev-modal':  '#0e0e0e',
      },

      backgroundImage: {
        'ev-noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        'ev-glow':    'radial-gradient(circle, rgba(249,171,0,0.07) 0%, transparent 70%)',
        'ev-sep':     'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
        'ev-img-overlay': 'linear-gradient(to bottom, transparent 40%, rgba(5,5,5,.85))',
        'ev-scroll':  'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
      },

      keyframes: {
        'ev-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(1.3)' },
        },
        'ev-scroll-down': {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        'ev-fadein': {
          from: { opacity: '0', transform: 'translateX(-50%) translateY(20px)' },
          to:   { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
      },

      animation: {
        'ev-pulse':       'ev-pulse 2s infinite',
        'ev-scroll-down': 'ev-scroll-down 2s 1s infinite',
        'ev-fadein':      'ev-fadein 2s 1s both',
      },
    },
  },
  plugins: [],
};