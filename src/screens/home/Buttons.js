import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, sizes } from '../../styles/style.json';
import { deviceHeight } from '../../device';

const buttons = [
  {
    indexId: 0,
    name: 'All'
  },
  {
    indexId: 1,
    name: 'Cheap'
  },
  {
    indexId: 2,
    name: 'Best'
  },
  {
    indexId: 3,
    name: 'Fast'
  }
]

export const Buttons = ({activeTab, setActiveTab}) => {
  return (
    <View style={styles.buttons}>
      {buttons.map(({indexId, name}) => (
        <TouchableOpacity key={indexId}
          onPress={() => {
            setActiveTab(indexId);
          }}
          style={activeTab === indexId ? styles.activeBtn : styles.btn}
        >
          <Text style={activeTab === indexId ? styles.activeName : styles.name}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: deviceHeight * 3.5 / 100
  },
  activeBtn: {
    height: deviceHeight * 6 / 100,
    width: 78,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.accent
  },
  btn: {
    height: deviceHeight * 6 / 100,
    width: 78,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lightGray
  },
  name: {
    fontFamily: fonts.regular,
    fontSize: sizes.mainText,
    color: colors.blackMain,
  },
  activeName: {
    fontFamily: fonts.regular,
    fontSize: sizes.mainText,
    color: colors.white,
  }
});
