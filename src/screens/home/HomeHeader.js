import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../style.json';

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
    height: 164,
    marginBottom: 32,
    backgroundColor: colors.accent,
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
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
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
  name: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32,
  },
  price: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
  },
  img: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 164,
    width: 233
  }
});
