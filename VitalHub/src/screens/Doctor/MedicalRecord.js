import React from 'react'
import { Container } from '../../components/Header/Header'
import { useRoute } from '@react-navigation/native';
import { ContainerInfoUser, Infouser, ProfileImageModal } from '../../components/Dialogs/SeeMedicalDialog';
import { ContainerTextBox } from '../../components/Dialogs/CalcelDialogs';
import { ProfileName } from '../../components/FlatlistUsers/CardFlatlistUsers';
import styled from 'styled-components/native';
import { APP_COLORS } from '../../utils/App_colors';


export const ContainerViewUserInfo = styled.View`
    width: 100%;
    height: 100%;
`

export const ScrollViewContainer = styled.ScrollView`
    width: 90%;
    height: 100%;
    top: -20px;
`

export const TextLabel = styled.Text`
    color: ${({ fontColor = "black" }) => fontColor};
    font-family:  'Quicksand_600SemiBold';
    font-size: ${({ fontSize = "16px" }) => fontSize};
`

export const InputStyle = styled.TextInput`
    width: ${({ boxWidth = '90px' }) => boxWidth};
    height: ${({ boxHeigth = "40px" }) => boxHeigth};
    border-width: 2px;
    border-color: ${({ borderColor = "black" }) => borderColor};
    border-radius: 8px;
`

export default function MedicalRecord({
    fontColor,
    fontSize,
    boxWidth,
    boxHeigth,
    borderColor
}) {

    const route = useRoute();
    const userData = route.params.userData;

    return (
        <Container>

            <ProfileImageModal
                source={{ uri: userData.imagem }}
                widthImageUser={"100%"}
                heightImageUser={280}
            />

            <ContainerTextBox
                padding={"5px"}
            >

                <ProfileName
                    marginBottomName={20}
                >
                    {userData.nome}
                </ProfileName>

                <ContainerInfoUser
                    widtContainerInfoUser={"68%"}
                >
                    <Infouser>
                        {`${userData.idade} anos`}
                    </Infouser>
                    <Infouser>
                        {userData.email}
                    </Infouser>
                </ContainerInfoUser>
            </ContainerTextBox>

            {/*  Scroll view para informações do user */}
            <ScrollViewContainer>
                <ContainerViewUserInfo>
                    <InputStyle
                        boxHeigth={'200px'}
                        boxWidth= {"100%"}
                        borderColor={APP_COLORS.primary}
                        placeholder='Descrição'
                    />
                    <InputStyle
                        boxHeigth={'100px'}
                        boxWidth= {"100%"}
                        borderColor={APP_COLORS.primary}
                        placeholder='diagnostico'
                    />
                    <InputStyle
                        boxHeigth={'200px'}
                        boxWidth= {"100%"}
                        borderColor={APP_COLORS.primary}
                        placeholder='Descrição'
                    />
                </ContainerViewUserInfo>
            </ScrollViewContainer>

        </Container>
    )
}