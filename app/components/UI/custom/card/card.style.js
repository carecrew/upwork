/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from 'app/theme';
import { RoundBorderView } from 'app/components/UI/core';
import CardRowStyle from './cardRow/cardRow.style';

const CardStyle = ({ data: { country } }) => {
  return (
    <RoundBorderView borderRadius={4} padding={Theme.size[3]}>
      <CardRowStyle label="Country" value={country.name} />
    </RoundBorderView>
  );
};

CardStyle.propTypes = {
  data: PropTypes.shape({
    country: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default CardStyle;
