import React from 'react';
import { Container, Button } from 'app/components/UI/core';

const pages = {
  filled: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Button variant="filled" content="filled" />
      </Container>
    );
  },
  // outlined: () => {
  //   return (
  //     <Container alignItems="center" justifyContent="center" flexDirection="column">
  //       <Button variant="outlined" content="outlined" />
  //     </Container>
  //   );
  // },
  // texted: () => {
  //   return (
  //     <Container alignItems="center" justifyContent="center" flexDirection="column">
  //       <Button variant="texted" content="texted" />
  //     </Container>
  //   );
  // },
  // filledWithIcon: () => {
  //   return (
  //     <Container alignItems="center" justifyContent="center" flexDirection="column">
  //       <Button variant="filled" content="filled" name="add" />
  //     </Container>
  //   );
  // },
};

export default pages;
