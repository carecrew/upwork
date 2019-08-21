/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { StyledView, Section, Container, Block, Button } from 'app/components/UI/core';

import CardStyle from 'app/components/UI/custom/card/card.style';

const Screen2Style = ({ state, logic, data: currentData }) => {
  const { submit } = logic;
  const { isXDisabled } = state;
  const { loading, error, data } = currentData;

  let xData;
  const l = 'Loading . . .';
  const e = 'Error . . .';

  if (loading) {
    xData = { country: { name: l, continent: { name: l }, currency: l, emoji: l } };
  } else if (error) {
    xData = { country: { name: e, continent: { name: e }, currency: e, emoji: e } };
  } else {
    xData = data;
  }

  return (
    <StyledView>
      <Section flex={3}>
        <Container py={5}>
          <Block>
            <CardStyle data={xData} />
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
  data: PropTypes.object.isRequired,
};

export default Screen2Style;
