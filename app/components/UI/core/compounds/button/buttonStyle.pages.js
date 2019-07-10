import React from 'react';
import { StyledView, Section, Container, Block } from 'app/components/UI/core';

import ButtonStyle from './buttonStyle';

const pages = {
  default: () => {
    return <ButtonStyle />;
  },
  variants: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <ButtonStyle variant="filled" color="dark" label="filled" />
        <ButtonStyle variant="outline" color="dark" label="outline" />
        <ButtonStyle variant="text" color="dark" label="text" />
      </Container>
    );
  },
  disabled: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <ButtonStyle variant="filled" color="dark" label="filled" disabled />
        <ButtonStyle variant="outline" color="dark" label="outline" disabled />
        <ButtonStyle variant="text" color="dark" label="text" disabled />
      </Container>
    );
  },
  themed: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <ButtonStyle variant="filled" color="i" label="filled" />
        <ButtonStyle variant="filled" color="i" label="filled" disabled />

        <ButtonStyle variant="outline" color="iv" label="outline" />
        <ButtonStyle variant="outline" color="iv" label="outline" disabled />

        <ButtonStyle variant="text" color="ii" label="text" />
        <ButtonStyle variant="text" color="ii" label="text" disabled />
      </Container>
    );
  },
  anyColor: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <ButtonStyle variant="filled" color="jigglypuff" label="filled" />
        <ButtonStyle variant="filled" color="casandoraYellow" label="filled" disabled />

        <ButtonStyle variant="outline" color="pastelRed" label="outline" />
        <ButtonStyle variant="outline" color="megaMan" label="outline" disabled />

        <ButtonStyle variant="text" color="jadeDust" label="text" />
        <ButtonStyle variant="text" color="nasuPurple" label="text" disabled />
      </Container>
    );
  },
  setHeight: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <ButtonStyle variant="filled" color="jigglypuff" label="filled" height={8} />
        <ButtonStyle variant="filled" color="casandoraYellow" label="filled" height={7} disabled />

        <ButtonStyle variant="outline" color="pastelRed" label="outline" height={6} />
        <ButtonStyle variant="outline" color="megaMan" label="outline" height={5} disabled />

        <ButtonStyle variant="text" color="jadeDust" label="text" height={4} />
        <ButtonStyle variant="text" color="nasuPurple" label="text" height={3} disabled />
      </Container>
    );
  },
  layout: () => {
    return (
      <StyledView>
        <Section>
          <Container alignItems="flex-end" py={1}>
            <Block width={1 / 4}>
              <ButtonStyle variant="outline" color="jigglypuff" label="+" />
            </Block>
            <Block width={1 / 4}>
              <ButtonStyle variant="outline" color="jadeDust" label="-" />
            </Block>
            <Block width={1 / 2}>
              <ButtonStyle variant="filled" color="megaMan" label="clear" />
            </Block>
          </Container>
          <Container alignItems="flex-start" py={1}>
            <Block>
              <ButtonStyle variant="outline" color="pastelRed" label="Submit" />
            </Block>
          </Container>
        </Section>
      </StyledView>
    );
  },
};

export default pages;
