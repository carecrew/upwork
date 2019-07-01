import { StyleSheet } from 'react-native';

const CONFIG = require('upwork/config.json');

const borderWidth = CONFIG.SKETCH ? StyleSheet.hairlineWidth : 0;

const Sketch = {
  borderWidth,
  borderColor: '#C70039',
};

export default Sketch;
