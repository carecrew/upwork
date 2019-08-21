import React from 'react';
import PropTypes from 'prop-types';

import { StyledView } from 'app/components/UI/core';

const UnderlineView = ({ children, lineColor, ...props }) => {
  return (
    <StyledView flexDirection="row" borderBottomWidth={1} borderColor={lineColor} {...props}>
      {children}
    </StyledView>
  );
};

UnderlineView.propTypes = {
  ...StyledView.propTypes,
  lineColor: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

UnderlineView.defaultProps = {
  lineColor: 'dark',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 2,
  py: 2,
};

export default UnderlineView;
