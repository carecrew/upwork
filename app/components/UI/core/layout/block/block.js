import styled from 'styled-components/native';
import * as sys from 'styled-system';

import Sketch from 'app/utils/sketch';

const Block = styled.View`
  flex-wrap: nowrap;

  ${({ width }) => (width ? undefined : 'flex: 1')};

  ${sys.alignItems};
  ${sys.borderColor};
  ${sys.borderWidth};
  ${sys.color};
  ${sys.flexDirection};
  ${sys.justifyContent};
  ${sys.space};
  ${sys.width};
`;

Block.propTypes = {
  ...sys.alignItems.propTypes,
  ...sys.borderWidth.propTypes,
  ...sys.borderColor.propTypes,
  ...sys.color.propTypes,
  ...sys.flexDirection.propTypes,
  ...sys.justifyContent.propTypes,
  ...sys.space.propTypes,
  ...sys.width.propTypes,
};

Block.defaultProps = {
  borderWidth: Sketch.borderWidth,
  borderColor: Sketch.borderColor,
  flexDirection: 'row',
  px: 1,
};

export default Block;
