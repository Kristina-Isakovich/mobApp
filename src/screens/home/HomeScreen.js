import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeHeader } from './HomeHeader';
import { Products } from './Products';
import { colors } from '../../styles/style.json'
import { deviceHeight } from '../../device';

export const HomeScreen = ({navigation}) => (
  <View style={styles.home}>
    <HomeHeader/>
    <Products navigation={navigation}/>
  </View>
)

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: deviceHeight * 3 / 100,
    paddingHorizontal: 16,
    paddingBottom: deviceHeight * 3.5 / 100,
    backgroundColor: colors.bg
  },
});
