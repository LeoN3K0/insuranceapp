import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './Theme';

export default function App() {
  const deviceColorScheme = useColorScheme();
  const isDarkTheme = deviceColorScheme === 'dark';

  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <View style={[styles.container, { backgroundColor: isDarkTheme ? darkTheme.colors.background : lightTheme.colors.background }]}>
        <Text style={{ color: isDarkTheme ? darkTheme.colors.text : lightTheme.colors.text }}>Open Erich to start working on your app!</Text>
        <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
