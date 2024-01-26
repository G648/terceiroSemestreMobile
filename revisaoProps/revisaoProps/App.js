import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Person
        name={"Guilherme"}
        age={21}
      />
      <Person
        name={"Guilherme"}
        age={21}
      />
      <Person
        name={"Guilherme"}
        age={21}
      />
      <Person
        name={"Guilherme"}
        age={21}
      />
      <Person
        name={"Guilherme"}
        age={21}
      />
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
});
