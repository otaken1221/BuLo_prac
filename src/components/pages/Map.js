import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView,  } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { URL, API_KEY } from '@env';
import axios from 'axios';






const url = URL;
console.log(url);



const Map = () => {
  
  axios.get(url, {headers: {AccessToken: API_KEY}})
  .then((results) => {
    console.log(results);
  })
  .catch((error) =>{
  console.log(error);
});

  
  return (
   <SafeAreaView>
    <MapView 
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 41.773481,
        longitude: 140.727657,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      />
   </SafeAreaView>
      
    
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
