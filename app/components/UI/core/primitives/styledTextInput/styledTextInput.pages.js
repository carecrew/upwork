/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Section, Container, Block, StyledTextInput } from 'app/components/UI/core';

const pages = {
  default: () => {
    return <StyledTextInput />;
  },
  borderWidth: () => {
    return (
      <Section>
        <Container alignItems="center" justifyContent="center">
          <Block>
            <StyledTextInput borderWidth={2} />
          </Block>
        </Container>
      </Section>
    );
  },
};

export default pages;
