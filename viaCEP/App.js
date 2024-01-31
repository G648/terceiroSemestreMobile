import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TitleStyle } from './src/components/title/title';
import { Container } from './src/components/container/container';
import { Logo } from './src/components/Image/image';
import { InputStyle } from './src/components/inputs/inputs';
import { Div, DivFlex } from './src/components/div/div';
import homeScreen from './src/screens/homeScreen';

export default function App() {
  return (
    <Container>
      <Logo
        source={require('./src/assets/images/viaCEPImage.png')}
      />

      <Div>
        <TitleStyle>Informe o CEP:</TitleStyle>
        <InputStyle
          placeholder="Ex: 01010010"
        />
      </Div>

      <Div>
        <TitleStyle>Logradouro</TitleStyle>
        <InputStyle />
      </Div>

      <Div>
        <TitleStyle>Número</TitleStyle>
        <InputStyle
          placeholder="Ex: 79"
        />
      </Div>

      <Div>
        <TitleStyle>Bairro</TitleStyle>
        <InputStyle />
      </Div>

      <Div>
        <TitleStyle>Cidade</TitleStyle>
        <InputStyle />
      </Div>

      <DivFlex>
        <Div>
          <TitleStyle>Estado</TitleStyle>
          <InputStyle variant='estado' />
        </Div>

        <Div>
          <TitleStyle>UF</TitleStyle>
          <InputStyle variant='uf' />
        </Div>
      </DivFlex>

      <StatusBar style="auto" />

      

    </Container>
  );
}
