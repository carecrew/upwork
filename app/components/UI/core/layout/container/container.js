import React from 'react';
import { StyledView } from 'app/components/UI/core';

const Container = ({ children, ...props }) => <StyledView {...props}>{children}</StyledView>;

Container.propTypes = {
  ...StyledView.propTypes,
};

Container.defaultProps = {
  flexDirection: 'row',
};

export default Container;
