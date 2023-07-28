import React from 'react';
import { ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Card, Text, useTheme, Avatar, IconButton } from 'react-native-paper';

const DrivingMetrics = () => {
  const theme = useTheme();

  return (
    <View>
        <View style={styles.main}>
            <View style={styles.containerMetrics}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Driving Metrics</Text>
            </View>
            <ScrollView vertical contentContainerStyle={styles.scrollViewContainer}>
                <Card style={styles.metricCard}>
                    <Card.Content>
                        <View style={styles.metricRow}>
                            <Avatar.Icon style={{marginRight: 20, marginTop: 5, backgroundColor: theme.colors.primary}} icon='speedometer' size={35} />
                            <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 5, marginRight: 50 }}>
                                <Text>Speed</Text>
                                <Text>Excellent</Text>
                            </View>
                            <View style={{marginLeft: 175, alignItems: 'flex-end'}}>
                                <Text>10/10</Text>
                                <View style={{flexDirection: 'row'}}>
                                <Text><Avatar.Icon style={{backgroundColor: 'transparent'}} color='black' icon='trending-up' size={20}/></Text><Text>+2</Text>
                                </View>                                
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text>
                                How fast you drive, and whether you're staying within the speed limit.
                            </Text>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.metricCard}>
                    <Card.Content>
                        <View style={styles.metricRow}>
                            <Avatar.Icon style={{marginRight: 20, marginTop: 5, backgroundColor: theme.colors.primary}} icon='alert-octagon' size={35} />
                            <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 5, marginRight: 50 }}>
                                <Text>Braking</Text>
                                <Text>Good</Text>
                            </View>
                            <View style={{marginLeft: 175, alignItems: 'flex-end'}}>
                                <Text>8/10</Text>
                                <View style={{flexDirection: 'row'}}>
                                </View>                                
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text>
                                How quickly you stop, and if you give yourself time to slow down safely.
                            </Text>
                        </View>
                    </Card.Content>
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
    containerMetrics: {
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    scrollViewContainer: {
        flexDirection: 'column', 
      },
      metricCard: {
        marginHorizontal: 8,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 395,
        marginTop: 10,
        marginBottom: 10,
      },
      metricRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }
});

export default DrivingMetrics;
