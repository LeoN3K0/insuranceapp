import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ScoreScreen from '../screens/ScoreScreen';
import GarageScreen from '../screens/GarageScreen';
import SupportScreen from '../screens/SupportScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function TabNav() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: theme.colors.navBackground}}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.text}
    >
      <Tab.Screen
        name="MainHome"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Score"
        component={ScoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star-shooting" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Garage"
        component={GarageScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-processing-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
