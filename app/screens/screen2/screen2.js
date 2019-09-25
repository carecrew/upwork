import React from 'react';
import Screen2Data from './screen2.data';
import Screen2Logic from './screen2.logic';
import Screen2Style from './screen2.style';

// prettier-ignore
const Screen2 = () => (
   <Screen2Data
    toLogic={currentData => (
      <Screen2Logic
        currentData={currentData}
        toStyle={({ logic, state, data }) => (
          <Screen2Style logic={logic} state={state} data={data} />
        )}
      />
    )}
  />
);

export default Screen2;
