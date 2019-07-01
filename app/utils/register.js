import React from 'react';
import { Navigation } from 'react-native-navigation';
import StoryBook from 'upwork/storybook';
import ThemeProvider from 'app/utils/themeProvider';
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
};

export default Register;
