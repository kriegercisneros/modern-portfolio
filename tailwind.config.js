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
        'warm-coral': {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#FFD1D1',
          300: '#FFB4B4',
          400: '#FF9B9B',
          500: '#FF8585',
          600: '#FF6B6B',
          700: '#FF5252',
          800: '#FF3838',
          900: '#FF1F1F',
        },
      },
    },
  },
  plugins: [],
}