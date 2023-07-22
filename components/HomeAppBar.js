import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, useTheme } from 'react-native-paper';

const HomeAppBar = () => {
  const theme = useTheme();

  return (
    <View>
      {/* Parent container */}
      <Appbar.Header style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        {/* Container with yellow background */}
        <View style={styles.containerYellow}>
          <Appbar.Content title="Hi, John!" />
          <Appbar.Action icon="bell" />
        </View>

        {/* Container with red background */}
        <View style={styles.containerRed}>
          <Text>Recent Trips</Text>
        </View>

        {/* Container with green background */}
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Test Card 1</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Test Card 2</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Test Card 3</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Test Card 4</Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'column',
    justifyContent: 'space-between', // Spacing between the containers and other header content
    alignItems: 'flex-start', // Center items vertically within the header
  },
  containerYellow: {
    flex: 1, // Take 1/3 of the available space
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerRed: {
    flex: 1, // Take 1/3 of the available space
    width: '100%',
    padding: 10,
  },
  scrollViewContent: {
    flexDirection: 'row', // Set the horizontal scroll direction for the ScrollView
  },
  card: {
    marginRight: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeAppBar;
