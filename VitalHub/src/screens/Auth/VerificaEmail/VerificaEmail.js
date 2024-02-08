import React from "react"
import { Container } from "../../../components/Container/Style"
import { ComeBack } from "../../../components/GoBackPage/GoBackPage"
import { Logo } from "../../../components/Logo/Style"
import { Title } from "../../../components/Title/Style"
import { ParagrafText } from "../../../components/Paragraf/Paragraf"
import { APP_COLORS } from "../../../utils/App_colors"
import { InputValidator } from "../../../components/InputValidationEmail/InputValidationEmail"


export const VerificaEmail = ({navigation}) => {
    return(
        <Container>
            <ComeBack
                isClosable={true}
                onClick={() => navigation.navigate('Login')}
            />

            <Logo
                source={require('../../../assets/Images/LogoBlue.png')}
            />

            <Title>
                Verifique seu e-mail
            </Title>
            
            <ParagrafText
                FontSizeParagrafo={15}
                FontColorParagrafo={APP_COLORS.grayV2}
                textValue={"Digite o código de 4 dígitos enviado para username@email.com"}
            />

            <InputValidator/>
            <InputValidator/>
            <InputValidator/>
            <InputValidator/>
        </Container>
    )
}