/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Container, CircleIcon } from 'app/components/UI/core';

const pages = {
  default: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon />
      </Container>
    );
  },
  name: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon name="cake" />
      </Container>
    );
  },
  color: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon name="cake" color="darkslateblue" />
      </Container>
    );
  },
  bg: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon name="cake" bg="darkslateblue" />
      </Container>
    );
  },
  size: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon name="cake" bg="darkslateblue" size={96} />
      </Container>
    );
  },
  iconSize: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon name="cake" bg="darkslateblue" size={96} iconSize={56} />
      </Container>
    );
  },
  borderWidth: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon name="cake" bg="darkslateblue" size={96} iconSize={56} borderWidth={8} />
      </Container>
    );
  },
  borderColor: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon
          name="cake"
          bg="darkslateblue"
          size={96}
          iconSize={56}
          borderWidth={8}
          borderColor="moccasin"
        />
      </Container>
    );
  },
  family: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <CircleIcon
          family="materialComm"
          name="cake"
          bg="darkslateblue"
          size={96}
          iconSize={56}
          borderWidth={8}
          borderColor="moccasin"
        />
      </Container>
    );
  },
};

export default pages;
