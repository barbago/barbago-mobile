import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const Map = () => {
  return (
    <MapView
      style={styles.map}
      showsMyLocationButton={true}
      showsUserLocation={true}
      mapType="mutedStandard"
      mapPadding={{ top: 16, right: 16, bottom: 130, left: 0 }}
      initialRegion={{
        latitude: 41,
        longitude: -73.83,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

/**
 * https://docs.expo.dev/versions/latest/sdk/map-view/#deploying-google-maps-to-an-ios-standalone
 * https://github.com/react-native-maps/react-native-maps/blob/master/example/examples/CustomTiles.js
 * https://github.com/react-native-maps/react-native-maps#customizing-the-map-style
 */
