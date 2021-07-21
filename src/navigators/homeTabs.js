import * as React from 'react';
import { HomeScreen } from '../screens/home/HomeScreen'
import { LikeScreen } from '../screens/like/LikeScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { BasketScreen } from '../screens/basket/BasketScreen';
import { Icon } from '../components/Icon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../styles/style.json';
import { deviceHeight } from "../device";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.accent,
      inactiveTintColor: colors.graySecondary,
      style: {
        height: deviceHeight * 12 / 100,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 16
      }
    }}
  >
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name='home' size={32} color={color}/>
        )
      }}
    />
    <Tab.Screen
      name='Like'
      component={LikeScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name='like' size={32} color={color}/>
        )
      }}
    />
    <Tab.Screen
      name='Search'
      component={SearchScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name='search' size={32} color={color}/>
        )
      }}
    />
    <Tab.Screen
      name='Basket'
      component={BasketScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color}) => (
          <Icon name='basket' size={32} color={color}/>
        )
      }}
    />
  </Tab.Navigator>
)
