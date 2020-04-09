import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{ width: '100%', height: '100%', overflow: 'hidden', marginTop: '8%' }}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} /> */}
      {/* <WebView source={require("/home/abhijaat/MERN Apps/Todo/mern-todo-app/App.js")} /> */}
      <WebView source={{ uri: 'http://192.168.0.10:3000/' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250, height: 550, overflow: 'hidden',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
