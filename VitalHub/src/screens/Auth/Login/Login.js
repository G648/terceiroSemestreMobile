import React from 'react';
import { Container } from '../../../components/Container/Style';
import { Logo } from '../../../components/Logo/Style';
import { Title } from '../../../components/Title/Style';
import { Input, InputValues } from '../../../components/Input/Input';
import { LinkMedium, UnderlinedLink } from '../../../components/Links/Style';
import { Button, ButtonFlex } from '../../../components/Button/Button';
import { View } from 'react-native';
import { ComeBack } from '../../../components/GoBackPage/GoBackPage';
import { APP_COLORS } from '../../../utils/App_colors';

const Login = ({ navigation }) => {
  return (
    <Container>
      <ComeBack
        onClick={() => navigation.navigate('Navegacao')}
        buttonOpacity={1}
      />

      <Logo source={require("../../../assets/Images/LogoBlue.png")} />
      <Title >Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou E-mail" />

      <InputValues
        placeholder={"Senha"}
        secureTextEntry={true}
      />

      <UnderlinedLink
        textIntput={"Esqueceu a sua senha?"}
        ColorText={APP_COLORS.grayV4}
        buttonOpacity={.8}
        textAlign={'flex-start'}
        onClick={() => navigation.navigate('Cadastro')}
        buttonAlign={'flex-start'}
      />

      <Button
        backgroudButton={'blue'}
        color={'white'}
        fieldButton={"blue"}
        titleButton={"Entrar".toUpperCase()}
        marginTopButton={15}
        buttonOppacity={0.8}
      />

      <ButtonFlex>
        <Button
          backgroudButton={'white'}
          color={'blue'}
          fieldButton={"blue"}
          titleButton={"Entrar com Google".toUpperCase()}
          marginTopButton={15}
          buttonOppacity={0.6}
        />

      </ButtonFlex>

      <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", width: "90%", gap: -60 }}>
        <LinkMedium>
          Não tem conta ?
        </LinkMedium>
        <Button
          titleButton={"Criar uma conta agora!"}
          fieldButton={"transparent"}
          marginTopButton={15}
          color={'#4D659D'}
          onClick={() => navigation.navigate("CadastroUser")}
          buttonOppacity={0.8}
        />
      </View>

    </Container>
  );
};

export default Login;