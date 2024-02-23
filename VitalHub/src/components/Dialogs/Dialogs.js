import React from 'react'
import { Modal } from 'react-native'
import {styled} from 'styled-components/native'
import { Title } from '../Title/Style'

export const ContainerModal = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    margin-top: ${({ marginTop }) => marginTop};
`

export const CenterContainer = styled(ContainerModal)`

`

export const ModalContainer = styled(Modal)`
    /* padding: ${({ padding }) => padding}; */
    /* background-color: ${({ bgColor }) => bgColor};
    border-radius: ${({ borderRadius }) => borderRadius};
    elevation: ${({ elevation }) => elevation};
    align-items: ${({ alignItems }) => alignItems}; */
`

export const TextModal = styled(Title)`
    color: ${({colorText}) => colorText};
`

export default function Dialogs({
    titleContent,
    isVisible,
    closeModal,
    // padding,
    // borderRadius,
    // elevation,
    // alignItems,
    // bgColor
}) {
    return (
        <ContainerModal>
            <ModalContainer
                visible={isVisible}
                onRequestClose={closeModal}
                animationType='slide'
                // padding={padding}
                // borderRadius={borderRadius}
                // bgColor={bgColor}
            >
                <CenterContainer>
                    <TextModal>
                        {titleContent}
                    </TextModal>
                </CenterContainer>
            </ModalContainer>
        </ContainerModal>
    )
} 