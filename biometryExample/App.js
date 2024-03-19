import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication'
import moment from 'moment/moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {
  const [history, setHistory] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [biometricExist, setBiometricExist] = useState(false)

  async function CheckExistAuthentication() {
    //validar se o aparelho tem o acesso a biometria
    const compatible = await LocalAuthentication.hasHardwareAsync();

    setBiometricExist(compatible)

    //consultar as validações existentes 
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(LocalAuthentication.AuthenticationType[types[0]]);
  }

  async function HandleAuthentication() {
    const biometric = await LocalAuthentication.isEnrolledAsync();

    //validar se existe uma biometrica cadastrada 
    if (!biometric) {
      return Alert.alert(
        "Falha ao se autenticar",
        "não foi encontrado nenhuma biometria cadastrada"
      )
    }

    //caso exista -> 
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "VitalHub",
      disableDeviceFallback: true,
      cancelLabel: "Close biometrics prompt"
    })

    setAuthenticated(auth.success)

    if (auth.success) {
      SetHistory()
    }
  }

  async function SetHistory() {
    const objAuth = {
      dateAuthentication: moment().format('DD/MM/YYYY HH:MM:SS')
    }

    await AsyncStorage.setItem("auth", JSON.stringify(objAuth));

    setHistory(objAuth)
  }


  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem("auth")

    if (objAuth) {
      setHistory(JSON.parse(objAuth))
    }
  }
  useEffect(() => {
    CheckExistAuthentication();

    GetHistory()
    // SetHistory()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: 'center', lineHeight: 25 }}>
        {biometricExist ? 'Seu dispositivo é compativel com a biometria' : 'seu dispositivo não é compativel com a biometria'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => HandleAuthentication()}>
        <Text style={{ color: 'white' }}>
          Autenticar acesso
        </Text>
      </TouchableOpacity>

      <Text style={[styles.textReturn, { color: authenticated ? "green" : "red" }]}>
        {authenticated ? 'Autenticado' : 'Não autenticado'}
      </Text>

      {
        history.dateAuthentication ?
          <Text>
            Último acesso em {history.dateAuthentication}
          </Text>
          :
          null
      }
      <StatusBar style="auto" />
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
  button: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 8,
    marginTop: 20
  },
  textReturn: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 50
  }
});
