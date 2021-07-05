module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      zIndex: {
        '-1': '-1'
      },
      width: {
        'sidebar-box': '360px'
      },
      colors: {
        gray: {
          darkest: '#141414',
          dark: '#1E1E1E',
          DEFAULT: '#2A2A2C',
          light: '#8C8C94',
          lighter: '#B7B8BD',
          lightest: '#F7F8FD',
          border: '#A4A4AA'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
