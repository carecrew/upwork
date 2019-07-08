/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Container, Icon } from 'app/components/UI/core';

const pages = {
  default: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Icon />
      </Container>
    );
  },
  name: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Icon name="clear" />
      </Container>
    );
  },
  color: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Icon name="cake" color="darkslateblue" />
      </Container>
    );
  },
  size: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Icon name="cake" color="darkslateblue" size={180} />
      </Container>
    );
  },
  positions: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Icon name="cake" color="darkslateblue" bottom={15} />
        <Icon name="cake" color="darkslateblue" right={15} />
        <Icon name="cake" color="darkslateblue" left={15} />
        <Icon name="cake" color="darkslateblue" top={15} />
      </Container>
    );
  },
  family: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Icon family="fontAwesome" name="check" color="darkslateblue" />
        <Icon family="feather" name="check" color="darkslateblue" />
        <Icon family="material" name="check" color="darkslateblue" />
        <Icon family="materialComm" name="check" color="darkslateblue" />
      </Container>
    );
  },
};

export default pages;
