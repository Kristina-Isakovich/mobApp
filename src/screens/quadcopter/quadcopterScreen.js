import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Form } from './form';
import { getImage } from '../../utils/getImage';
import { colors, fonts, sizes } from '../../styles/style.json';
import { deviceHeight } from '../../device';

export const QuadcopterScreen = ({route}) => {
  const item = route.params.item;

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image style={styles.img} source={getImage(item.id)}/>

        <View style={styles.textContainer}>
          <Text style={{
            fontFamily: fonts.regular,
            fontSize: sizes.mainText
          }}
          >
            Ordinary quadcopter
          </Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price} $</Text>
          <Text style={styles.about}>{item.about}</Text>
        </View>

        <Form/>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: deviceHeight * 5 / 100,
    backgroundColor: colors.bg
  },
  img: {
    width: '100%',
    height: deviceHeight * 33.5 / 100,
    marginBottom: 24
  },
  textContainer: {
    marginBottom: deviceHeight * 4 / 100
  },
  name: {
    fontFamily: fonts.extraBold,
    fontSize: sizes.max,
    marginBottom: 8
  },
  price: {
    fontFamily: fonts.bold,
    fontSize: sizes.title,
    color: colors.accent,
    marginBottom: 12
  },
  about: {
    fontFamily: fonts.regular,
    fontSize: sizes.mainText,
    color: colors.graySecondary
  }
});
