/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Container, StyledText, Section } from 'app/components/UI/core';

const pages = {
  default: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <StyledText>Default.</StyledText>
      </Container>
    );
  },
  variants: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <StyledText variant="default">default variant</StyledText>
        <StyledText variant="heading">heading variant</StyledText>
        <StyledText variant="pageTitle">pageTitle variant</StyledText>
        <StyledText variant="menuTitle">menuTitle variant</StyledText>
        <StyledText variant="body">body variant</StyledText>
        <StyledText variant="secondary">secondary variant</StyledText>
        <StyledText variant="listItem">listItem variant</StyledText>
        <StyledText variant="button">button variant</StyledText>
        <StyledText variant="tab">tab variant</StyledText>
        <StyledText variant="input">input variant</StyledText>
        <StyledText variant="label">label variant</StyledText>
        <StyledText variant="feedback">feedback variant</StyledText>
      </Container>
    );
  },
  activeOnDark: () => {
    return (
      <Section bg="darkslateblue">
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="heading" color="activeOnDark">
            activeOnDark
          </StyledText>
          <StyledText variant="button" color="activeOnDark">
            activeOnDark
          </StyledText>
          <StyledText variant="feedback" color="activeOnDark">
            activeOnDark
          </StyledText>
        </Container>
      </Section>
    );
  },
  activeOnLight: () => {
    return (
      <Section bg="moccasin">
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="heading" color="activeOnLight">
            activeOnLight
          </StyledText>
          <StyledText variant="button" color="activeOnLight">
            activeOnLight
          </StyledText>
          <StyledText variant="feedback" color="activeOnLight">
            activeOnLight
          </StyledText>
        </Container>
      </Section>
    );
  },
  activeOnWhite: () => {
    return (
      <Section bg="white">
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="heading" color="activeOnWhite">
            activeOnWhite
          </StyledText>
          <StyledText variant="button" color="activeOnWhite">
            activeOnWhite
          </StyledText>
          <StyledText variant="feedback" color="activeOnWhite">
            activeOnWhite
          </StyledText>
        </Container>
      </Section>
    );
  },
  secondary: () => {
    return (
      <Section bg="white">
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="heading" color="secondary">
            secondary
          </StyledText>
          <StyledText variant="button" color="secondary">
            secondary
          </StyledText>
          <StyledText variant="feedback" color="secondary">
            secondary
          </StyledText>
        </Container>
      </Section>
    );
  },
  placeholder: () => {
    return (
      <Section bg="white">
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="heading" color="placeholder">
            placeholder
          </StyledText>
          <StyledText variant="button" color="placeholder">
            placeholder
          </StyledText>
          <StyledText variant="feedback" color="placeholder">
            placeholder
          </StyledText>
        </Container>
      </Section>
    );
  },
  anyColor: () => {
    return (
      <Section bg="white">
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="heading" color="activeOnWhite">
            activeOnWhite
          </StyledText>
          <StyledText variant="heading" color="deeppink">
            deeppink
          </StyledText>
          <StyledText variant="heading" color="iii">
            iii
          </StyledText>
        </Container>
      </Section>
    );
  },
  capitalize: () => {
    return (
      <Section>
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="body" color="activeOnLight" capitalize>
            capitalize prop
          </StyledText>
        </Container>
      </Section>
    );
  },
  opacity: () => {
    return (
      <Section bg="darkslateblue">
        <Container alignItems="center" justifyContent="center" flexDirection="column">
          <StyledText variant="heading" color="activeOnDark" opacity={0.9}>
            heading variants
          </StyledText>
          <StyledText variant="pageTitle" color="activeOnDark" opacity={0.8}>
            pageTitle variant
          </StyledText>
          <StyledText variant="menuTitle" color="activeOnDark" opacity={0.7}>
            menuTitle variant
          </StyledText>
          <StyledText variant="body" color="activeOnDark" opacity={0.6}>
            body variant
          </StyledText>
          <StyledText variant="secondary" color="activeOnDark" opacity={0.5}>
            secondary variant
          </StyledText>
          <StyledText variant="listItem" color="activeOnDark" opacity={0.4}>
            listItem variant
          </StyledText>
          <StyledText variant="button" color="activeOnDark" opacity={0.3}>
            button variant
          </StyledText>
          <StyledText variant="tab" color="activeOnDark" opacity={0.2}>
            tab variant
          </StyledText>
          <StyledText variant="input" color="activeOnDark" opacity={0.1}>
            input variant
          </StyledText>
          <StyledText variant="label" color="activeOnDark" opacity={0.05}>
            label variant
          </StyledText>
          <StyledText variant="feedback" color="activeOnDark" opacity={0.03}>
            feedback variant
          </StyledText>
        </Container>
      </Section>
    );
  },
};

export default pages;
