import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from "./Icon";

export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Quadrojoy</Text>
    <Icon name='menu' />
  </View>
)

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 126,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32,
  }
});
