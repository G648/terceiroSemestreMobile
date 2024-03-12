import React, { useEffect, useState, useRef } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Appearance } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync, //solicita o acesso à localização
  getCurrentPositionAsync, //recebe a localização atual
  watchPositionAsync, //monitorar o posicionamento
  LocationAccuracy
}
  from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from './utils/mapsApiKey';
import { Foundation } from '@expo/vector-icons';

export default function App() {
  const mapReference = useRef(null)
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.9510,
    longitude: -46.3390
  })
  const [theme, setTheme] = useState(false);

  async function getLocation() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const captureLocation = await getCurrentPositionAsync();
      setInitialPosition(captureLocation);
    }
  }

  useEffect(() => {
    getLocation();

    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 1000,
      distanceInterval: 1,

    }, async (response) => {
      await setInitialPosition(response)
      // mapReference.current?.animateCamera({
      //   pitch: 60,
      //   center: response.coords
      // })
      console.log(response);
    })
  }, [1000]);

  useEffect(() => {
    realoadMapView();
  }, [initialPosition]);

  async function realoadMapView() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      )
    }
  }

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <View style={styles.container}>
      {initialPosition != null ? (
        <MapView
          ref={mapReference}

          initialRegion={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={theme ? darkMaps : []}
        >
          <Marker
            coordinate={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
            }}
            title='Initial Position'
            pinColor={'red'}
          />

          <MapViewDirections
            origin={initialPosition.coords}
            destination={{
              latitude: -23.9510,
              longitude: -46.3390,
            }}
            strokeWidth={5}
            strokeColor='#496BBA'
            apikey={mapskey}
          />

          <Marker
            coordinate={{
              latitude: -23.9510,
              longitude: -46.3390,
            }}
            title='Você está aqui'
            pinColor={'blue'}
          />
        </MapView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Evento não carregado</Text>
          <ActivityIndicator />
        </View>
      )}



      <TouchableOpacity
        activeOpacity={.8}
        onPress={toggleTheme}
        style={[styles.button, theme && styles.buttonDark]}
      >
        <Text style={styles.buttonText}>{theme ? 'Tema Claro' : 'Tema Escuro'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={.8}
        onPress={() => realoadMapView()}
        style={[styles.zoomOut, theme && styles.buttonDark]}
      >
        <Foundation name="zoom-out" size={28} color={theme ? "white" : "black"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black'
  },
  button: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    position: 'absolute',
    bottom: 25,
    right: 80,
    justifyContent: 'center',
    alignItems: 'center',
    activeOpacity: 1,
    borderRadius: 8,
    backgroundColor: 'black'
  },
  buttonDark: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  buttonText: {
    color: 'white', // You might need to adjust text color depending on the button's background
    position: 'absolute',
    bottom: '10px',
  },
  zoomOut: {
    position: 'absolute',
    bottom: '2.3%',
    right: '10%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8
  }
});


export const darkMaps = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

const retroMapStyle = [
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ]
];
