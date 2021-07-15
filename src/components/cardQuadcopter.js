import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../style.json';
import { Icon } from "./Icon";

export const CardQuadcopter = ({ item }) => {
  return (
    <View style={styles.quadcopter}>
      <Image style={styles.img} source={require('../../assets/img/q_0.png')} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.block}>
        <Text style={styles.price}>{item.price} $</Text>
        <View>
          <Icon style={styles.amount} name='star' size={14} color={colors.gold}/>
          <Text style={styles.amount}>{item.stars}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  quadcopter: {
    flexDirection: 'column',
    height: 248,
    width: 204,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 16,
  },
  img: {
    height: 168,
    width: 202,
    marginBottom: 12,
  },
  name: {
    fontWeight: '700',
    fontSize: 14,
    paddingLeft: 16,
    color: colors.blackMain,
    marginBottom: 12,
  },
  block: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.blackMain,
  },

  amount: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.blackMain,
  }
});

