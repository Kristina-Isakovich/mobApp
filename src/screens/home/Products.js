import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Buttons } from './Buttons';
import { Quadcopters } from './Quadcopters';
import { sizes, fonts } from '../../styles/style.json'
import { deviceHeight } from '../../device';
import quadcopters from '../../quadcopters.json';

export const Products = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(0);
  let title = 'All Quadcopters';
  let data = [];

  switch (activeTab) {
    case 0:
      title = 'All Quadcopters';
      data = quadcopters;
      break;
    case 1:
      title = 'Cheap Quadcopter';
      data.push(quadcopters.reduce(
        (acc, curr) => acc.price < curr.price
          ? acc
          : curr
        , {}));
      break;
    case 2:
      title = 'Best Quadcopter';
      data.push(quadcopters.reduce(
        (acc, curr) => acc.stars > curr.stars
          ? acc
          : curr
        , {}));
      break;
    case 3:
      title = 'Fast Quadcopter';
      data.push(quadcopters[2]);
      break;
  }

  return (
    <View style={styles.products}>
      <Buttons activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Text style={styles.title}>{title}</Text>
      <Quadcopters data={data} navigation={navigation} key={activeTab}/>
    </View>
  )
}

const styles = StyleSheet.create({
  products: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: sizes.title,
    marginBottom: deviceHeight * 2.5 / 100,
  }
});
