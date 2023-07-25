import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import HomeAppbar from '../components/HomeAppBar';
import ActivePolicies from '../components/ActivePolicies';
import InsuranceCoverage from '../components/InsuranceCoverage';
import { ScrollView } from 'react-native';

function HomeScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView vertical>
        <HomeAppbar/>
        <ActivePolicies/>
        <InsuranceCoverage/>
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

export default HomeScreen;
