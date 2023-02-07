import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { URL, TOKEN } from "@env";
import axios from "axios";
import { Checkbox } from "react-native-paper";



const Map = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    //  axios.get(url, { headers: { AccessToken: API_KEY } })
    //    .then((results) => {
    //      setPosts(results.data);
    //    })
    //    .catch((error) => {
    //      console.log(error);
    //    });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(URL, {
        headers: { AccessToken: TOKEN },
      });
      const arrayPost = Object.values(response.data.data);
      setPosts(arrayPost);
      // console.log(arrayPost);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 41.773481,
          longitude: 140.727657,
          latitudeDelta: 0.05,
          longirtudeDelta: 0.05,
        }}
        // onRegionChange={region => this.state.region = region}
        showsUserLocation={true}
      >
        {/* <View style={styles.checkboxes}>
          <Checkbox.Item
            label="北海道"
            status="checked"
            style={styles.pref}
          />
          <Checkbox.Item
            label="東北"
            status="checked"
            style={styles.pref}
          />
          <Checkbox.Item
            label="関東"
            status="checked"
            style={styles.pref}
          />
          <Checkbox.Item
            label="中部"
            status="checked"
            style={styles.pref}
          />
          <Checkbox.Item
            label="関西"
            status="checked"
            style={styles.pref}
          />
          <Checkbox.Item
            label="中国"
            status="checked"
            style={styles.pref}
          />
          <Checkbox.Item
            label="四国"
            status="checked"
            style={styles.pref}
          />
          <Checkbox.Item
            label="九州・沖縄"
            status="checked"
            style={styles.pref}
          />
          
        </View> */}
        {post.map((item) => {
          if (item.pref_code == "01") {
            return (
              <Marker
                pinColor={"red"}
                key={item.id}
                title={item.name}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
              ></Marker>
            );
          }
        })}
      </MapView>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  checkboxes: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 100,

  },

  pref: {
  //   position: "absolute",
  //   top: 200,
  //   zIndex: 10,
  backgroundColor: "white",
   },
});
