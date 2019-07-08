import React from 'react';

import { StyledView } from 'app/components/UI/core';

const RoundBorderView = ({ children, ...viewProps }) => {
  return <StyledView {...viewProps}>{children}</StyledView>;
};

RoundBorderView.propTypes = {
  ...StyledView.propTypes,
};

RoundBorderView.defaultProps = {
  bg: 'transparent',
  borderColor: 'dark',
  borderWidth: 1,
  borderRadius: 6,
  minHeight: 40,
  justifyContent: 'center',
  alignItems: 'center',
};

export default RoundBorderView;
