import React from "react"
import { Container } from "../../../components/Container/Style";
import { Logo } from "../../../components/Logo/Style";
import { Title } from "../../../components/Title/Style";
import { TitleStyle } from "../../../components/Button/Button";
import { Paragraf, ParagrafText } from "../../../components/Paragraf/Paragraf";

const Cadastro = () => {
    return(
        <Container>

            <Logo 
                source={require('../../../assets/Images/LogoBlue.png')}
            />

           <Title>
            Criar Conta
           </Title>

          <ParagrafText/>

        </Container>
    )
}

export default Cadastro;