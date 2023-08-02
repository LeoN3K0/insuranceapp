import * as React from 'react';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme,} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
//import { lightTheme, darkTheme } from './Theme';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './components/StackNav';




export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={paperTheme}>
        <StatusBar/> 
          <StackNav />          
      </NavigationContainer>
    </PaperProvider>
  );
}
