import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Buttons } from "./Buttons";
import { Quadcopters } from "./Quadcopters";

export const Products = () => {
  const [activeTab, setActiveTab] = useState(0)
  let title = 'All Quadcopters';

  switch (activeTab) {
    case 0:
      title = 'All Quadcopters';
      break;
    case 1:
      title = 'Cheap Quadcopter';
      break;
    case 2:
      title = 'Best Quadcopter';
      break;
    case 3:
      title = 'Fast Quadcopter';
      break;
  }

  return (
    <View style={styles.products}>
      <Buttons activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Text style={styles.title}>{title}</Text>
      <Quadcopters activeTab={activeTab}/>
    </View>
  )
}

const styles = StyleSheet.create({
  products: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 20
  }
});
