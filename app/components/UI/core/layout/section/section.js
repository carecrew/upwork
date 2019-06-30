import React from 'react';
import { StyledView } from 'app/components/UI/core';

const Section = ({ children, bg, height, flex }) => (
  <StyledView bg={bg} px={12} height={height} flex={flex}>
    {children}
  </StyledView>
);

Section.propTypes = {
  ...StyledView.propTypes,
};

Section.defaultProps = {
  height: undefined,
};

export default Section;
