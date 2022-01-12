module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'once': 'bounceonce 500ms ease',
      },
      keyframes: {
        bounceonce: {
          '0%': {transform: 'translateY(-15%)'},
          '50%': {transform: 'translateY(-5%)'},
          '100%': {transform: 'translateY(0)'}
        }
      }
      },
    },
  plugins: [],
}
