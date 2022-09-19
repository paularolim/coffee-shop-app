import React from 'react';
import { Image, Text, View } from 'react-native';

import { ExternalHeaderProps } from './types';

export function ExternalHeader({ title = '' }: ExternalHeaderProps) {
  return (
    <>
      <View style={{ marginTop: 56 }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ width: 129, height: 184 }}
        />
      </View>

      {title && (
        <View style={{ marginTop: 48 }}>
          <Text style={{ color: '#FE724C', fontSize: 18, lineHeight: 24, fontWeight: 'bold' }}>
            {title}
          </Text>
        </View>
      )}
    </>
  );
}
