import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QuadcopterScreen } from '../screens/quadcopter/quadcopterScreen';
import { Icon } from '../components/Icon';
import { StyleSheet, Text } from 'react-native';
import { HomeTabs } from './homeTabs';
import { colors } from '../styles/style.json';
import { deviceHeight } from "../device";

const Stack = createStackNavigator();

export const RootStack = () => {

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.bg,
          height: deviceHeight * 13 / 100,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        headerTitleAlign: 'left'
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeTabs}
        options={{
          headerTitle: props => <Text style={styles.title}>Quadrojoy</Text>,
          headerRight: () => (
            <Icon style={{marginRight: 16}} name='menu' size={21}/>
          )
        }}
      />
      <Stack.Screen
        name='Quadcopter'
        component={QuadcopterScreen}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'lato-extraBold',
    fontSize: 24
  }
});
