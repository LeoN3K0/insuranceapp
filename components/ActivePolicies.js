import React from 'react';
import { ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme, Avatar, IconButton } from 'react-native-paper';

const ActivePolicies = () => {
  const theme = useTheme();

  return (
    <View>
        <View style={styles.main}>
            <View style={styles.containerPolicy}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Active Policies</Text>
                <Text>View All</Text>
            </View>
            <ScrollView horizontal contentContainerStyle={styles.scrollViewContainer}>
                <Card style={styles.policyCard}>
                    <Card.Content>
                        <Avatar.Image source={{uri: 'https://www.transparentpng.com/thumb/car-png/car-free-transparent-png-8.png'}} />
                        <Text>GMC Jimmy</Text>
                        <Text>658G714Y</Text>
                        <Card.Actions>
                            <IconButton icon="chevron-right" mode="default"/>
                        </Card.Actions>
                        <Text>Policy Ends</Text>
                        <Text>Date</Text>
                        <Text>Next Payment</Text>
                        <Text>Date</Text>
                    </Card.Content>
                </Card>
                <Card style={styles.policyCard}>
                    
                </Card>
            </ScrollView>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    main:{
        marginTop: 25,        
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    containerPolicy: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scrollViewContainer: {
        flexDirection: 'row', 
      },
      policyCard: {
        marginHorizontal: 8,
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 300,
      },
});

export default ActivePolicies;
