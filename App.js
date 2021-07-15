import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Header } from './src/components/Header';
import { Navigator } from "./src/navigators/Navigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'lato' : 'Lato',
  },
});
