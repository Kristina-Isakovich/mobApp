import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Icon } from '../../components/Icon';
import { colors, fonts, sizes } from '../../styles/style.json';
import { deviceHeight } from '../../device';

export const ModalOk = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType='fade'
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon style={styles.img} name='car' size={60} color={colors.accent}/>
          <Text style={styles.modalText}>Ваш заказ принят</Text>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Ок</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    paddingTop: 50,
    paddingBottom: 24,
    alignItems: 'center'
  },
  img: {
    marginBottom: 16
  },
  buttonClose: {
    height: deviceHeight * 6 / 100,
    width: 146,
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: colors.accent
  },
  textStyle: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: sizes.mainText
  },
  modalText: {
    color: colors.graySecondary,
    fontFamily: fonts.regular,
    fontSize: sizes.mainText,
    marginBottom: 28,
    textAlign: 'center'
  }
});
