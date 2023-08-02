import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomMap = ({ locationA, locationB }) => {
  const theme = useTheme();
  const apiKey = '4da78d843d294c938fce0e9cd6a66ef0';

  const [routeCoordinates, setRouteCoordinates] = useState([]);

  // Calculate latitude and longitude deltas
  const latitudeDelta = Math.abs(locationA.latitude - locationB.latitude) * 1.5;
  const longitudeDelta = Math.abs(locationA.longitude - locationB.longitude) * 1.5;

  const initialRegion = {
    latitude: (locationA.latitude + locationB.latitude) / 2,
    longitude: (locationA.longitude + locationB.longitude) / 2,
    latitudeDelta,
    longitudeDelta,
  };

  useEffect(() => {
    const fetchDirections = async () => {
      try {
        const url = `https://api.geoapify.com/v1/routing?waypoints=${locationA.latitude}%2C${locationA.longitude}%7C${locationB.latitude}%2C${locationB.longitude}&mode=drive&apiKey=${apiKey}`;

        const response = await fetch(url);
        const result = await response.json();

        if (result.features && result.features.length > 0) {
          const route = result.features[0].geometry.coordinates;

          // Update the routeCoordinates state with the processed coordinates
          const formattedCoordinates = route[0].map((coordinate) => ({
            latitude: coordinate[1], // Get latitude from the second element
            longitude: coordinate[0], // Get longitude from the first element
          }));

          setRouteCoordinates((prevCoordinates) => [...prevCoordinates, ...formattedCoordinates]);

        } else {
          console.error('Error: No route found in the API response');
        }
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    };

    fetchDirections();
  }, [locationA, locationB, apiKey]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={locationA} title="Point A" pinColor="black">
          <View style={styles.markerContainer}>
            <Text style={styles.markerText}>A</Text>
          </View>
        </Marker>
        <Marker coordinate={locationB} title="Point B" pinColor="black">
          <View style={styles.markerContainer}>
            <Text style={styles.markerText}>B</Text>
          </View>
        </Marker>
        <Polyline coordinates={routeCoordinates} strokeWidth={5} strokeColor="green" />
      </MapView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 5,
  },
  markerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  durationText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
});

export default CustomMap;
