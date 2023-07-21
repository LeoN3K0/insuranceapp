import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './Theme';
import { NavigationContainer } from '@react-navigation/native';

import Nav from './components/Nav';

export default function App() {
  const deviceColorScheme = useColorScheme();
  const isDarkTheme = deviceColorScheme === 'dark';

  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <NavigationContainer>
        <StatusBar style={isDarkTheme ? 'light' : 'dark'} />   
        <Nav />        
      </NavigationContainer>
    </PaperProvider>
  );
}
