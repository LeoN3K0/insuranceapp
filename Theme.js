import { MD3DarkTheme, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const purpleColor = '#9c27b0';
const lightPurpleColor = '#ce93d8';
const darkPurpleColor = '#6a1b9a';

// Light theme
const lightTheme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: purpleColor,
    accent: lightPurpleColor,
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    secondary: lightPurpleColor,
  },
};

// Dark theme
const darkTheme = {
  ...MD3DarkTheme,
  roundness: 4,
  colors: {
    ...MD3DarkTheme.colors,
    primary: purpleColor,
    accent: darkPurpleColor,
    background: '#121212',
    surface: '#121212',
    text: '#ffffff',
    secondary: darkPurpleColor,
  },
};

export { lightTheme, darkTheme };