import React from 'react';
import { Navigation } from 'react-native-navigation';
import StoryBook from 'upwork/storybook';
import ThemeProvider from 'app/utils/themeProvider';

import { Screen1, Screen2 } from 'app/screens';

// Note: for future reference, possible appollo setup
// import withProvider from 'app/apollo/index'
// Navigation.registerComponent('Login', () => withProvider(Login))

const Register = {
  storybook() {
    Navigation.registerComponent(
      'StoryBook',
      () => props => (
        <ThemeProvider>
          <StoryBook {...props} />
        </ThemeProvider>
      ),
      () => StoryBook,
    );
  },

  screens() {
    Navigation.registerComponent(
      'Screen1',
      () => props => (
        <ThemeProvider>
          <Screen1 {...props} />
        </ThemeProvider>
      ),
      () => Screen1,
    );

    Navigation.registerComponent(
      'Screen2',
      () => props => (
        <ThemeProvider>
          <Screen2 {...props} />
        </ThemeProvider>
      ),
      () => Screen2,
    );
  },
};

export default Register;
