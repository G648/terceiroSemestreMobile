import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

export default function MedicalExamsPhotos() {

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

    useEffect(() => {
        (async () => {
          //acesso a camera
          const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
    
          //acesso a galeria da camera
          const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    
      }, [])

    return (
        <View>
            <Text>MedicalExamsPhotos</Text>
        </View>
    )
}