import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, sizes, fonts } from '../../styles/style.json';
import { deviceHeight } from '../../device';

export const HomeHeader = () => (
    <View style={styles.header}>
      <View style={styles.body}>
        <Text style={styles.text}>Need for Speed</Text>
        <Text style={styles.name}>UdoDron 3 Pro</Text>
        <Text style={styles.price}>1984 $</Text>
      </View>
      <Image style={styles.img} source={require('../../../assets/img/main-q.png')}/>
    </View>
)

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    height: deviceHeight * 20 / 100,
    marginBottom: deviceHeight * 4 / 100,
    backgroundColor: colors.accent,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 16
  },
  body: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  text: {
    color: '#fff',
    fontFamily: fonts.bold,
    fontSize: sizes.min,
  },
  name: {
    color: '#fff',
    fontFamily: fonts.extraBold,
    fontSize: sizes.maxTitle,
  },
  price: {
    color: '#fff',
    fontFamily: fonts.bold,
    fontSize: sizes.title,
  },
  img: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 233
  }
});
