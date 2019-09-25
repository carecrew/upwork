/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Block, StyledText } from 'app/components/UI/core';

const CardRowStyle = ({ label, value }) => {
  return (
    <Container>
      <Block>
        <StyledText capitalize>{label}</StyledText>
      </Block>
      <Block>
        <StyledText capitalize>{value}</StyledText>
      </Block>
    </Container>
  );
};

CardRowStyle.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CardRowStyle;
