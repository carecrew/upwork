import React from 'react';
import PropTypes from 'prop-types';

import { StyledText, RoundBorderView } from 'app/components/UI/core';
import { Theme } from 'app/theme';

import variants from './buttonStyle.variants';
import colorCombos from './buttonStyle.colorCombos';

const ButtonStyle = ({ variant, label, opacity, height, width, color: combo }) => {
  const { bg, borderWidth, borderColor, color } = variants[variant];

  return (
    <RoundBorderView
      height={Theme.size[height]}
      width={width}
      bg={colorCombos[combo][bg]}
      borderColor={colorCombos[combo][borderColor]}
      borderWidth={borderWidth}
      opacity={opacity}
      px={3}
    >
      <StyledText color={colorCombos[combo][color]} variant="button">
        {label}
      </StyledText>
    </RoundBorderView>
  );
};

// eslint-disable-next-line react/forbid-foreign-prop-types
const { children, ...StyledTextProps } = StyledText.propTypes;

ButtonStyle.propTypes = {
  ...StyledTextProps,
  ...RoundBorderView.propTypes,
  variant: PropTypes.oneOf(Object.keys(variants)),
  label: PropTypes.string,
  opacity: PropTypes.number,
  color: PropTypes.oneOf(Object.keys(colorCombos)),
  height: PropTypes.number,
  width: PropTypes.number,
};

ButtonStyle.defaultProps = {
  variant: 'filled',
  label: 'button',
  opacity: 1,
  color: 'i',
  height: 6,
  width: 1,
};

export default ButtonStyle;
