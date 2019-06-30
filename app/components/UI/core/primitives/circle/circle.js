import * as sys from 'styled-system';
import styled from 'styled-components/native';

const Circle = styled.View`
  border-radius: ${({ size }) => size / 2};

  ${sys.alignItems};
  ${sys.justifyContent};
  ${sys.borderColor};
  ${sys.borderWidth};
  ${sys.color};
  ${sys.opacity};
  ${sys.size};
  ${sys.space};
`;

Circle.propTypes = {
  ...sys.alignItems.propTypes,
  ...sys.justifyContent.propTypes,
  ...sys.borderColor.propTypes,
  ...sys.borderWidth.propTypes,
  ...sys.color.propTypes,
  ...sys.opacity.propTypes,
  ...sys.size.propTypes,
  ...sys.space.propTypes,
};

Circle.defaultProps = {
  bg: 'light',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'neutral',
  borderWidth: 0,
  opacity: 1,
  size: 128,
};

export default Circle;
