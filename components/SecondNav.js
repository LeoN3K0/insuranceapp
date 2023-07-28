import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

function Nav() {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={MapScreen} 
      />
    </Stack.Navigator>
  );
}

export default Nav;
