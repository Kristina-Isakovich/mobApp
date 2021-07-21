import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { colors, fonts, sizes } from '../../styles/style.json';
import { deviceHeight } from '../../device';
import { ModalOk } from './modal';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  phone: Yup.string()
    .required('Required'),
});

export const Form = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Formik
      initialValues={{name: '', phone: ''}}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
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
              {props.touched.name && props.errors.name && <Text style={styles.error}>{props.touched.name && props.errors.name}</Text>}
            </View>

            <TextInput
              style={styles.input}
              placeholder='+375 (__)___-__-__'
              onChangeText={props.handleChange('phone')}
              value={props.values.phone}
              onBlur={props.handleBlur('phone')}
            />
            {props.touched.phone && props.errors.phone && <Text style={styles.error}>{props.touched.phone && props.errors.phone}</Text>}
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
    padding: 12,
    borderRadius: 8,
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
