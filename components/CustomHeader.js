import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, IconButton, Text } from 'react-native-paper';

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.backButtonContainer}>
        <IconButton
          icon="arrow-left"
          color="white"
          size={24}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
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
    borderRadius: 30,
    marginLeft: 8,
    backgroundColor: 'white'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginRight: 75,
  },
});

export default CustomHeader;
