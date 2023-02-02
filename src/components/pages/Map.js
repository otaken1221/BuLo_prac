import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { URL, API_KEY } from "@env";
import axios from "axios";

const url = URL;

const Map = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(url, { headers: { AccessToken: API_KEY } })
      .then((results) => {
        setPosts(results.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 41.773481,
          longitude: 140.727657,
          latitudeDelta: 0.05,
          longirtudeDelta: 0.05,
        }}
      >
        {post.map((item) => {
          return (
            <Marker
              pinColor={"red"}
              key={item.id}
              title={item.name}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
            >
              
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
