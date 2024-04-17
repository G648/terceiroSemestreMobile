import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVModeIOSOption,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
} from "react-native-audio-recorder-player";
// import RNFS from "react-native-fs";
import SoundPlayer from "react-native-sound-player";

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPath, setAudioPath] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalDuration, setTotalDuration] = useState("")

  const audioRecording = async () => {
    const generateAudioName = () => {};

    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVModeIOS: AVModeIOSOption.measurement,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    const meteringEnabled = false;
    // Let the countdown begin…or not!
    await setCountdown(0);
    await setSeconds(0);
    await setMinutes(0);
    setStartCountdown(true);
    try {
      // Start the recording and get the audio URI
      const uri = await audioRecorderPlayer?.current?.startRecorder(
        path,
        audioSet,
        meteringEnabled
      );
      setIsRecording(true);
      setAudio;
      setAudioPath(uri);
    } catch (error) {
      console.log("Uh-oh! Failed to start recording:", error);
    }
  };

  const stopRecording = async () => {
    setStartCountdown(false);
    try {
      // Stop the recording and see what we've got
      const result = await audioRecorderPlayer?.current?.stopRecorder();
      setIsRecording(false);
    } catch (error) {
      console.log("Oops! Failed to stop recording:", error);
    }
  };

  const prepRecording = async () => {
    setStartCountdown(false);
    try {
      // Stop the recording (for real this time)
      const result = await audioRecorderPlayer?.current?.stopRecorder();
      const fileContent = await RNFS.readFile(audioPath, "base64");
      const fileInfo = await RNFS.stat(audioPath);
      const vnData = {
        fileCopyUri: fileInfo?.path,
        size: fileInfo?.size,
        type: "audio/mpeg",
        name: `${generateAudioName()}.${getFileType(fileInfo?.path)}`,
      };
      const vnBase = `data:application/audio;base64,${fileContent}`;
      setAudioFile(vnData);
      setAudioBase(vnBase);
      // Now input code here to send your voicenote to websocket endpoint.
      setIsRecording(false);
    } catch (error) {
      console.log("Uh-oh! Failed to stop and send recording:", error);
    }
  };

  const playAudio = async (newAudioUrl) => {
    if (audioPath === newAudioUrl) {
      try {
        if (isPlaying) {
          await SoundPlayer.pause(); // Pausar o áudio se já estiver sendo reproduzido
          setIsPlaying(false);
        } else {
          await SoundPlayer.resume(); // Retomar a reprodução do áudio se estiver pausado
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Oh no! Ocorreu um erro ao pausar/resumir o áudio:", error);
      }
    } else {
      try {
        if (isPlaying) {
          await SoundPlayer.stop(); // Parar o áudio atualmente reproduzido
        }
        // Defina o novo áudio como o áudio ativo
        setAudioPath(newAudioUrl);
        setIsPlaying(true);
        // Inicie a reprodução do novo áudio
        SoundPlayer.addEventListener("FinishedPlaying", () => {
          setIsPlaying(false); // Redefinir o estado de reprodução quando o áudio terminar
          setAudioPath(""); // Limpar o caminho do áudio ao terminar a reprodução
        });
        await SoundPlayer.playUrl(newAudioUrl); // Reproduzir o novo áudio
        const audio = await SoundPlayer.getInfo();
        setTotalDuration(audio?.duration);
      } catch (error) {
        console.log("Oops! Ocorreu um erro ao reproduzir o áudio:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isRecording && styles.recordingButton]}
        onPress={isRecording ? stopRecording : audioRecording}
      >
        <Text style={styles.buttonText}>
          {isRecording ? "Parar Gravação" : "Iniciar Gravação"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isPlaying && styles.playingButton]}
        onPress={() => playAudio(audioPath)}
        disabled={!audioPath}
      >
        <Text style={styles.buttonText}>
          {isPlaying ? "Parar Reprodução" : "Reproduzir Áudio"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.durationText}>
        {isRecording ? "Gravando..." : isPlaying ? "Reproduzindo..." : ""}
      </Text>
      <Text style={styles.durationText}>
        {totalDuration > 0 ? `Duração Total: ${totalDuration} segundos` : ""}
      </Text>
      <StatusBar style="auto" />
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
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  recordingButton: {
    backgroundColor: "red",
  },
  playingButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  durationText: {
    marginTop: 10,
    fontSize: 14,
  },
});
