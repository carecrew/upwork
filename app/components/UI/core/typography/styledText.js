import React from 'react';
import PropTypes from 'prop-types';
import { systemWeights } from 'react-native-typography';
import * as sys from 'styled-system';
import styled from 'styled-components/native';

import { Theme } from 'app/theme';

import variants from './styledText.variants';
import useCases from './styledText.useCases';

const StyledTextComponent = styled.Text`
  ${({ textStyles }) => textStyles};
  ${sys.opacity};
`;

const StyledText = ({ variant, color: textColor, capitalize, opacity, children }) => {
  const { caps, fontSize, lineHeight, fontWeight, textAlign, numberOfLines } = variants[variant];
  const useCase = useCases[textColor];
  const color = useCase ? useCase.color : Theme.colors[textColor] || textColor;
  const systemWeight = systemWeights[fontWeight];
  const fontProps = { color, fontSize, lineHeight, textAlign };

  return (
    <StyledTextComponent
      textStyles={[systemWeight, { ...fontProps }]}
      opacity={opacity}
      numberOfLines={numberOfLines}
    >
      {caps || capitalize ? children.toUpperCase() : children}
    </StyledTextComponent>
  );
};

StyledText.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  color: PropTypes.string,
  capitalize: PropTypes.bool,
  opacity: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

StyledText.defaultProps = {
  variant: 'default',
  color: 'default',
  capitalize: false,
  opacity: 1,
  children: null,
};

export default StyledText;
