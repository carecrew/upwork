/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { StyledView, Section, Container, Block, Button } from 'app/components/UI/core';

import CardStyle from 'app/components/UI/custom/card/cardStyle';

const Screen2Style = ({ logic, state }) => {
  const { submit } = logic;
  const { isXDisabled } = state;

  return (
    <StyledView>
      <Section flex={3}>
        <Container py={5}>
          <Block>
            <CardStyle />
          </Block>
        </Container>
      </Section>
      <Section flex={1}>
        <Container alignItems="flex-end" pb={5}>
          <Block>
            <Button
              variant="outline"
              color="jadeDust"
              label="Change Query"
              onPress={submit}
              disabled={isXDisabled}
            />
          </Block>
        </Container>
      </Section>
    </StyledView>
  );
};

Screen2Style.propTypes = {
  logic: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

export default Screen2Style;
