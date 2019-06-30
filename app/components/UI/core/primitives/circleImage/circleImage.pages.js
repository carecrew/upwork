/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Container, CircleImage } from 'app/components/UI/core';

const pages = {
  default: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleImage />
      </Container>
    );
  },
  size: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <CircleImage size={256} />
      </Container>
    );
  },
  borderWidth: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <CircleImage size={256} borderWidth={8} />
      </Container>
    );
  },
  borderColor: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <CircleImage size={256} borderWidth={8} borderColor="darkslateblue" />
      </Container>
    );
  },
  opacity: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <CircleImage size={256} borderWidth={8} borderColor="darkslateblue" opacity={0.2} />
      </Container>
    );
  },
};

export default pages;
