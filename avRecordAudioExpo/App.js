import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export default function App() {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [inputValue, setInputValue] = useState("");

  // console.log(inputValue);

  async function getTextToSpeech() {
    const url = `https://localhost:7225/api/Speech/TextToSpeech?text=${encodeURIComponent(inputValue)}`;

    console.log(url);


    try {
      const response = await fetch(url);

      if (response.ok) {
        // Se a resposta estiver OK, leia e exiba os dados
        const data = await response.text(); // Use .text() para ler o corpo da resposta
        console.log("Dados recebidos com sucesso:", data);
      } else {
        // Se a resposta não estiver OK, lance um erro
        throw new Error("Erro ao receber resposta do servidor");
      }
    } catch (error) {
      // Se ocorrer um erro durante a solicitação, capture e lide com ele aqui
      console.log("Ocorreu um erro:", error.message);
    }
  }

  async function _askForPermission() {
    if (permissionResponse.status !== "granted") {
      console.log("Requesting permission..");
      await requestPermission();
    }
  }

  async function startRecording() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
  }

  useEffect(() => {
    _askForPermission();
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Informe alguma coisa"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.inputStyle}
      />

      <Button 
        title="enviar dados" 
        onPress={() => getTextToSpeech()} 
      />

      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    // borderColor: 'black',
    padding: 10,
    borderWidth: 1,
    width: "90%",
    marginBottom: 20,
  },
});
