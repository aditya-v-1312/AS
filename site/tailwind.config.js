/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF8',
          100: '#FFF8F0',
          200: '#FDF0E2',
          300: '#F5E3CE',
        },
        blush: {
          50: '#FDF7F8',
          100: '#FBF0F3',
          200: '#F6DDE3',
          300: '#ECC0CC',
        },
        rose: {
          100: '#F2D3DB',
          200: '#E5B7C2',
          300: '#D99AA8',
          400: '#C77E8F',
          500: '#B06175',
        },
        burgundy: {
          500: '#944E63',
          600: '#783F50',
          700: '#613240',
          800: '#4D2532',
          900: '#381A24',
        },
        muted: {
          brown: '#8D746B',
          warm: '#A48E85',
          light: '#BAA79F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.15)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.2)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        heartbeat: 'heartbeat 2.2s ease-in-out infinite',
      },
      boxShadow: {
        'polaroid': '0 8px 30px rgba(120, 63, 80, 0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'polaroid-hover': '0 20px 40px rgba(120, 63, 80, 0.22), 0 8px 16px rgba(0,0,0,0.1)',
        'letter': '0 10px 40px -10px rgba(141, 116, 107, 0.25), 0 0 0 1px rgba(141, 116, 107, 0.08)',
        'envelope': '0 15px 35px -5px rgba(120, 63, 80, 0.25), 0 5px 15px rgba(0,0,0,0.07)',
      }
    },
  },
  plugins: [],
}
