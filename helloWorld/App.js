import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={require('./src/assets/images/SENAI_São_Paulo_logo.png')}
        style={{ width: 200, height: 50, justifyContent: 'flex-start', top: "-33%" }}
      />

      <Text style={styles.fontStyle} >Bem vindo ao SENAI</Text>
      <View style={styles.flexInfo}>
        <TextInput
          style={styles.inputStyle}
          placeholder='Informe seu nome aqui...'
        />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text>
            Cadastrar
          </Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fontStyle: {
    color: "white",
    fontSize: 26,
    fontWeight: 'bold'
  },

  inputStyle: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 25,
    backgroundColor: 'lightgrey',
    paddingLeft: 5,
    borderRadius: 8

  },

  flexInfo: {
    width: '80%',
    gap: 15,
  },

  buttonStyle: {
    height: 40,
    backgroundColor: 'white,',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'lightgrey'
  }
});
