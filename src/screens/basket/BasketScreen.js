import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BasketScreen = () => (
  <View style={styles.basket}>
    <Text>Basket</Text>
  </View>
)

const styles = StyleSheet.create({
  basket: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
