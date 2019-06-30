import React from 'react';
import { StyledView, Section, Container, Block } from 'app/components/UI/core';

const pages = {
  default: () => {
    return <Container />;
  },
  inSection: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={2} borderColor="snow" />
        </Section>
      </StyledView>
    );
  },
  flexHeight: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={2} borderColor="snow" />
          <Container borderWidth={2} borderColor="snow" />
        </Section>
      </StyledView>
    );
  },
  setFlex: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={2} borderColor="snow" />
          <Container flex={2} borderWidth={2} borderColor="snow" />
        </Section>
      </StyledView>
    );
  },
  withBlocks: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={2} borderColor="snow">
            <Block bg="powderblue" />
            <Block bg="moccasin" />
          </Container>
          <Container flex={2} borderWidth={2} borderColor="snow">
            <Block bg="powderblue" />
            <Block bg="moccasin" />
            <Block bg="powderblue" />
            <Block bg="moccasin" />
          </Container>
        </Section>
      </StyledView>
    );
  },
};

export default pages;
