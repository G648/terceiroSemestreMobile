import React from 'react'
import { CenterContainer, ContainerTextBox, ModalContainer, TextModal } from './CalcelDialogs'
import { TextLabel } from '../../screens/Doctor/MedicalRecord'
import styled from 'styled-components'
import { SelectList } from 'react-native-dropdown-select-list'


export const ViewSelectedList = styled.View`
    width: 100%;
`

export const SelectedList = styled(SelectList)`

`

export default function ScheduleAppointment({
    isVisible,
    closeModal,
    titleContent,
    alignItemsContainer,
    paddingTitle,
    fontSizeText,
    heightModal,
    widthModal,
    justifyContentModal,
    mockdata,
    placeholder,
    setSelectedType,
    save,
    onSelected
}) {
    return (
        <ModalContainer
            visible={isVisible}
            onRequestClose={closeModal}
            animationType='slide'
            transparent={true}
        >

            <CenterContainer
                padding={paddingTitle}
                alignItemsContainer={alignItemsContainer}
                justifyContent={justifyContentModal}
            >

                <ContainerTextBox
                    heightModal={heightModal}
                    widthModal={widthModal}
                >
                    <TextModal
                        fontSizeText={fontSizeText}
                    >
                        {titleContent}
                    </TextModal>

                    <TextLabel>
                        Informe o tipo de consulta
                    </TextLabel>
                    <ViewSelectedList>

                        <SelectedList
                            data={mockdata}
                            placeholder={placeholder}
                            setSelected={setSelectedType}
                            save={save}
                            onSelect={onSelected}
                        />
                    </ViewSelectedList>
                    <TextLabel>
                        Qual o novel da consulta
                    </TextLabel>

                    <TextLabel>
                        Informe a localização desejada
                    </TextLabel>

                </ContainerTextBox>

            </CenterContainer>

        </ModalContainer>
    )
}