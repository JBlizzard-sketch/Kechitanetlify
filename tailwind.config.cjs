module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kechita: {
          DEFAULT: '#1E40AF',
          primary: '#1E40AF',
          accent: '#059669'
        }
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
