import React from 'react';

import Screen1Logic from './Screen1Logic';
import Screen1Style from './screen1Style';

const Screen1 = () => {
  return (
    <Screen1Logic render={({ logic, state }) => <Screen1Style logic={logic} state={state} />} />
  );
};

export default Screen1;
