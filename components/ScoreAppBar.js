import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, Avatar, useTheme } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ScoreAppBar = () => {
  const theme = useTheme();

  return (
    <View>
      <Appbar.Header style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Appbar.Content style={{marginTop: 10}} title='Your average driving score' color={theme.colors.onPrimary}/>
        <AnimatedCircularProgress
          size={360}
          style={{height: 190}}
          width={15}
          arcSweepAngle={179}
          rotation={-90}
          fill={70}
          tintColor="lightgreen"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#FFFFFF"
          lineCap='round'
          fillLineCap='round'
          padding={10}>
            {
              type = () =>(
                <View style={{marginBottom: 150}}>
                  <Text style={{alignSelf: 'center', color: theme.colors.onPrimary}} >Good</Text>
                  <Text style={{alignSelf: 'center', fontSize: 75, color: theme.colors.onPrimary}}>7</Text>
                </View>
              )
              
            }
          </AnimatedCircularProgress> 
          <View style={{bottom: 5, flexDirection: 'row', marginTop: 10}}>
            <View style={{right: 40}}><Text style={{color: theme.colors.onPrimary}}>0</Text></View>
            <View style={{flexDirection: 'row'}}><Text style={{bottom: 5}}><Avatar.Icon color={theme.colors.onPrimary} icon='trending-up' size={30} style={{backgroundColor: 'transparent'}} /></Text><Text style={{color: theme.colors.onPrimary}}> 2 points better than last week</Text></View>
            <View style={{left: 45}}><Text style={{color: theme.colors.onPrimary}}>10</Text></View>
          </View>    
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
    alignItems: 'center',
  },
});

export default ScoreAppBar;
