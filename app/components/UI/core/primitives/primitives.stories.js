/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf, addDecorator } from '@storybook/react-native';
import { withNotes } from '@storybook/addon-ondevice-notes';

import storyNavEnhancers from 'app/utils/storyNavEnhancers';
import circle from 'app/components/UI/core/primitives/circle/circle.pages';
import circleImage from 'app/components/UI/core/primitives/circleImage/circleImage.pages';
import icon from 'app/components/UI/core/primitives/icon/icon.pages';
import roundBorderView from 'app/components/UI/core/primitives/roundBorderView/roundBorderView.pages';
import underlineView from 'app/components/UI/core/primitives/underlineView/underlineView.pages';
import overlay from 'app/components/UI/core/primitives/overlay/overlay.pages';
import styledTextInput from 'app/components/UI/core/primitives/styledTextInput/styledTextInput.pages';

const { the, chapter, page } = storyNavEnhancers;

addDecorator(withNotes);

storiesOf(the('Primitives'), module)
  .add(...chapter('Circle'))
  .add(...page('1.0 default', () => circle.default()))
  .add(...page('1.1 bg', () => circle.bg()))
  .add(...page('1.2 size', () => circle.size()))
  .add(...page('1.3 borderWidth', () => circle.borderWidth()))
  .add(...page('1.4 borderColor', () => circle.borderColor()))
  .add(...page('1.5 opacity', () => circle.opacity()))
  .add(...chapter('CircleImage'))
  .add(...page('2.0 default', () => circleImage.default()))
  .add(...page('2.1 size', () => circleImage.size()))
  .add(...page('2.2 borderWidth', () => circleImage.borderWidth()))
  .add(...page('2.3 borderColor', () => circleImage.borderColor()))
  .add(...page('2.4 opacity', () => circleImage.opacity()))
  .add(...chapter('Icon'))
  .add(...page('3.0 default', () => icon.default()))
  .add(...page('3.1 name', () => icon.name()))
  .add(...page('3.2 color', () => icon.color()))
  .add(...page('3.3 size', () => icon.size()))
  .add(...page('3.4 positions', () => icon.positions()))
  .add(...page('3.5 family', () => icon.family()))
  .add(...chapter('RoundBorderView'))
  .add(...page('3.0 default', () => roundBorderView.default()))
  .add(...page('3.1 bg', () => roundBorderView.bg()))
  .add(...page('3.2 withStyledText', () => roundBorderView.withStyledText()))
  .add(...page('3.3 borderWidth', () => roundBorderView.borderWidth()))
  .add(...page('3.4 borderColor', () => roundBorderView.borderColor()))
  .add(...page('3.5 flexHeight', () => roundBorderView.flexHeight()))
  .add(...page('3.6 setHeight', () => roundBorderView.setHeight()))
  .add(...page('3.7 flexWidth', () => roundBorderView.flexWidth()))
  .add(...page('3.8 setWidth', () => roundBorderView.setWidth()))
  .add(...chapter('UnderlineView'))
  .add(...page('4.0 default', () => underlineView.default()))
  .add(...page('4.1 inContainer', () => underlineView.inContainer()))
  .add(...page('4.2 inSection', () => underlineView.inSection()))
  .add(...page('4.3 lineColor', () => underlineView.lineColor()))
  .add(...page('4.4 asChildren', () => underlineView.asChildren()))
  .add(...page('4.5 withChild', () => underlineView.withChild()))
  .add(...page('4.6 withChildren', () => underlineView.withChildren()))
  .add(...page('4.7 setHeight', () => underlineView.setHeight()))
  .add(...chapter('OverLay'))
  .add(...page('4.0 default', () => overlay.default()))
  .add(...page('4.0 overElements', () => overlay.overElements()))
  .add(...page('4.0 withChildren', () => overlay.withChildren()))
  .add(...chapter('StyledTextInput'))
  .add(...page('5.0 default', () => styledTextInput.default()))
  .add(...page('5.0 borderWidth', () => styledTextInput.borderWidth()));
