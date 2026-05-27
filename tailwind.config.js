/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071a45',
        ocean: '#0b2b6d',
        leaf: '#07866f',
        gold: '#f3b525',
        mist: '#f5f8fc',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(7, 26, 69, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
