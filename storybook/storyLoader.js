/* eslint-disable global-require */
function loadStories() {
  require('../app/components/UI/core/compounds/compounds.stories');
  require('../app/components/UI/core/typography/typography.stories');
  require('../app/components/UI/core/primitives/primitives.stories');
  require('../app/components/UI/core/layout/layout.stories');
}

const stories = [
  '../app/components/UI/core/compounds/compounds.stories',
  '../app/components/UI/core/typography/typography.stories',
  '../app/components/UI/core/primitives/primitives.stories',
  '../app/components/UI/core/layout/layout.stories',
];

module.exports = {
  loadStories,
  stories,
};
