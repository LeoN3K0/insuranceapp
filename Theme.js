import { MD3DarkTheme, MD3LightTheme as DefaultTheme, MD3LightTheme } from 'react-native-paper';


// Light theme
const lightTheme = {
  ...DefaultTheme,
  roundness: 4,
    colors: {
      ...MD3LightTheme.colors,
      primary: "rgb(68, 82, 196)",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(223, 224, 255)",
      onPrimaryContainer: "rgb(0, 10, 100)",
      customContainer: "rgb(210, 228, 255)",
    }
};

// Dark theme
const darkTheme = {
  ...MD3DarkTheme,
  roundness: 4,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "rgb(188, 194, 255)",
    onPrimary: "rgb(8, 26, 150)",
    primaryContainer: "rgb(41, 56, 171)",
    onPrimaryContainer: "rgb(223, 224, 255)",
    customContainer: "rgb(0, 73, 127)",
  }
};



export { lightTheme, darkTheme };
