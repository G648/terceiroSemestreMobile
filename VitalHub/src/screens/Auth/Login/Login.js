import React, { useState } from 'react';
import { Container, ContainerView } from '../../../components/Container/Style';
import { Logo } from '../../../components/Logo/Style';
import { Title } from '../../../components/Title/Style';
import { Input, InputValues } from '../../../components/Input/Input';
import { LinkMedium, UnderlinedLink } from '../../../components/Links/Style';
import { Button, ButtonFlex } from '../../../components/Button/Button';
import { View } from 'react-native';
import { ComeBack } from '../../../components/GoBackPage/GoBackPage';
import { APP_COLORS } from '../../../utils/App_colors';

const Login = ({ navigation }) => {

  const [selectUser, setSelectUser] = useState("")

  function handleSelectUser() {
    if (selectUser === "Paciente") {
      navigation.navigate("DoctorHome"); // Adicione a página correspondente para outro tipo de usuário
    } else {
      navigation.navigate("HomePatient");
    }
  }

  return (

    <Container >
      <ComeBack
        onClick={() => navigation.navigate('Navegacao')}
        buttonOpacity={1}
      />

      <Logo source={require("../../../assets/Images/LogoBlue.png")} />
      <Title>Entrar ou criar conta</Title>

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
        color={APP_COLORS.white}
        border={APP_COLORS.secondary}
        activeOpacity={1}
        title={"Entrar".toUpperCase()}
        marginTop={15}
        buttonOppacity={0.8}
        backgroundColor={APP_COLORS.secondary}
        onPress={() => handleSelectUser()}
      />

      <ButtonFlex>
        <Button
          border={APP_COLORS.secondary}
          marginTop={15}
          color={APP_COLORS.secondary}
          title={"Entrar com Google".toUpperCase()}
          buttonOppacity={.8}
        />
      </ButtonFlex>

      <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", justifyContent: 'space-between', width: "90%", gap: -60 }}>
        <LinkMedium>
          Não tem conta ?
        </LinkMedium>

        <UnderlinedLink
          textIntput={'Criar uma conta agora!'}
          ColorText={APP_COLORS.secondary}
          buttonOpacity={.8}
          onClick={() => navigation.navigate("CadastroUser")}
          buttonAlign={'end'}
        />
      </View>
    </Container>
  );
};

export default Login;