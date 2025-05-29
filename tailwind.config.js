/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5D4037',
        secondary: '#8D6E63',
        accent: '#FFAB00',
        cream: '#FFF8E1',
        'light-wood': '#F5F0E5',
        amber: {
          500: '#FFAB00',
          600: '#FB8C00',
        },
        success: '#2E7D32',
        warning: '#F57F17',
        error: '#C62828',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        smooth: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};