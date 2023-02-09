import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { URL, TOKEN } from "@env";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";

const Map = () => {
  const [post, setPosts] = useState([]);
  const [items, setItems] = useState([
    { label: "北海道", value: "1" },
    { label: "東北", value: "2" },
    { label: "関東", value: "3" },
    { label: "中部", value: "4" },
    { label: "関西", value: "5" },
    { label: "中国", value: "6" },
    { label: "四国", value: "7" },
    { label: "九州・沖縄", value: "8" },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [place, setPlace] = useState(null);

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
    <MapView
      style={styles.map}
      provider={"google"}
      initialRegion={{
        latitude: 41.800156,
        longitude: 140.759112,
        latitudeDelta: 0.05,
        longirtudeDelta: 0.05,
      }}
      showsUserLocation={true}
    >
      <DropDownPicker
        style={{ marginTop: 20 }}
        items={items}
        setItems={setItems}
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        showArrow={true}
        onChangeValue={(value) => {
           setPlace(value);
        }}
        
      />

      {post.map((item) => {
        switch(place) {
          case "1":
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
            break;
          case "2":
            if (item.pref_code == "02") {
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
            break;
          case "3":
            if (item.pref_code == "03") {
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
            break;
          }
          
          
        })
      
    }
        
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "relative",
  },

  checkboxes: {
    //   display: "flex",
    //   flexDirection: "row",
    //   width:Dimensions.get('window').width,
    position: "absolute",
    bottom: 0,
  },

  pref: {
    //   position: "absolute",
    //   top: 200,
    //   zIndex: 10,
    backgroundColor: "white",
  },
});
