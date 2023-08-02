import * as React from 'react';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './Theme';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './components/StackNav';




export default function App() {
  const theme = useTheme();
  const deviceColorScheme = useColorScheme();
  const isDarkTheme = deviceColorScheme === 'dark';

  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <NavigationContainer>
        <StatusBar style={isDarkTheme ? 'light' : 'dark'} backgroundColor={isDarkTheme ? darkTheme.colors.navBackground : lightTheme.colors.navBackground} /> 
          <StackNav />          
      </NavigationContainer>
    </PaperProvider>
  );
}
