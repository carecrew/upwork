/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf, addDecorator } from '@storybook/react-native';
import { withNotes } from '@storybook/addon-ondevice-notes';

import storyNavEnhancers from 'app/utils/storyNavEnhancers';

import screen1 from 'app/screens/screen1/screen1.pages';
import screen2 from 'app/screens/screen2/screen2.pages';

const { the, chapter, page } = storyNavEnhancers;

addDecorator(withNotes);

storiesOf(the('Screens'), module)
  .add(...chapter('Screen1'))
    .add(...page('1.0 screen1', () => screen1.screen()))
  .add(...chapter('Screen2'))
    .add(...page('1.0 screen2', () => screen2.screen()))