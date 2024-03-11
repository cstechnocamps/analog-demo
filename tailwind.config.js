/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,ts,md}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f6f5f5',
          '100': '#e7e6e6',
          '200': '#d2d0cf',
          '300': '#b2b0ae',
          '400': '#8b8985',
          '500': '#706e6a',
          '600': '#605e5a',
          '700': '#51504d',
          '800': '#4a4947',
          '900': '#3e3d3b',
          '950': '#272725',
        },
  
        'secondary': {
          '50': '#fcfcea',
          '100': '#f9f8c8',
          '200': '#f5ef93',
          '300': '#efe055',
          '400': '#e7cb1b',
          '500': '#d8b61a',
          '600': '#bb9013',
          '700': '#956813',
          '800': '#7c5217',
          '900': '#6a4419',
          '950': '#3d240b',
        },
      },
    },
  },
  plugins: [],
};
