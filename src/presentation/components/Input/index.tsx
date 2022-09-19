import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
}

export function Input({ label, placeholderTextColor = '#666666', ...rest }: InputProps) {
  return (
    <View style={{ width: '100%', paddingHorizontal: 24, marginTop: 24 }}>
      <Text style={{ color: '#272D2F', fontSize: 12, lineHeight: 18, fontWeight: '500' }}>
        {label}
      </Text>
      <TextInput
        style={{
          backgroundColor: '#d7d7d7',
          paddingHorizontal: 12,
          paddingVertical: 10,
          borderRadius: 8,
          marginTop: 8,
        }}
        placeholderTextColor={placeholderTextColor}
        {...rest}
      />
    </View>
  );
}
