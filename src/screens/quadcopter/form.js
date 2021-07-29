import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { colors, fonts, sizes } from '../../styles/style.json';
import { deviceHeight } from '../../device';
import { ModalOk } from './modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaskedInput } from 'react-native-ui-lib';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Слишком короткое имя')
    .required('Обязательное поле'),
  phone: Yup.string()
    .min(9, 'Введите номер')
    .required('Обязательное поле'),
});

export const Form = () => {
  const [modalVisible, setModalVisible] = useState(false);
  let phone = null;

  const renderPhone = (value) => {
    phone = value.split('');
    const displayPhone = i => phone[i] ? phone[i] : '_';

    return (
      <Text style={styles.input}>
        +375{'   '}({displayPhone(0)}{displayPhone(1)})
        {displayPhone(2)}{displayPhone(3)}{displayPhone(4)}
        -{displayPhone(5)}{displayPhone(6)}
        -{displayPhone(7)}{displayPhone(8)}
      </Text>
    )
  }

  return (
    <Formik
      initialValues={{name: '', phone: ''}}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        phone = null;
        setModalVisible(true);
      }}
    >
      {(props) => (
        <View style={styles.form}>
          <View style={styles.container}>
            <View style={styles.inputName}>
              <TextInput
                style={styles.input}
                placeholder='Имя'
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                onBlur={props.handleBlur('name')}
              />
              {props.touched.name && props.errors.name &&
              <Text style={styles.error}>{props.touched.name && props.errors.name}</Text>}
            </View>

            <MaskedInput
              key={modalVisible}
              renderMaskedText={renderPhone}
              maxLength={9}
              keyboardType='numeric'
              onChangeText={props.handleChange('phone')}
              value={props.values.phone}
              onBlur={props.handleBlur('phone')}
            />
            {props.touched.phone && props.errors.phone &&
            <Text style={styles.error}>{props.touched.phone && props.errors.phone}</Text>}
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={props.handleSubmit}
          >
            <Text style={styles.btnText}>Заказать</Text>
          </TouchableOpacity>
          <ModalOk modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    flex: 1
  },
  container: {
    marginBottom: deviceHeight * 3.5 / 100
  },
  button: {
    height: deviceHeight * 6 / 100,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent
  },
  btnText: {
    fontFamily: fonts.regular,
    fontSize: sizes.mainText,
    color: colors.white
  },
  inputName: {
    marginBottom: 24
  },
  input: {
    fontFamily: fonts.regular,
    fontSize: sizes.mainText,
    color: colors.blackMain,
    height: deviceHeight * 3.7 / 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray
  },
  error: {
    paddingTop: 4,
    color: 'red'
  }
});
