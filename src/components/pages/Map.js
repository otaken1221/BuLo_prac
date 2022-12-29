import { Dimensions, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  return (
   <SafeAreaView>
    <MapView style={styles.map} provider={PROVIDER_GOOGLE}/>
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
