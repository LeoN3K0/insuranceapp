import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Badge, Card, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeAppBar = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View>
      <Appbar.Header style={[styles.header, { backgroundColor: theme.colors.primary }]}>

        <View style={styles.containerTitle}>
          <Appbar.Content title="Hi, John!" color={theme.colors.onPrimary}  />
          <Appbar.Action icon="bell" color={theme.colors.onPrimary}/>
          <Badge size={6}  style={{ position: 'absolute', top: 15, right: 28 }} />
        </View>

        <View style={styles.containerSub}>
          <Text style={{color: theme.colors.onPrimary}}>Recent Trips</Text>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          <Card style={styles.card} onPress={() => navigation.navigate('Map')}>
            <Card.Content>
              <View style={styles.cardContainerDate}>
                <Text style={{ color: theme.colors.secondary, marginRight: 40 }}>Today, 05:00 a.m</Text>
                <Badge style={{ backgroundColor: '#feba52', marginRight: -5, }} size={25}>5</Badge>
              </View>  
              <View style={styles.cardContainerLocal}>
                <View style={styles.cardContainerDate}>
                  <Badge style={{ backgroundColor: theme.colors.primary, marginRight: 10, marginVertical: 2.5, }} size={10}/>
                  <Text>118 W Arroyo Ave, Pueblo CO</Text>
                </View>
                <View style={styles.dots}>
                <Badge style={{ backgroundColor: theme.colors.primary, marginLeft: 2, marginVertical: 2, }} size={3}/>
                <Badge style={{ backgroundColor: theme.colors.primary, marginLeft: 2, marginVertical: 2, }} size={3}/>
                <Badge style={{ backgroundColor: theme.colors.primary, marginLeft: 2, marginVertical: 2, }} size={3}/>
                <Badge style={{ backgroundColor: theme.colors.primary, marginLeft: 2, marginVertical: 2, }} size={3}/>
                </View>
                <View style={styles.cardContainerDate}>
                  <Badge style={{ backgroundColor: theme.colors.primary, marginRight: 10, marginVertical: 2.5, }} size={10}/>
                  <Text>1650 Telstar DR, Colorado Springs CO</Text>
                </View>
              </View>            
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
    height: 275,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  containerTitle: {
    flex: 2,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerSub: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    flexDirection: 'row', 
  },
  card: {
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 310,
    height: '80%'
  },
   cardContainerDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardContainerLocal: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  dots: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
  },
});

export default HomeAppBar;
