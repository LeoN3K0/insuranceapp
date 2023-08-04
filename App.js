import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './components/StackNav';
import { lightTheme, darkTheme } from './Theme';

export default function App() {
  const colorScheme = useColorScheme();

  // Use your custom themes based on the color scheme
  const paperTheme =
    colorScheme === 'dark'
      ? { ...darkTheme }
      : { ...lightTheme };

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={paperTheme}>
        <StatusBar /> 
        <StackNav />          
      </NavigationContainer>
    </PaperProvider>
  );
}
