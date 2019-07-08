import React from 'react';
import { StyledView, Section, Container, Block } from 'app/components/UI/core';

const pages = {
  default: () => {
    return <Block />;
  },
  inContainer: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={1} borderColor="snow">
            <Block bg="moccasin" />
          </Container>
        </Section>
      </StyledView>
    );
  },
  flexWidth: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={1} borderColor="snow">
            <Block bg="powderblue" />
            <Block bg="moccasin" />
          </Container>
        </Section>
      </StyledView>
    );
  },
  setWidth: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={1} borderColor="snow">
            <Block width={1 / 5} bg="powderblue" />
            <Block width={4 / 5} bg="moccasin" />
          </Container>
        </Section>
      </StyledView>
    );
  },
  flexHeight: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={2} borderColor="snow" />
          <Container borderWidth={2} borderColor="snow">
            <Block width={1 / 5} bg="powderblue" />
            <Block width={4 / 5} bg="moccasin" />
          </Container>
        </Section>
      </StyledView>
    );
  },
  padding: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container borderWidth={1} borderColor="moccasin" />
          <Container borderWidth={1} borderColor="moccasin">
            <Block width={1 / 5} bg="powderblue">
              <Container borderWidth={2} borderColor="snow" />
            </Block>
            <Block width={4 / 5} bg="moccasin">
              <Container borderWidth={2} borderColor="snow" />
            </Block>
          </Container>
        </Section>
      </StyledView>
    );
  },
  layout: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container flex={2} borderWidth={1} borderColor="snow">
            <Block width={1 / 6}>
              <Container borderWidth={1} borderColor="snow" />
            </Block>
            <Block width={2 / 6}>
              <Container borderWidth={1} borderColor="snow" />
            </Block>
            <Block flexDirection="column">
              <Container borderWidth={1} borderColor="snow" />
            </Block>
          </Container>
          <Container borderWidth={1} borderColor="snow">
            <Block flexDirection="column">
              <Container borderWidth={1} borderColor="snow" />
              <Container flex={4} borderWidth={1} borderColor="snow" />
            </Block>
          </Container>
          <Container flex={2} borderWidth={1} borderColor="snow">
            <Block>
              <Container borderWidth={1} borderColor="snow" />
            </Block>
            <Block>
              <Container borderWidth={1} borderColor="snow" />
            </Block>
            <Block>
              <Container borderWidth={1} borderColor="snow" />
            </Block>
            <Block>
              <Container borderWidth={1} borderColor="snow" />
            </Block>
          </Container>
        </Section>
      </StyledView>
    );
  },
};

export default pages;
