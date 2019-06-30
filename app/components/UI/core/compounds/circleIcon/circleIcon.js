import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Circle } from 'app/components/UI/core';

const CircleIcon = ({ bg, borderColor, borderWidth, size, opacity, ...iconProps }) => {
  const circleProps = {
    bg,
    borderColor,
    borderWidth,
    size,
    opacity,
  };

  const { iconSize } = iconProps;

  return (
    <Circle {...circleProps}>
      <Icon {...iconProps} size={iconSize} />
    </Circle>
  );
};

CircleIcon.propTypes = {
  ...Circle.propTypes,
  ...Icon.propTypes,
  iconSize: PropTypes.number,
};

CircleIcon.defaultProps = {
  size: 48, // eslint-disable-line react/default-props-match-prop-types
  iconSize: 32,
};

export default CircleIcon;
