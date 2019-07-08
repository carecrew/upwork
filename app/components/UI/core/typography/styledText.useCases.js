import { Theme } from 'app/theme';

const color = Theme.colors;

const useCases = {
  default: {
    color: color.dark,
  },
  activeOnLight: {
    color: color.darker,
  },
  activeOnWhite: {
    color: color.i,
  },
  activeOnDark: {
    color: color.lightest,
  },
  secondary: {
    color: color.dark,
  },
  placeholder: {
    color: color.light,
  },
  storybook: {
    color: 'darkslateblue',
  },
};

export default useCases;
