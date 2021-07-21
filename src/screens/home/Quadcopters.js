import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import quadcopters from '../../quadcopters.json';
import { Icon } from '../../components/Icon';
import { colors, fonts, sizes } from '../../styles/style.json';
import { deviceHeight } from '../../device';
import { getImage } from '../../utils/getImage';

export const Quadcopters = ({activeTab, navigation}) => {
  let DATA = [];
  switch (activeTab) {
    case 0:
      DATA = quadcopters;
      break;
    case 1:
      DATA.push(quadcopters.reduce(
        (acc, curr) => acc.price < curr.price
          ? acc
          : curr
        , {}));
      break;
    case 2:
      DATA.push(quadcopters.reduce(
        (acc, curr) => acc.stars > curr.stars
          ? acc
          : curr
        , {}));
      break;
    case 3:
      DATA.push(quadcopters[2]);
      break;
  }

  const CardQuadcopter = ({item}) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('Quadcopter', {item})}
        style={styles.quadcopter}
      >
        <Image
          style={styles.img}
          source={getImage(item.id)}
        />
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.block}>
          <Text style={styles.price}>{item.price} $</Text>
          <View style={styles.star}>
            <Icon name='star' size={14} color={colors.gold}/>
            <Text style={styles.amount}>{item.stars}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      renderItem={CardQuadcopter}>
    </FlatList>
  )
}

const styles = StyleSheet.create({
  quadcopter: {
    flexDirection: 'column',
    height: deviceHeight * 31 / 100,
    width: 204,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 16,
  },
  img: {
    height: deviceHeight * 21 / 100,
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
    fontFamily: fonts.bold,
    fontSize: sizes.mainText,
    color: colors.blackMain,
  },
  star: {
    flexDirection: 'row'
  },
  amount: {
    marginLeft: 4,
    fontFamily: fonts.bold,
    fontSize: sizes.min,
    color: colors.blackMain,
  }
});
