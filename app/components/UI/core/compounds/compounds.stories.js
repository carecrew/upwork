/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf, addDecorator } from '@storybook/react-native';
import { withNotes } from '@storybook/addon-ondevice-notes';

import storyNavEnhancers from 'app/utils/storyNavEnhancers';
import circleIcon from 'app/components/UI/core/compounds/circleIcon/circleIcon.pages';
import button from 'app/components/UI/core/compounds/button/button.pages';

const { the, chapter, page } = storyNavEnhancers;

addDecorator(withNotes);

storiesOf(the('Compounds'), module)
  .add(...chapter('CircleIcon'))
    .add(...page('1.0 default', () => circleIcon.default()))
    .add(...page('1.0 name', () => circleIcon.name()))
    .add(...page('1.0 color', () => circleIcon.color()))
    .add(...page('1.0 bg', () => circleIcon.bg()))
    .add(...page('1.0 size', () => circleIcon.size()))
    .add(...page('1.0 iconSize', () => circleIcon.iconSize()))
    .add(...page('1.0 borderWidth', () => circleIcon.borderWidth()))
    .add(...page('1.0 borderColor', () => circleIcon.borderColor()))
    .add(...page('1.0 family', () => circleIcon.family()))
  .add(...chapter('Button'))
    .add(...page('2.0 default', () => button.default()))
    .add(...page('2.1 variants', () => button.variants()))
    .add(...page('2.2 disabled', () => button.disabled()))
    .add(...page('2.3 themed', () => button.themed()))
    .add(...page('2.4 anyColor', () => button.anyColor()))
    .add(...page('2.5 setHeight', () => button.setHeight()))
    .add(...page('2.6 layout', () => button.layout()))