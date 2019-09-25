import { Navigation } from 'react-native-navigation';

const NavigationHelpers = {
  toScreen: (props, screenName) => {
    Navigation.push(props.componentId, {
      component: {
        name: screenName,
      },
    });
  },
};

export default NavigationHelpers;
