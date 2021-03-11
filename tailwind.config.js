module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      transformOrigin: {
        // eslint-disable-next-line prettier/prettier
          '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      form: '#e9e0dd',
    }),
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'checked'],
      placeholderOpacity: ['responsive', 'hover', 'focus', 'focus-within'],
      transformOrigin: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  },
};
