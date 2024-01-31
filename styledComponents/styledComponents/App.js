import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Container style={styles.container}>
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
    </Container>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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
