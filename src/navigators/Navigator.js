import * as React from 'react';
import { HomeScreen } from '../screens/home/HomeScreen'
import { LikeScreen } from '../screens/like/LikeScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { BasketScreen } from '../screens/basket/BasketScreen';
import { Icon } from "../components/Icon";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#317AE8',
        inactiveTintColor: '#939399',
        style: {
          height: 96,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.15)',
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={32} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name='Like'
        component={LikeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="hearto" size={32} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={32} color={color}/>
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
  </NavigationContainer>
)
