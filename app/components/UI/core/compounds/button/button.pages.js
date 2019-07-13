/* eslint-disable no-console */
import React from 'react';
import { StyledView, Section, Container, Block } from 'app/components/UI/core';

import Button from './button';

const pages = {
  default: () => {
    return (
      <Container>
        <Button />
      </Container>
    );
  },
  variants: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Button variant="filled" color="dark" label="filled" />
        <Button variant="outline" color="dark" label="outline" />
        <Button variant="text" color="dark" label="text" />
      </Container>
    );
  },
  disabled: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Button variant="filled" color="dark" label="filled" disabled />
        <Button variant="outline" color="dark" label="outline" disabled />
        <Button variant="text" color="dark" label="text" disabled />
      </Container>
    );
  },
  themed: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Button variant="filled" color="i" label="filled" />
        <Button variant="filled" color="i" label="filled" disabled />

        <Button variant="outline" color="iv" label="outline" />
        <Button variant="outline" color="iv" label="outline" disabled />

        <Button variant="text" color="ii" label="text" />
        <Button variant="text" color="ii" label="text" disabled />
      </Container>
    );
  },
  anyColor: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Button variant="filled" color="jigglypuff" label="filled" />
        <Button variant="filled" color="casandoraYellow" label="filled" disabled />

        <Button variant="outline" color="pastelRed" label="outline" />
        <Button variant="outline" color="megaMan" label="outline" disabled />

        <Button variant="text" color="jadeDust" label="text" />
        <Button variant="text" color="nasuPurple" label="text" disabled />
      </Container>
    );
  },
  setHeight: () => {
    return (
      <Container alignItems="center" justifyContent="center" flexDirection="column">
        <Button variant="filled" color="jigglypuff" label="filled" height={8} />
        <Button variant="filled" color="casandoraYellow" label="filled" height={7} disabled />

        <Button variant="outline" color="pastelRed" label="outline" height={6} />
        <Button variant="outline" color="megaMan" label="outline" height={5} disabled />

        <Button variant="text" color="jadeDust" label="text" height={4} />
        <Button variant="text" color="nasuPurple" label="text" height={3} disabled />
      </Container>
    );
  },
  layout: () => {
    const onIncrement = () => console.warn('+1');
    const onDecrement = () => console.warn('-1');
    const onClear = () => console.warn('Clear');
    const onSubmit = () => console.warn('Submit');

    return (
      <StyledView>
        <Section>
          <Container alignItems="flex-end" py={1}>
            <Block width={1 / 4}>
              <Button
                variant="outline"
                color="jigglypuff"
                label="+"
                onPress={onIncrement}
                disabled
              />
            </Block>
            <Block width={1 / 4}>
              <Button variant="outline" color="jadeDust" label="-" onPress={onDecrement} />
            </Block>
            <Block width={1 / 2}>
              <Button variant="filled" color="megaMan" label="clear" onPress={onClear} />
            </Block>
          </Container>
          <Container alignItems="flex-start" py={1}>
            <Block>
              <Button variant="outline" color="pastelRed" label="Submit" onPress={onSubmit} />
            </Block>
          </Container>
        </Section>
      </StyledView>
    );
  },
};

export default pages;
