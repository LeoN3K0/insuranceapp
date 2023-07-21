import { MD3DarkTheme, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const blueColor = '#2196F3';
const lightBlueColor = '#64B5F6';
const darkBlueColor = '#1565C0';

// Light theme
const lightTheme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: blueColor,
    accent: lightBlueColor,
    background: '#E3F2FD',
    surface: '#ffffff',
    text: '#000000',
    secondary: lightBlueColor,
    navBackground: '#ffffff',
  },
};

// Dark theme
const darkTheme = {
  ...MD3DarkTheme,
  roundness: 4,
  colors: {
    ...MD3DarkTheme.colors,
    primary: blueColor,
    accent: darkBlueColor,
    background: '#0D47A1',
    surface: '#121212',
    text: '#ffffff',
    secondary: darkBlueColor,
    navBackground: '#424242',
  },
};

export { lightTheme, darkTheme };
