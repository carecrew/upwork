import { Navigation } from 'react-native-navigation';

const UISetUp = {
  storybook() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            id: 'StoryBook',
            children: [
              {
                component: {
                  name: 'StoryBook',
                },
              },
            ],
            options: {
              topBar: {
                visible: false,
                height: 0,
              },
            },
          },
        },
      });
    });
  },

  app() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          stack: {
            id: 'upworkDemo',
            children: [
              {
                component: {
                  name: 'Screen1',
                },
              },
              {
                component: {
                  name: 'Screen2',
                },
              },
            ],
            options: {
              topBar: {
                visible: true,
                height: 48,
              },
            },
          },
        },
      });
    });
  },
};

export default UISetUp;
