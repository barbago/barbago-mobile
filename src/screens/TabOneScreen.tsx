import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../navigation/types';
import {
  AppleAuth,
  FacebookAuth,
  GoogleAuth,
  NoAuth,
  SignOut,
} from '../components';

export function TabOneScreen({
  navigation,
}: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <GoogleAuth />
      <FacebookAuth />
      <AppleAuth />
      <NoAuth />
      <SignOut />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

/*
<BottomTab.Screen
  name="TabOne"
  component={TabOneScreen}
  options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
    title: 'Tab One',
    tabBarIcon: ({ color }) => (
      <TabBarIcon name="code" color={color} />
    ),
    headerRight: () => (
      <Pressable
        onPress={() => navigation.navigate('Welcome')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name="info-circle"
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    ),
  })}
/>
*/
