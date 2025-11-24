/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#d9e2ff',
          200: '#b8c7ff',
          300: '#95a7ff',
          400: '#7c8bff',
          500: '#5c63ff',
          600: '#494cdf',
          700: '#3c3db3',
          800: '#2d2f82',
          900: '#1e1f52',
        },
      },
      boxShadow: {
        'card': '0 18px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};

