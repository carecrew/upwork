import React from 'react';
import { StyledView, Section, Container } from 'app/components/UI/core';

const pages = {
  default: () => {
    return <Section />;
  },
  bg: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue" />
      </StyledView>
    );
  },
  padding: () => {
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
        </Section>
        <Section bg="snow">
          <Container borderWidth={2} borderColor="darkslateblue" />
        </Section>
      </StyledView>
    );
  },
  setFlex: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={2} borderColor="snow" />
        </Section>
        <Section bg="snow" flex={2}>
          <Container borderWidth={2} borderColor="darkslateblue" />
        </Section>
      </StyledView>
    );
  },
  withContainers: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={1} borderColor="snow" />
          <Container borderWidth={1} borderColor="snow" />
          <Container borderWidth={1} borderColor="snow" />
        </Section>
        <Section bg="snow" flex={2}>
          <Container borderWidth={1} borderColor="darkslateblue" />
          <Container borderWidth={1} borderColor="darkslateblue" />
          <Container borderWidth={1} borderColor="darkslateblue" />
        </Section>
      </StyledView>
    );
  },
};

export default pages;
