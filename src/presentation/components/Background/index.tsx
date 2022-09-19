import React from 'react';
import { Dimensions } from 'react-native';

import { Canvas, Circle } from '@shopify/react-native-skia';

const orange = 152;
const yellow = 139;

const { height } = Dimensions.get('screen');

export function Backgound() {
  return (
    <Canvas style={{ height, width: '100%' }}>
      <Circle cx={orange - 52} cy={orange - 46} r={orange} color="#FE724C" opacity={0.5} />
      <Circle cx={yellow + 6} cy={yellow - 170} r={yellow} color="#FFC529" opacity={0.5} />
    </Canvas>
  );
}
