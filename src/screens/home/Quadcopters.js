import React from 'react';
import { FlatList } from 'react-native';
import { CardQuadcopter } from "../../components/cardQuadcopter";
import quadcopters from '../../quadcopters.json';

export const Quadcopters = ({activeTab}) => {
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

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      horizontal={true}
      renderItem={CardQuadcopter}>
    </FlatList>
  )
}
