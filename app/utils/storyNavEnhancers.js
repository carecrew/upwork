import React from 'react';
import { Section, Container, StyledText } from 'app/components/UI/core';

const indentation = n => {
  return new Array(n).join(' ');
};

const truncate = (string, max) => {
  if (string.length > max) {
    return `${string.substring(0, max - 4)} ...`;
  }

  return string;
};

const stringMaker = (ind, trunc) => (str, max, i) => {
  const indent = ind(i);
  const string = indent + str;

  return trunc(string, max);
};

const theMaker = maker => storyName => {
  const MAX_LEN = 20;
  const INDENT_LEN = 2;
  const str = maker(storyName, MAX_LEN, INDENT_LEN);

  return str;
};

const chapterMaker = maker => chapterName => {
  // note: theirs a strange bug where if these values
  // equal 25 and a string of 23 chars or greater is entered
  // the entire chapter disappears.
  // It also happens with pages with a different combination.

  const MAX_LEN = 23;
  const INDENT_LEN = 3;
  const str = maker(chapterName, MAX_LEN, INDENT_LEN);
  const display = () => {
    return (
      <Section>
        <Container alignItems="center" justifyContent="center" borderWidth={0}>
          <StyledText variant="storybook" color="storybook">
            {chapterName}
          </StyledText>
        </Container>
      </Section>
    );
  };

  return [str, display];
};

const pageMaker = maker => (pageName, pageComponent) => {
  const MAX_LEN = 25;
  const INDENT_LEN = 6;
  const str = maker(pageName, MAX_LEN, INDENT_LEN);

  return [str, pageComponent];
};

const makeString = stringMaker(indentation, truncate);
const the = theMaker(makeString);
const chapter = chapterMaker(makeString);
const page = pageMaker(makeString);

export default {
  the,
  chapter,
  page,
};
