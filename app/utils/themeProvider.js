import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider as Provider } from 'styled-components';
import { Theme } from 'app/theme';

const ThemeProvider = ({ children }) => {
  return <Provider theme={Theme}>{children}</Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
