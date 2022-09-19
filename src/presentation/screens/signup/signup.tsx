import React from 'react';
import { Dimensions, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

import { Backgound } from 'presentation/components/Background';
import { Button } from 'presentation/components/Button';
import { ExternalHeader } from 'presentation/components/ExternalHeader';
import { Input } from 'presentation/components/Input';

export function Signup() {
  return (
    <View style={{ height: Dimensions.get('window').height + 38 }}>
      <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Backgound />
      </View>
      <View style={{ position: 'absolute', width: '100%' }}>
        <ScrollView style={{ height: Dimensions.get('window').height + 38 }}>
          <View style={{ alignItems: 'center' }}>
            <ExternalHeader title="Sign up" />

            <Input
              label="Name"
              placeholder="Name Lastname"
              autoCapitalize="none"
              autoComplete="off"
            />

            <Input
              label="Email"
              placeholder="email@mail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="off"
            />

            <Input
              label="Password"
              placeholder="*********"
              keyboardType="visible-password"
              autoCapitalize="none"
              autoComplete="off"
            />

            <Input
              label="Phone"
              placeholder="(00) 00000-0000"
              keyboardType="numeric"
              autoCapitalize="none"
              autoComplete="off"
            />

            <View style={{ alignSelf: 'flex-start', paddingHorizontal: 24, marginTop: 12 }}>
              <Text style={{ color: '#FE724C', fontSize: 12, lineHeight: 18 }}>
                Forgot password?
              </Text>
            </View>

            <View style={{ paddingHorizontal: 24, width: '100%', marginTop: 24 }}>
              <Button>Sign up</Button>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 12,
                paddingHorizontal: 24,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Text style={{ color: '#272D2F', fontSize: 16, lineHeight: 24, fontWeight: 'bold' }}>
                Already have account?
              </Text>
              <Text
                style={{
                  color: '#FE724C',
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: 'bold',
                }}
              >
                {' '}
                Login
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 84,
                marginBottom: 24,
              }}
            >
              <Image
                source={require('../../assets/images/coffee.png')}
                style={{ width: 118, height: 118 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
