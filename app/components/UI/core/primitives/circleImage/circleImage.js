import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import { Theme } from 'app/theme';

const defaultImage = require('app/assets/images/default.png');

const CircleImage = ({ source, ...styleProps }) => {
  const { size, borderColor: bc, borderWidth, opacity } = styleProps;
  const borderColor = Theme.colors[bc] || bc;

  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth,
        borderColor,
        opacity,
      }}
      resizeMode="cover"
    />
  );
};

CircleImage.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        headers: PropTypes.objectOf(PropTypes.string),
      }),
    ),
  ]),
  size: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  opacity: PropTypes.number,
};

CircleImage.defaultProps = {
  source: defaultImage,
  size: 128,
  borderColor: 'light',
  borderWidth: 0,
  opacity: 1,
};

export default CircleImage;
