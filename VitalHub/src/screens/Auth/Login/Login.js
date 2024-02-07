import React from 'react';
import { Container } from '../../../components/Container/Style';
import { Logo } from '../../../components/Logo/Style';
import { Title } from '../../../components/Title/Style';
import { Input } from '../../../components/Input/Input';
import { LinkMedium } from '../../../components/Links/Style';
import { Button, ButtonFlex } from '../../../components/Button/Button';
import { View } from 'react-native';

const Login = ({navigation}) => {
  return (
    <Container>
      <Logo source={require("../../../assets/Images/LogoBlue.png")} />
      <Title >Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou E-mail" />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
      />


      <LinkMedium>Esqueceu sua senha</LinkMedium>

      <Button
        backgroudButton={'blue'}
        color={'white'}
        fieldButton={"blue"}
        titleButton={"Entrar".toUpperCase()}
        marginTopButton={15}
      />
      <ButtonFlex>


        <Button
          backgroudButton={'white'}
          color={'blue'}
          fieldButton={"blue"}
          titleButton={"Entrar com Google".toUpperCase()}
          marginTopButton={15}
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
          onClick={() => navigation.navigate("Cadastro")}
        />
      </View>

    </Container>
  );
};

export default Login;