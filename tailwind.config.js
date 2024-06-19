/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#423FE5',
        "custom-color-1": '#EEEEEE',
        'custom-color-2': '#FFFFFF',
      },
      margin: {
        '26': '26rem',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: '7px 7px rgba(249, 87, 0, 0.3)'
        // Replace the rgba values with your custom color (for #F95700)
      }
    },
  },
  plugins: [],
}