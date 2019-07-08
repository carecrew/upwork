import React from 'react';
import { Container, Circle } from 'app/components/UI/core';

const pages = {
  default: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <Circle />
      </Container>
    );
  },
  bg: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <Circle bg="darkslateblue" />
      </Container>
    );
  },
  size: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <Circle bg="darkslateblue" size={256} />
      </Container>
    );
  },
  borderWidth: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <Circle bg="darkslateblue" size={256} borderWidth={8} />
      </Container>
    );
  },
  borderColor: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <Circle bg="darkslateblue" size={256} borderWidth={8} borderColor="moccasin" />
      </Container>
    );
  },
  opacity: () => {
    return (
      <Container alignItems="center" justifyContent="center" borderWidth={0}>
        <Circle
          bg="darkslateblue"
          size={256}
          borderWidth={8}
          borderColor="moccasin"
          opacity={0.2}
        />
      </Container>
    );
  },
};

export default pages;
