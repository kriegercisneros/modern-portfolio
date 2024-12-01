/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peach: '#f8f6f2', // Keep your existing peach color
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#E5E5E5'
        },
        accent: {
          DEFAULT: '#232323',
          soft: '#454545'
        },
        brutal: {
          red: '#FF4D4D',
          yellow: '#E0D27A',
          blue: '#DBA46D'
        },
        stone: {
          light: '#F5EAD5',
          medium: '#F5EAD5',
          dark: '#8b4408'
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0 0 #232323',
        'brutal-lg': '8px 8px 0 0 #232323',
        'brutal-xl': '12px 12px 0 0 #232323',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}