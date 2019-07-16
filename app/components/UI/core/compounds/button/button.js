import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import ButtonStyle from './buttonStyle';
import ButtonLogic from './buttonLogic';

const Button = ({ disabled, onPress, ...styleProps }) => {
  return (
    <ButtonLogic
      onPress={onPress}
      disabled={disabled}
      render={({ logic }) => (
        <TouchableOpacity
          onPress={logic.pressButton}
          activeOpacity={disabled ? 1 : 0.3}
          style={{ width: '100%' }}
        >
          <ButtonStyle opacity={disabled ? 0.3 : 1} {...styleProps} />
        </TouchableOpacity>
      )}
    />
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
