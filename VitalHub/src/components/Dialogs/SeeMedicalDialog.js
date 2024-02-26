import styled from "styled-components/native";
import { CenterContainer, ContainerTextBox, ModalContainer, TextModal } from "./CalcelDialogs";
import { ProfileImage, ProfileName } from "../FlatlistUsers/CardFlatlistUsers";
import { Button } from "../Button/Button";
import { APP_COLORS } from "../../utils/App_colors";


export const ContainerInfoUser = styled.View`
    flex-direction: row;
    width: ${({ widtContainerInfoUser }) => widtContainerInfoUser};
    justify-content: space-between;
`

export const Infouser = styled.Text`
    font-size: ${({ fontSizeAge }) => fontSizeAge};
`

export function SeeMedicalDialog({
    isVisible,
    closeModal,
    imageUser,
    widthImageUser,
    heightImageUser,
    nameUser,
    ageUser,
    emailuser,
    onPress,
    onPressCancel,
    showCancelButton
}) {
    return (
        <ModalContainer
            visible={isVisible}
            onRequestClose={closeModal}
            animationType='slide'
            transparent={true}
        >
            <CenterContainer>
                <ContainerTextBox>
                    <ProfileImage
                        source={imageUser}
                        width={widthImageUser}
                        height={heightImageUser}
                    />

                    <ProfileName>
                        {nameUser}
                    </ProfileName>


                    <ContainerInfoUser>
                        <Infouser>
                            {ageUser}
                        </Infouser>
                        <Infouser>
                            {emailuser}
                        </Infouser>
                    </ContainerInfoUser>

                    <Button
                        activeOpacity={.8}
                        backgroundColor={APP_COLORS.secondary}
                        border={APP_COLORS.secondary}
                        color={APP_COLORS.white}
                        onPress={onPress}
                        width={320}
                        title={"Inserir Prontuário"}
                    />

                    {showCancelButton && (
                        <UnderlinedLink
                            textIntput={"Cancelar"}
                            ColorText={APP_COLORS.secondaryV1}
                            buttonOpacity={.8}
                            buttonAlign={"center"}
                            onClick={onPressCancel}
                        />
                    )}
                </ContainerTextBox>
            </CenterContainer>
        </ModalContainer>
    )
}