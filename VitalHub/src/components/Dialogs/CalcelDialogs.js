import React from 'react'
import { Modal } from 'react-native'
import { styled } from 'styled-components/native'
import { Title } from '../Title/Style'
import { APP_COLORS } from '../../utils/App_colors'
import { Button } from '../Button/Button'
import { UnderlinedLink } from '../Links/Style'


export const ModalContainer = styled(Modal)`
`

export const CenterContainer = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    align-items:center;
    justify-content:center;
`

export const ContainerTextBox = styled.View`
    background-color: ${APP_COLORS.white};
    border-radius: 8px;
    padding: ${({padding = "25px"}) => padding};
    align-items: ${({alignItemsContainer = "center"}) => alignItemsContainer};
`

export const TextModal = styled(Title)`
    text-align:center;
    font-size: ${({ fontSizeText = "18px" }) => fontSizeText};
    padding-bottom: 15px;
`

export const TextParagrafModal = styled(TextModal)`
`

export default function CancelDialogs({
    titleContent,
    isVisible,
    closeModal,
    fontSizeText,
    fontSizeTextParagraf,
    onPressConfirm,
    onPressCancel,
    customContent,
    confirmButtonTitle,
    showCancelButton,
    cancelButtonTitle,
    alignItemsContainer,
    paddingTitle
}) {
    return (
        <ModalContainer
            visible={isVisible}
            onRequestClose={closeModal}
            animationType='slide'
            transparent={true}
        >
            <CenterContainer>
                <ContainerTextBox
                    padding={paddingTitle}
                    alignItemsContainer={alignItemsContainer}
                >

                    <TextModal
                        fontSizeText={fontSizeText}
                    >
                        {titleContent}
                    </TextModal>

                    <TextParagrafModal
                        fontSizeText={fontSizeTextParagraf}
                    >
                        {customContent}
                    </TextParagrafModal>


                    <Button
                        activeOpacity={.8}
                        backgroundColor={APP_COLORS.secondary}
                        border={APP_COLORS.secondary}
                        color={APP_COLORS.white}
                        title={confirmButtonTitle || "Confirmar"}
                        width={320}
                        onPress={onPressConfirm}
                    >

                    </Button>

                    {showCancelButton && (
                        <UnderlinedLink
                            textIntput={cancelButtonTitle || "Cancelar"}
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