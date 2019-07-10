import React from 'react';
import PropTypes from 'prop-types';

import { StyledText, RoundBorderView } from 'app/components/UI/core';
import { Theme } from 'app/theme';

import variants from './buttonStyle.variants';
import combos from './buttonStyle.combos';

const ButtonStyle = ({ variant, label, disabled, height, width, color: combo }) => {
  const { bg, borderWidth, borderColor, color } = variants[variant];
  const opacity = disabled ? 0.3 : 1;

  return (
    <RoundBorderView
      height={Theme.size[height]}
      width={width}
      bg={combos[combo][bg]}
      borderColor={combos[combo][borderColor]}
      borderWidth={borderWidth}
      opacity={opacity}
    >
      <StyledText color={combos[combo][color]} variant="button">
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
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(combos)),
  height: PropTypes.number,
  width: PropTypes.number,
};

ButtonStyle.defaultProps = {
  variant: 'filled',
  label: 'button',
  disabled: false,
  color: 'i',
  height: 6,
  width: 1,
};

export default ButtonStyle;
