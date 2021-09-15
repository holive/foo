module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
    options: {
      keyframes: true
    }
  },
  darkMode: false,
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1024px'
      }
    },
    colors: {
      primary: '#ac6dde',
      white: 'white',
      gray: {
        100: '#fcfcfc'
      },
      black: {
        100: '#333'
      },
      green: '#6DDEAC',
      yellow: '#DECB6D'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
