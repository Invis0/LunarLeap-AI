/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'dark-primary': 'var(--dark-primary)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-accent': 'var(--dark-accent)',
        dark: {
          DEFAULT: 'var(--dark-primary)',
          primary: 'var(--dark-primary)',
          secondary: 'var(--dark-secondary)',
          accent: 'var(--dark-accent)',
        },
        blue: {
          primary: 'var(--primary)',
          light: 'var(--primary-light)',
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
} 