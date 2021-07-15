import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeHeader } from "./HomeHeader";
import { Products } from "./Products";

export const HomeScreen = () => (
  <View style={styles.home}>
    <HomeHeader />
    <Products />
  </View>
)

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 28,
    backgroundColor: '#f8f8f8'
  },
});
