import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Badge, Avatar, useTheme } from 'react-native-paper';

const InfoCard = ({ duration, distance, addressA, addressB }) => {
  const theme = useTheme();
  const [isBigCard, setIsBigCard] = useState(false);

  const toggleCardSize = () => {
    setIsBigCard(!isBigCard);
  };

  return (
    <Card style={styles.card} onPress={toggleCardSize}>
      <View style={styles.grayBar} />
      <View style={styles.contentContainer}>
        {isBigCard ? (
          <>
            <View style={styles.textContainer}>
            <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.duration}>{duration}</Text>
            <Text style={styles.distance}>{distance}</Text>
            </View>
            <Text>Today, 05:00 a.m</Text>
            </View>
            <Badge style={[styles.badge, { backgroundColor: 'gold', alignSelf: 'center' }]} size={30}>5</Badge>
            </View>
            <Card style={[styles.adressCard, {backgroundColor: theme.colors.background,}]}>
            <Card.Content>
            <View style={styles.addressContainer}>
            <View style={styles.cardContainer}>
            <Avatar.Icon icon={'circle'} style={{ backgroundColor: theme.colors.secondary, marginRight: 10, marginVertical: 5}} size={15}/>
            <Text>{addressA}</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'flex-start',}}>
            <Badge style={{ backgroundColor: theme.colors.secondary, marginLeft: 2, marginVertical: 2.5, }} size={3}/>
            <Badge style={{ backgroundColor: theme.colors.secondary, marginLeft: 2, marginVertical: 2.5, }} size={3}/>
            <Badge style={{ backgroundColor: theme.colors.secondary, marginLeft: 2, marginVertical: 2.5, }} size={3}/>
            <Badge style={{ backgroundColor: theme.colors.secondary, marginLeft: 2, marginVertical: 2.5, }} size={3}/>
            </View>
            <View style={styles.cardContainer}>
            <Avatar.Icon icon={'circle'} style={{ backgroundColor: theme.colors.secondary, marginRight: 10, marginVertical: 5 }} size={15}/>
            <Text>{addressB}</Text>
            </View>
            </View>
            </Card.Content>
            </Card>
          </>
        ) : (
          <>
            <View style={styles.textContainer}>
            <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.duration}>{duration}</Text>
            <Text style={styles.distance}>{distance}</Text>
            </View>                     
            </View>
            <Badge style={[styles.badge, { backgroundColor: 'gold', alignSelf: 'center' }]} size={30}>5</Badge>
            </View>
          </>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  grayBar: {
    height: 5,
    width: '20%', // Adjust the width as per your design
    backgroundColor: '#D3D3D3',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop: 10,
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center', // Center the content horizontally
  },
  textContainer: {
    flexDirection: 'row',
  },
  duration: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 3,
  },
  distance: {
    fontSize: 15,
    paddingLeft: 2,
  },
  adressCard: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  addressContainer: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default InfoCard;
