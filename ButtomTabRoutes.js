import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Travel1,
  Travel2,
  Travel3,
  TuruncuBisiklet,
  TuruncuBisiklet2,
} from '../Screens';
import {RoutesName} from '../config';
import {Icons} from '../assets';

const Tab = createBottomTabNavigator();
const ButtomTabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Travel2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                style={{tintColor: color, height: size, width: size}}
                source={Icons.home}
              />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Travel2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                style={{tintColor: color, height: size, width: size}}
                source={Icons.clock}
              />      
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={Travel3}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                style={{tintColor: color, height: size, width: size}}
                source={Icons.heart}
              /> 
          ),
        }}
      />
      <Tab.Screen
        name="Kullanıcı"
        component={Travel2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
              <Image
                style={{tintColor: color, height: size, width: size}}
                source={Icons.user2}
              />   
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTabRoutes;
