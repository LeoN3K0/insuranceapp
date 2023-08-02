import React from 'react';
import { ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme, Avatar } from 'react-native-paper';

const InsuranceCoverage = () => {

  return (
    <View>
        <View style={styles.main}>
            <View style={styles.containerCoverage}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Insurance Coverage</Text>
            </View>
            <ScrollView horizontal contentContainerStyle={styles.scrollViewContainer}>
                <Card style={styles.coverageCard}>
                    <Card.Content>                        
                        <Avatar.Icon size={50}icon="tools"/>                        
                        <Text>Damage</Text>                        
                    </Card.Content>
                </Card>
                <Card style={styles.coverageCard}>                    
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
    containerCoverage: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scrollViewContainer: {
        flexDirection: 'row', 
      },
      coverageCard: {
        marginHorizontal: 8,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 300,
        marginVertical: 5
      },
      policyRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }
});

export default InsuranceCoverage;
