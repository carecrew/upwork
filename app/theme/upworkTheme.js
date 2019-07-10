// prettier-ignore

const Theme =  {
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512,
  ],

  size: [
    0, 4, 8, 16, 32, 48, 64, 128, 256, 512,
  ],

  borders: [
    0, 1, 2, 4, 8,
  ],

  // for use with react-native-typography
  typography: {
    systemWeights: {
      thin: 'thin',
      light: 'light',
      regular: 'regular',
      medium: 'semibold',
      bold: 'bold',
    },
  },

  colors: {
    i:            '#0D77D8',
    ii:           '#D93350',
    iii:          '#31C5F4',
    iv:           '#F9A825',
    v:            '#2CBB53',
    lightest:     '#FFFFFF',
    lighter:      '#CDCDCD',
    light:        '#AAAAAA',
    neutral:      '#9B9B9B',
    dark:         '#5D5D5D',
    darker:       '#1B1B1B',
    darkest:      '#000000',
    transparent:  'transparent',
  },


  icon: {
    family: ['feather', 'fontAwesome', 'material', 'materialComm'],

    size: {
      xxs:          4,
      xs:           8,
      s:            12,
      sm:           16,
      m:            20,
      l:            24,
      xl:           32,
      xxl:          64,
    },
  },
};

export default Theme;
