import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0)

  function incremento() {
    setContador(contador + 1)
  }

  function decremento() {

    if (contador > 0) {
      setContador(contador - 1)
    } else {
      // Se o contador for menor ou igual a 0, exibe um alerta
      ToastAndroid.show("Erro, o contador já está em 0, não é possível decrementar mais.", ToastAndroid.SHORT);
      return;
    }
  }


  useEffect(() => {
    ToastAndroid.showWithGravity(
      `Contador atualizado ${contador}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }, [contador])

  return (
    <View style={styles.container}>
      <Text> Contador: {contador} </Text>

      <View style={styles.botaoFlex}>
        <TouchableOpacity
          onPress={incremento}
          style={styles.botaoStyle}
        >
          <Text style={styles.textStyle}>
            incremento
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={decremento}
          style={styles.botaoStyle}
        >
          <Text style={styles.textStyle}>
            decremento
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
  botaoFlex: {
    height: 150,
    width: 150,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  botaoStyle: {
    padding: 10, 
    backgroundColor: 'black',
    borderRadius: 8,
    // shadowColor: '#171717',
    // shadowOffset: {width: 2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    elevation: 10
  },
  textStyle: {
    color: 'white'
  }
});