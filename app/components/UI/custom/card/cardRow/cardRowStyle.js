/* eslint-disable react/forbid-prop-types */
import React from 'react';

import { Container, Block, StyledText } from 'app/components/UI/core';

const CardRowStyle = () => {
  return (
    <Container>
      <Block borderRight>
        <StyledText variant="heading" color="jigglypuff">
          Name
        </StyledText>
      </Block>
      <Block>
        <StyledText variant="heading" color="megaMan">
          Canada
        </StyledText>
      </Block>
    </Container>
  );
};

export default CardRowStyle;
