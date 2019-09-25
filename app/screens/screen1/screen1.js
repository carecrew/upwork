import React from 'react';
import Screen1Logic from './screen1.logic';
import Screen1Style from './screen1.style';
import Screen1Data from './screen1.data';

const Screen1 = () => (
  <Screen1Data
    toLogic={currentData => (
      <Screen1Logic
        currentData={() => ({ ...currentData })}
        toStyle={({ logic, state }) => <Screen1Style logic={logic} state={state} />}
      />
    )}
  />
);

export default Screen1;
