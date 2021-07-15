import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SearchScreen = () => (
  <View style={styles.search}>
    <Text>Search</Text>
  </View>
)

const styles = StyleSheet.create({
  search: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
