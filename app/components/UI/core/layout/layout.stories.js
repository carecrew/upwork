/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf, addDecorator } from '@storybook/react-native';
import { withNotes } from '@storybook/addon-ondevice-notes';

import storyNavEnhancers from 'app/utils/storyNavEnhancers';
import styledView from 'app/components/UI/core/layout/styledView/styledView.pages';
import section from 'app/components/UI/core/layout/section/section.pages';
import container from 'app/components/UI/core/layout/container/container.pages';
import block from 'app/components/UI/core/layout/block/block.pages';

const { the, chapter, page } = storyNavEnhancers;

addDecorator(withNotes);

storiesOf(the('Layout'), module)
  .add(...chapter('StyledView'))
    .add(...page('1.0 default', () => styledView.default()))
  .add(...chapter('Section'))
    .add(...page('2.0 default', () => section.default()))
    .add(...page('2.1 bg', () => section.bg()))
    .add(...page('2.2 padding', () => section.padding()))
    .add(...page('2.3 flex height', () => section.flexHeight()))
    .add(...page('2.4 set flex', () => section.setFlex()))
    .add(...page('2.5 withContainers', () => section.withContainers()))
  .add(...chapter('Container'))
    .add(...page('3.0 default', () => container.default()))
    .add(...page('3.1 in section', () => container.inSection()))
    .add(...page('3.2 flex height', () => container.flexHeight()))
    .add(...page('3.3 set flex', () => container.setFlex()))
    .add(...page('3.4 with blocks', () => container.withBlocks()))
  .add(...chapter('Block'))
    .add(...page('4.0 default', () => block.default()))
    .add(...page('4.0 in container', () => block.inContainer()))
    .add(...page('4.1 flex width', () => block.flexWidth()))
    .add(...page('4.2 set width', () => block.setWidth()))
    .add(...page('4.3 flex height', () => block.flexHeight()))
    .add(...page('4.4 padding', () => block.padding()))
    .add(...page('4.5 layout', () => block.layout()));
