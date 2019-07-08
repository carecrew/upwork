import React from 'react';
import PropTypes from 'prop-types';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { Theme } from 'app/theme';

import * as sys from 'styled-system';
import styled from 'styled-components/native';

const [FEATHER, FONT_AWESOME, MATERIAL_ICONS, MATERIAL_COMMUNITY_ICONS] = Theme.icon.family;

const PropsWrapper = styled.View`
  ${sys.top};
  ${sys.right};
  ${sys.bottom};
  ${sys.left};
  ${sys.opacity};
`;

const Icon = props => {
  const { family, name, color: c, size: s } = props;
  const color = Theme.colors[c] || c;
  const size = Theme.icon.size[s] || s;

  if (family === MATERIAL_ICONS) {
    return (
      <PropsWrapper {...props}>
        <MaterialIcons name={name} size={size} color={color} />
      </PropsWrapper>
    );
  }

  if (family === MATERIAL_COMMUNITY_ICONS) {
    return (
      <PropsWrapper {...props}>
        <MaterialCommunityIcons name={name} size={size} color={color} />
      </PropsWrapper>
    );
  }

  if (family === FEATHER) {
    return (
      <PropsWrapper {...props}>
        <Feather name={name} size={size} color={color} />
      </PropsWrapper>
    );
  }

  if (family === FONT_AWESOME) {
    return (
      <PropsWrapper {...props}>
        <FontAwesome name={name} size={size} color={color} />
      </PropsWrapper>
    );
  }

  return null;
};

Icon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.oneOf(Object.keys(Theme.colors)), PropTypes.string]),
  family: PropTypes.oneOf([FEATHER, FONT_AWESOME, MATERIAL_ICONS, MATERIAL_COMMUNITY_ICONS]),
  name: PropTypes.string.isRequired,
  opacity: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.oneOf(Object.keys(Theme.icon.size)), PropTypes.number]),
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
};

Icon.defaultProps = {
  color: 'moccasin',
  family: MATERIAL_ICONS,
  opacity: 1,
  size: 32,
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined,
};

export default Icon;
