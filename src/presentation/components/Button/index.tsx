import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FE724C',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          lineHeight: 24,
          fontWeight: 'bold',
          color: '#272D2F',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
