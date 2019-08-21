import { Theme } from 'app/theme';

const fontWeight = Theme.typography.systemWeights;

const variants = {
  default: {
    fontWeight: fontWeight.regular,
    fontSize: 16,
  },
  heading: {
    fontWeight: fontWeight.bold,
    fontSize: 20,
    numberOfLines: 1,
  },
  pageTitle: {
    fontWeight: fontWeight.medium,
    fontSize: 20,
    numberOfLines: 1,
  },
  menuTitle: {
    fontWeight: fontWeight.medium,
    fontSize: 14,
    numberOfLines: 1,
  },
  body: {
    fontWeight: fontWeight.regular,
    fontSize: 16,
  },
  secondary: {
    fontWeight: fontWeight.regular,
    fontSize: 14,
  },
  listItem: {
    fontWeight: fontWeight.regular,
    fontSize: 16,
  },
  button: {
    caps: true,
    fontWeight: fontWeight.regular,
    fontSize: 16,
    numberOfLines: 1,
  },
  tab: {
    caps: true,
    fontWeight: fontWeight.regular,
    fontSize: 16,
    numberOfLines: 1,
  },
  input: {
    fontWeight: fontWeight.regular,
    fontSize: 16,
  },
  label: {
    fontWeight: fontWeight.medium,
    fontSize: 14,
  },
  feedback: {
    fontWeight: fontWeight.regular,
    fontSize: 12,
  },
  storybook: {
    fontWeight: fontWeight.medium,
    fontSize: 32,
  },
  upworkNumber: {
    fontWeight: fontWeight.thin,
    fontSize: 128,
    numberOfLines: 1,
  },
};

export default variants;
