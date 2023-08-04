import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper'; 
import ScoreAppBar from '../components/ScoreAppBar';
import DrivingMetrics from '../components/DrivingMetrics';

function ScoreScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.customContainer }]}>
      <ScrollView vertical>
        <ScoreAppBar/>
        <DrivingMetrics/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
});

export default ScoreScreen;
