import { StyleSheet } from 'react-native';
import { colors } from './style.json';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg
  },
});
