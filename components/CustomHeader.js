import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, IconButton, Text, useTheme } from 'react-native-paper';

const CustomHeader = ({ navigation, title }) => {
  const theme = useTheme();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.backButtonContainer}>
        <IconButton
          icon="arrow-left"
          mode="contained"
          containerColor={theme.colors.surface}
          iconColor={theme.colors.primary}
          size={24}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.titleContainer}>
        <Card style={{marginRight: 50, borderRadius: 20}}>
        <Text style={styles.titleText}>{title}</Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,
    backgroundColor: 'transparent', 
  },
  backButtonContainer: {
    marginLeft: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default CustomHeader;
