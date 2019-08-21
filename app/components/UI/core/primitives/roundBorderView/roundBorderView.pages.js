/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Container, RoundBorderView, StyledText } from 'app/components/UI/core';

const pages = {
  default: () => {
    return (
      <RoundBorderView>
        <StyledText variant="button" color="storybook">
          Text
        </StyledText>
      </RoundBorderView>
    );
  },
  bg: () => {
    return <RoundBorderView bg="darkslateblue" />;
  },
  withStyledText: () => {
    return (
      <RoundBorderView bg="darkslateblue">
        <StyledText variant="button" color="activeOnDark">
          Text
        </StyledText>
      </RoundBorderView>
    );
  },
  borderWidth: () => {
    return (
      <RoundBorderView bg="darkslateblue" borderWidth={2}>
        <StyledText variant="button" color="activeOnDark">
          Text
        </StyledText>
      </RoundBorderView>
    );
  },
  borderColor: () => {
    return (
      <RoundBorderView bg="darkslateblue" borderWidth={2} borderColor="pink">
        <StyledText variant="button" color="activeOnDark">
          Text
        </StyledText>
      </RoundBorderView>
    );
  },
  flexHeight: () => {
    return (
      <Container flexDirection="column">
        <RoundBorderView bg="darkslateblue" borderWidth={2} borderColor="pink">
          <StyledText variant="button" color="activeOnDark">
            Text
          </StyledText>
        </RoundBorderView>
        <RoundBorderView bg="darkslateblue" borderWidth={2} borderColor="pink">
          <StyledText variant="button" color="activeOnDark">
            Text
          </StyledText>
        </RoundBorderView>
      </Container>
    );
  },
  setHeight: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <RoundBorderView
          bg="darkslateblue"
          borderWidth={2}
          borderColor="pink"
          height={250}
          width={1}
        >
          <StyledText variant="button" color="activeOnDark">
            Text
          </StyledText>
        </RoundBorderView>
      </Container>
    );
  },
  flexWidth: () => {
    return (
      <Container>
        <RoundBorderView bg="darkslateblue" borderWidth={2} borderColor="pink">
          <StyledText variant="button" color="activeOnDark">
            Text
          </StyledText>
        </RoundBorderView>
        <RoundBorderView bg="darkslateblue" borderWidth={2} borderColor="pink">
          <StyledText variant="button" color="activeOnDark">
            Text
          </StyledText>
        </RoundBorderView>
      </Container>
    );
  },
  setWidth: () => {
    return (
      <Container alignItems="center" justifyContent="center">
        <RoundBorderView
          bg="darkslateblue"
          borderWidth={2}
          borderColor="pink"
          height={150}
          width={100}
        >
          <StyledText variant="button" color="activeOnDark">
            Text
          </StyledText>
        </RoundBorderView>
      </Container>
    );
  },
};

export default pages;
