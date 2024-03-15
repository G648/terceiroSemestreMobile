import { StyleSheet, View, TouchableOpacity, Text, Modal, Image, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useState, useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons'


export default function App() {

  const cameraRef = useRef(null)
  const [photo, setPhoto] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.back)

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      setPhoto(photo.uri)

      setOpenModal(true)
      console.log(photo);
    }
  }

  async function SavePhoto() {
    if (photo) {
      await MediaLibrary.createAssetAsync(photo)
        .then(() => {
          Alert.alert("Sucesso", 'Foto salva na galeria')
        }).catch(() => {
          Alert.alert("erro ao processar foto")
        })
    }
  }

  // async function DeleteFuckingPhoto() {
  //   if (photo) {
  //     await MediaLibrary.deleteAssetsAsync(photo)
  //   }
  // }

  useEffect(() => {
    (async () => {
      //acesso a camera
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

      //acesso a galeria da camera
      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
    })();

  }, [])

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={typeCamera}
        style={styles.camera}

        ratio={'16:9'}
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.btnFlip} onPress={() => setTypeCamera(typeCamera == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>
              Trocar
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.btnCaptura} onPress={() => CapturePhoto()}>
        <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>

          <TouchableOpacity
            style={{ position: 'absolute', top: 40, left: 30 }}
            onPress={() => setOpenModal(false)}
          >
            <FontAwesome name="close" size={30} color="black" />
          </TouchableOpacity>

          <Image

            style={{ width: '100%', height: 500, borderRadius: 10 }}
            source={{ uri: photo }}
          />
        </View>

        <View style={{ margin: 15, flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => setOpenModal(false)}
          >
            <FontAwesome name="trash" size={30} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSave}
            onPress={() => SavePhoto()}
          >
            <FontAwesome name="save" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
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
  camera: {
    flex: 1,
    width: '100%',
    height: '80%'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip: {
    marginBottom: 20
  },
  txtFlip: {
    fontSize: 20,
    color: '#fff'
  },
  btnCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center'
  }
});
