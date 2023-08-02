import React from 'react';
import { ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme, Avatar, IconButton } from 'react-native-paper';

const ActivePolicies = () => {

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
                        <View style={styles.policyRow}>
                            <Avatar.Image style={{marginRight: 20}}source={{uri: 'https://www.transparentpng.com/thumb/car-png/car-free-transparent-png-8.png'}} />
                            <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, marginRight: 50 }}>
                                <Text>GMC Jimmy</Text>
                                <Text>658G714Y</Text>
                            </View>
                            <Card.Actions>
                                <IconButton icon="chevron-right" mode="default"/>
                            </Card.Actions>
                        </View>
                        <View style={styles.policyRow}>
                            <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10, marginRight: 65 }}>
                                <Text>Policy Ends</Text>
                                <Text>25 June 2024</Text>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 10}}>
                                <Text>Next Payment</Text>
                                <Text>05 Aug 2023</Text>
                            </View>
                        </View>
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
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 300,
        marginVertical: 3,
      },
      policyRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }
});

export default ActivePolicies;
