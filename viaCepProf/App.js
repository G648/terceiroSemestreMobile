import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header';
// import { FormComponents } from './src/components/FormComponents';
import { HomeScreen } from './src/screens/HomeScreen';


export default function App() {

  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp >

      <StatusBar/>

      <Header />

      <HomeScreen/>

    </ContainerApp>
  );
}
