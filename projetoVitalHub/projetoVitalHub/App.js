import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//realizar a criação do stackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      //navegação

      //container
      //stackNavigator
      //stackScreen

      //envolve a estrutura da navegacão
      <NavigationContainer>
        {/* navegação em pilha, precisa realizar a criação do nativeStack */}
        <Stack.Navigator>
          {/* screen  */}
          <Stack.Screen
            name='Navegacao'
            component={Navegacao}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

