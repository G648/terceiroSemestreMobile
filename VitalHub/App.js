import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Auth/Navegacao/Navegacao';
import Login from './src/screens/Auth/Login/Login';

//Instância do StackNavigator
const Stack = createNativeStackNavigator();
//import das fonts
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import Cadastro from './src/screens/Auth/Cadastro/Cadastro';
import { VerificaEmail } from './src/screens/Auth/VerificaEmail/VerificaEmail';
import CadastroUser from './src/screens/Auth/CadastroUser/CadastroUser';
export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_700Bold
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return (
    //Navegação
    //Container
    //StackNavigator
    //StackScreen

    //Envolve a estrutura da navegação 
    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          //nome da tela
          name='Navegacao'
          //Componente que será chamado
          component={Navegacao}
          //Titulo da tela
          options={{ title: 'Navegacao' }}
        />

        <Stack.Screen
          //nome da tela
          name='Login'
          //Componente que será chamado
          component={Login}
          //Titulo da tela
          options={{ title: 'Login' }}

        />

        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={{ title: 'Cadastro' }}
        />

        <Stack.Screen
          name='VerificaEmail'
          component={VerificaEmail}
          options={{title: 'VerificaEmail'}}
        />

        <Stack.Screen
          name='CadastroUser'
          component={CadastroUser}
          options={{title: 'CadastroUser'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

