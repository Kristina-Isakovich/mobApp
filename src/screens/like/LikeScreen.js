import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LikeScreen = () => (
  <View style={ styles.like }>
    <Text>Like</Text>
  </View>
)

const styles = StyleSheet.create({
  like: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
