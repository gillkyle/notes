const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      serif: ['Palatino', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
    colors: { transparent: 'transparent', ...colors },
  },
};
