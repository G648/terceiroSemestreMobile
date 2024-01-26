import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_900Black } from '@expo-google-fonts/roboto'

export default function App() {

  const [fontsLoad, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_900Black
  })

  if (!fontsLoad && !fontError) {
    return <Text> Carregando... </Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/images/undraw_Mobile_login_re_9ntv.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.robotoBold}>Seja bem vindo a tela de login</Text>

      <View style={styles.viewFlex}>
        <Text
          style={styles.robotoNormal}
          aria-label='emailUsuario'
          nativeID='labelEmail'>
          Informe o email do usuário
        </Text>
        <TextInput
          placeholder='Digite o Email'
          style={styles.inputStyle}
        />
        <Text
          style={styles.robotoNormal}
          aria-label='senhaUsuario'
          nativeID='labelSenha'>
          Informe a senha do usuário
        </Text>
        <TextInput
          placeholder='Digite a senha'
          secureTextEntry={true}
          style={styles.inputStyle}
        />

        <TouchableOpacity style={styles.btnLogin}>
          <Text>
            Login
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 240,
    width: 260,
    top: '-5%'
  },
  viewFlex: {
    height: 300,
    borderColor: 'black',
    justifyContent: 'space-evenly',
    width: '80%'
  },
  btnLogin: {
    borderColor: 'black',
    backgroundColor: '#00BFA6',
    height: 50,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    height: 40
  },
  robotoBold: {
    fontFamily: 'Roboto_900Black',
    fontSize: 24,
    marginBottom: 60
  },
  robotoNormal: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
  }
});
