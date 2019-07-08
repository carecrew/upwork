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
};

export default UISetUp;
