import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Auth/Navegacao/Navegacao';
import Login from './src/screens/Auth/Login/Login';
//import das fonts
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular, Quicksand_500Medium, Quicksand_300Light } from '@expo-google-fonts/quicksand';
import Cadastro from './src/screens/Auth/Cadastro/Cadastro';
import { VerificaEmail } from './src/screens/Auth/VerificaEmail/VerificaEmail';
import CadastroUser from './src/screens/Auth/CadastroUser/CadastroUser';
import DoctorHome from './src/screens/Doctor/DoctorHome';
import { BottomTabNavigation } from './src/settings/Routes/AppTabNavigationDoctor';
import MedicalRecord from './src/screens/Doctor/MedicalRecord';
import { MockData } from './src/utils/MockData';
import PatientHome from './src/screens/Patient/PatientHome';


export default function App() {
  //Instância do StackNavigator
  const Stack = createNativeStackNavigator();

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_300Light
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navegação
    //Container
    //StackNavigator
    //StackScreen

    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name='HomePatient'
        component={PatientHome}
        options={{title: 'HomePatient'}}
      />

        <Stack.Screen
          name='Home'
          component={BottomTabNavigation}
          options={{ title: 'Home' }}
        />

        <Stack.Screen
          name='MedicalRecord'
          component={MedicalRecord}
          options={{title: 'MedicalRecord'}}
        />

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
          options={{ title: 'VerificaEmail' }}
        />

        <Stack.Screen
          name='CadastroUser'
          component={CadastroUser}
          options={{ title: 'CadastroUser' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

