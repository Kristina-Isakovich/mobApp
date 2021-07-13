import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'home'}>
      <Stack.Screen name={'home'} component={} />
      <Stack.Screen name={'like'} component={} />
      <Stack.Screen name={'search'} component={} />
      <Stack.Screen name={'basket'} component={} />
    </Stack.Navigator>
  );
};
