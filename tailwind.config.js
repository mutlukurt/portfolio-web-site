/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#7B61FF',
        'primary-yellow': '#FFD93D',
        'soft-blue': '#EAF4FC',
        'light-gray': '#F8F9FA'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'Poppins', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-in-out',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
        'diagonal-reverse': 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
      }
    },
  },
  plugins: [],
}