import React from 'react';

import Screen2Logic from './screen2Logic';
import Screen2Style from './screen2Style';

const Screen2 = () => {
  return (
    <Screen2Logic render={({ logic, state }) => <Screen2Style logic={logic} state={state} />} />
  );
};

export default Screen2;
