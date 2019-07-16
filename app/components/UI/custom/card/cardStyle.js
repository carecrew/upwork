/* eslint-disable react/forbid-prop-types */
import React from 'react';

import { RoundBorderView } from 'app/components/UI/core';
import CardRowStyle from './cardRow/cardRowStyle';

const CardStyle = () => {
  return (
    <RoundBorderView borderColor="jadeDust" flexDirection="column" p={4}>
      <CardRowStyle />
      <CardRowStyle />
      <CardRowStyle />
      <CardRowStyle />
    </RoundBorderView>
  );
};

export default CardStyle;
