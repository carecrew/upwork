// import React from 'react';
// import PropTypes from 'prop-types';

// import { StyledText, RoundBorderView, Icon } from 'app/components/UI/core';
// import variants from './button.variants';

// const Button = props => {
//   const { variant, content, name, useCase } = props;
//   const { bg, borderWidth, borderColor, color } = variants[variant];

//   const handleContent = input => {
//     const UPPER_CHAR_LIMIT = 20;
//     const sanitizedInput = input.trim();

//     if (sanitizedInput.length > UPPER_CHAR_LIMIT) {
//       return `${sanitizedInput.substring(0, 18)}...`;
//     }

//     return sanitizedInput;
//   };

//   return (
//     <RoundBorderView variant>
//       <StyledText {...useCase}>{handleContent(content)}</StyledText>
//     </RoundBorderView>
//   );
// };

// Button.propTypes = {
//   ...StyledText.propTypes,
//   ...RoundBorderView.propTypes,
//   variant: PropTypes.oneOf(Object.keys(variants)),
// };

// Button.defaultProps = {
//   // borderRadius: 4,
//   height: 1 / 16, // design: 48dp
//   padding: 16,
//   opacity: 1,
//   content: 'button',
//   caps: true,
//   variant: 'filled',
//   size: 20,
//   iconColor: '#FFFFFF',
// };

// export default Button;
