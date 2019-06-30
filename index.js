/* eslint-disable no-console */
/* eslint-disable no-undef */

import { YellowBox } from 'react-native';
import Register from './app/utils/register';
import UISetup from './app/utils/UISetup';

const CONFIG = require('./config.json');

if (CONFIG.useStoryBook) {
  Register.storybook();
  UISetup.storybook();
  YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted']);
}

if (CONFIG.useApp) {
  Register.screens();
  UISetup.app();
}
