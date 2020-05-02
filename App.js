import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ImagePicker from 'react-native-image-crop-picker';

import Login from './src/screens/Login'
import Main from './src/screens/Main'
import Show from './src/screens/Show'

export default function App() {
  const MainNavigator = createAppContainer(
    createSwitchNavigator({
      login: { screen: Login },
      main: { screen: Main },
      show: { screen: Show}
    })
  )

  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
