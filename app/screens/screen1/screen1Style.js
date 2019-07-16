/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledView,
  Section,
  Container,
  Block,
  Button,
  StyledText,
  Circle
} from 'app/components/UI/core';

const Screen1Style = ({ logic, state }) => {
  const { increment, decrement, clear, submit } = logic;
  const { count, isIncDisabled, isXDisabled } = state;

  return (
    <StyledView>
      <Section>
        <Container alignItems="flex-end" justifyContent="center">
          <Block justifyContent="center">
            <Circle size={200} borderWidth={1} borderColor="jadeDust" bg="transparent">
              <StyledText variant="upworkNumber" color="jadeDust">
                {count}
              </StyledText>
            </Circle>
          </Block>
        </Container>
      </Section>
      <Section>
        <Container alignItems="flex-end" py={1}>
          <Block width={1 / 4}>
            <Button
              variant="outline"
              color="jigglypuff"
              label="+"
              onPress={increment}
              disabled={isIncDisabled}
            />
          </Block>
          <Block width={1 / 4}>
            <Button
              variant="outline"
              color="jadeDust"
              label="-"
              onPress={decrement}
              disabled={isXDisabled}
            />
          </Block>
          <Block width={1 / 2}>
            <Button
              variant="filled"
              color="megaMan"
              label="clear"
              onPress={clear}
              disabled={isXDisabled}
            />
          </Block>
        </Container>
        <Container alignItems="flex-start" py={1}>
          <Block>
            <Button
              variant="outline"
              color="pastelRed"
              label="Submit"
              onPress={submit}
              disabled={isXDisabled}
            />
          </Block>
        </Container>
      </Section>
    </StyledView>
  );
};

Screen1Style.propTypes = {
  logic: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

export default Screen1Style;
