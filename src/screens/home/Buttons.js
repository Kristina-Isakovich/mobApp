import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../style.json';

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
            setActiveTab(indexId)
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
    marginBottom: 28
  },
  activeBtn: {
    height: 46,
    width: 78,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: colors.accent
  },
  btn: {
    height: 46,
    width: 78,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  name: {
    fontSize: 16,
    color: colors.blackMain,
  },
  activeName: {
    fontSize: 16,
    color: colors.white,
  }
});

