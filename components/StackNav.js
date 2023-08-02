import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';

import MapScreen from '../screens/MapScreen';
import TabNav from './TabNav';
import CustomHeader from './CustomHeader';

const Stack = createNativeStackNavigator();

function StackNav() {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={TabNav} 
      options={{ headerShown: false }} />
      <Stack.Screen name="Map" component={MapScreen} 
      options={{header: ({ navigation }) => (
        <CustomHeader navigation={navigation} title="Recent Trips" />
      ),      
      }} />
    </Stack.Navigator>
  );
}

export default StackNav;
