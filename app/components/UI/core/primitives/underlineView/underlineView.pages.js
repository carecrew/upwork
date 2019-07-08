/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Block, Container, Section, StyledText, Icon, UnderlineView } from 'app/components/UI/core';

const pages = {
  default: () => {
    return <UnderlineView />;
  },
  inContainer: () => {
    return (
      <Container flexDirection="column" justifyContent="center">
        <UnderlineView />
      </Container>
    );
  },
  inSection: () => {
    return (
      <Section bg="darkslateblue">
        <Container flexDirection="column" justifyContent="center">
          <UnderlineView />
        </Container>
      </Section>
    );
  },
  lineColor: () => {
    return (
      <Section bg="darkslateblue">
        <Container flexDirection="column" justifyContent="center">
          <UnderlineView lineColor="snow" />
        </Container>
      </Section>
    );
  },
  asChildren: () => {
    return (
      <Section bg="darkslateblue">
        <Container flexDirection="column" justifyContent="center">
          <UnderlineView lineColor="snow" />
          <UnderlineView lineColor="snow" />
        </Container>
      </Section>
    );
  },
  withChild: () => {
    return (
      <Section bg="darkslateblue">
        <Container flexDirection="column" justifyContent="center">
          <UnderlineView lineColor="snow">
            <StyledText variant="feedback" color="activeOnDark">
              Text
            </StyledText>
          </UnderlineView>
          <UnderlineView lineColor="snow">
            <StyledText variant="feedback" color="activeOnDark">
              Text
            </StyledText>
          </UnderlineView>
        </Container>
      </Section>
    );
  },
  withChildren: () => {
    return (
      <Section bg="darkslateblue">
        <Container flexDirection="column" justifyContent="center">
          <UnderlineView lineColor="snow">
            <StyledText variant="feedback" color="activeOnDark">
              Text
            </StyledText>
            <Icon name="cake" size={16} color="snow" />
          </UnderlineView>
          <UnderlineView lineColor="snow">
            <StyledText variant="feedback" color="activeOnDark">
              Text
            </StyledText>
            <Icon name="cake" size={16} color="snow" />
          </UnderlineView>
        </Container>
      </Section>
    );
  },
  setHeight: () => {
    return (
      <Section bg="darkslateblue">
        <Container flexDirection="column" justifyContent="center">
          <UnderlineView lineColor="snow">
            <StyledText variant="feedback" color="activeOnDark">
              Text
            </StyledText>
            <Icon name="cake" size={16} color="snow" />
          </UnderlineView>
          <UnderlineView lineColor="snow" height={48}>
            <StyledText variant="feedback" color="activeOnDark">
              Text
            </StyledText>
            <Icon name="cake" size={16} color="snow" />
          </UnderlineView>
          <Block />
        </Container>
      </Section>
    );
  },
};

export default pages;
