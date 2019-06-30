import styled from 'styled-components/native';
import * as sys from 'styled-system';

const StyledTextInput = styled.TextInput`
  flex: 1;
  ${sys.borders};
  ${sys.color};
  ${sys.fontFamily};
  ${sys.fontWeight};
  ${sys.fontSize};
  ${sys.opacity};
  ${sys.space};
  ${sys.textAlign};
`;

StyledTextInput.propTypes = {
  ...sys.borders.propTypes,
  ...sys.color.propTypes,
  ...sys.fontFamily.propTypes,
  ...sys.fontWeight.propTypes,
  ...sys.fontSize.propTypes,
  ...sys.opacity.propTypes,
  ...sys.space.propTypes,
  ...sys.textAlign.propTypes,
};

StyledTextInput.defaultProps = {
  fontSize: 3,
  fontWeight: 'normal',
  textAlign: 'left',
  color: 'dark',
  opacity: 1,
  borderWidth: 0,
  borderColor: 'dark',
  borderRadius: 4,
  pb: 0,
  px: 0,
  textAlignVertical: 'bottom',
};

export default StyledTextInput;
