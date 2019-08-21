import { Navigation } from 'react-native-navigation';
import StoryBook from 'upwork/storybook';
import { Screen1, Screen2 } from 'app/screens';
import withProviders from './providers';

const Register = {
  storybook() {
    Navigation.registerComponent('StoryBook', () => withProviders(StoryBook));
  },
  screens() {
    Navigation.registerComponent('Screen1', () => withProviders(Screen1));
    Navigation.registerComponent('Screen2', () => withProviders(Screen2));
  },
};

export default Register;
