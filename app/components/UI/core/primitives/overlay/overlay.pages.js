/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { View } from 'react-native';
import {
  StyledView,
  Container,
  Section,
  StyledText,
  Icon,
  UnderlineView,
  Overlay
} from 'app/components/UI/core';

const pages = {
  default: () => {
    return <Overlay />;
  },
  overElements: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container flexDirection="column" justifyContent="center">
            <UnderlineView lineColor="snow">
              <StyledText color="snow">Text</StyledText>
              <Icon name="cake" size={16} color="snow" />
            </UnderlineView>
            <UnderlineView lineColor="snow">
              <StyledText color="snow">Text</StyledText>
              <Icon name="cake" size={16} color="snow" />
            </UnderlineView>
          </Container>
        </Section>
        <Overlay position="absolute" top={24} left={24} />
      </StyledView>
    );
  },
  withChildren: () => {
    return (
      <StyledView>
        <Section bg="darkslateblue">
          <Container flexDirection="column" justifyContent="center">
            <UnderlineView lineColor="snow">
              <StyledText color="snow">Text</StyledText>
              <Icon name="cake" size={16} color="snow" />
            </UnderlineView>
            <UnderlineView lineColor="snow">
              <StyledText color="snow">Text</StyledText>
              <Icon name="cake" size={16} color="snow" />
            </UnderlineView>
          </Container>
        </Section>
        <Overlay position="absolute" top={24} left={24}>
          <Container alignItems="center" justifyContent="center">
            <Icon family="materialComm" name="cake" size={128} color="snow" />
          </Container>
        </Overlay>
      </StyledView>
    );
  },
};

export default pages;
