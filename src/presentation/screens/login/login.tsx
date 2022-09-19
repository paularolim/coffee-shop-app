import React from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image as RNImage,
} from 'react-native';

import { Canvas, Circle, Image, useImage } from '@shopify/react-native-skia';

const orange = 152;
const yellow = 139;

const { width } = Dimensions.get('screen');

export function Login() {
  const image = useImage(require('../../assets/images/logo.png'));

  return (
    <>
      <Canvas style={{ height: 300 }}>
        <Circle cx={orange - 52} cy={orange - 46} r={orange} color="#FE724C" opacity={0.5} />
        <Circle cx={yellow + 6} cy={yellow - 170} r={yellow} color="#FFC529" opacity={0.5} />

        {image && (
          <Image
            image={image}
            fit="contain"
            x={width / 2 - 129 / 2}
            y={56}
            width={129}
            height={184}
          />
        )}
      </Canvas>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: '#FE724C', fontSize: 18, lineHeight: 24, fontWeight: 'bold' }}>
          Login
        </Text>

        <View style={{ width: '100%', paddingHorizontal: 24, marginTop: 24 }}>
          <Text style={{ color: '#272D2F', fontSize: 12, lineHeight: 18, fontWeight: '500' }}>
            Email
          </Text>
          <TextInput
            style={{
              backgroundColor: '#d7d7d7',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 8,
              marginTop: 8,
            }}
            placeholder="email@mail.com"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="off"
          />
        </View>

        <View style={{ width: '100%', paddingHorizontal: 24, marginTop: 24 }}>
          <Text style={{ color: '#272D2F', fontSize: 12, lineHeight: 18, fontWeight: '500' }}>
            Password
          </Text>
          <TextInput
            style={{
              backgroundColor: '#d7d7d7',
              paddingHorizontal: 12,
              paddingVertical: 10,
              borderRadius: 8,
              marginTop: 8,
            }}
            placeholder="*********"
            placeholderTextColor="#666666"
          />
        </View>

        <View style={{ alignSelf: 'flex-start', paddingHorizontal: 24, marginTop: 12 }}>
          <Text style={{ color: '#FE724C', fontSize: 12, lineHeight: 18 }}>Forgot password?</Text>
        </View>

        <View style={{ paddingHorizontal: 24, width: '100%', marginTop: 24 }}>
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
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <Text style={{ color: '#272D2F', fontSize: 16, lineHeight: 24, fontWeight: 'bold' }}>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Don’t have an account?{' '}
          </Text>
          <Text style={{ color: '#FE724C', fontSize: 16, lineHeight: 24, fontWeight: 'bold' }}>
            Sign up
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 84,
          }}
        >
          <RNImage
            source={require('../../assets/images/coffee.png')}
            style={{ width: 118, height: 118 }}
          />
        </View>
      </View>
    </>
  );
}
