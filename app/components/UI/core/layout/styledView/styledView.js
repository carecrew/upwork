import styled from 'styled-components/native';
import * as sys from 'styled-system';
import PropTypes from 'prop-types';

import Sketch from 'app/utils/sketch';

const StyledView = styled.View`
  ${({ height, flex }) => !height && `flex: ${flex || 1}`};

  ${sys.alignItems};
  ${sys.borders};
  ${sys.color};
  ${sys.flexDirection};
  ${sys.justifyContent};
  ${sys.space};
  ${sys.height};
  ${sys.width};
`;

StyledView.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  ...sys.alignItems.propTypes,
  ...sys.borders.propTypes,
  ...sys.color.propTypes,
  ...sys.flexDirection.propTypes,
  ...sys.justifyContent.propTypes,
  ...sys.space.propTypes,
  ...sys.height.propTypes,
  ...sys.width.propTypes,
};

StyledView.defaultProps = {
  height: undefined,
  width: undefined,
  borderWidth: Sketch.borderWidth,
  borderColor: Sketch.borderColor,
  flexDirection: 'column',
  // behavior: 'padding',
};

export default StyledView;
