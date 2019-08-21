/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf, addDecorator } from '@storybook/react-native';
import { withNotes } from '@storybook/addon-ondevice-notes';

import storyNavEnhancers from 'app/utils/storyNavEnhancers';
import styledText from 'app/components/UI/core/typography/styledText.pages';

const { the, chapter, page } = storyNavEnhancers;

addDecorator(withNotes);

storiesOf(the('Typography'), module)
  .add(...chapter('StyledText'))
    .add(...page('1.0 default', () => styledText.default()))
    .add(...page('1.1 variants', () => styledText.variants()))
    .add(...page('1.2 activeOnDark', () => styledText.activeOnDark()))
    .add(...page('1.3 activeOnLight', () => styledText.activeOnLight()))
    .add(...page('1.4 activeOnWhite', () => styledText.activeOnWhite()))
    .add(...page('1.5 secondary', () => styledText.secondary()))
    .add(...page('1.6 placeholder', () => styledText.placeholder()))
    .add(...page('1.7 any color', () => styledText.anyColor()))
    .add(...page('1.8 capitalize', () => styledText.capitalize()))
    .add(...page('1.9 opacity', () => styledText.opacity()))