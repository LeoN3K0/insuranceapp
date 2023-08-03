import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CustomMap from '../components/CustomMap';
import MapInfoCard from '../components/MapInfoCard';
import { Text } from 'react-native-paper';

const MapScreen = () => {
  const [locationA, setLocationA] = useState(null);
  const [locationB, setLocationB] = useState(null);
  const addressA = '118 W Arroyo Ave, Pueblo CO';
  const addressB = '1650 Telstar Dr, Colorado Springs CO';
  const apiKey = 'your key';

  useEffect(() => {
    const addressA = '118 W Arroyo Ave, Pueblo CO';
    const addressB = '1650 Telstar Dr, Colorado Springs CO';
  
    const geocodeAddress = async (address) => {
      try {
        const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const result = await response.json();
    
        if (result.features && result.features.length > 0) {
          const { lat, lon } = result.features[0].properties;
          const location = { latitude: lat, longitude: lon };
          return location;
        } else {
          console.warn(`Geocoding error for address: ${address}`);
          return null;
        }
      } catch (error) {
        console.warn(`Geocoding error for address: ${address}`, error);
        return null;
      }
    };    
  
    const fetchGeocodes = async () => {
      console.log('Geocoding addresses A and B...');
      try {
        const [locationAResult, locationBResult] = await Promise.all([
          geocodeAddress(addressA),
          geocodeAddress(addressB),
        ]);
  
        console.log('Location A Result:', locationAResult);
        console.log('Location B Result:', locationBResult);
  
        if (locationAResult && locationBResult) {
          setLocationA(locationAResult);
          setLocationB(locationBResult);
        } else {
          console.warn('Geocoding results are null.');
        }
      } catch (error) {
        console.error('Error while geocoding:', error);
        setLocationA(null);
        setLocationB(null);
      }
    };
  
    fetchGeocodes();
  }, []);

  if (!locationA || !locationB) {
    // You may choose to show a loading indicator here while geocoding is in progress
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Loading....</Text></View>;
  }

  const duration = '50min';
  const distance = '90.6km';

  return (
    <View style={{ flex: 1 }}>
      <CustomMap locationA={locationA} locationB={locationB} />
      <MapInfoCard duration={duration} distance={distance} addressA={addressA} addressB={addressB} />
    </View>
  );
};

export default MapScreen;
