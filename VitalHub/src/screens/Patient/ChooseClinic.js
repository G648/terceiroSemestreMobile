import React from 'react'
import styled from 'styled-components/native'
import { Container } from '../../components/Container/Style'
import { Title } from '../../components/Title/Style'
import { FlatlistInfos } from '../../components/FlatlistUsers/FlatlistUsers'
import { ClinicData } from '../../utils/MockDataClinics'
import { CardUser } from '../../components/FlatlistUsers/CardFlatlistUsers'

export const ContainerScrollView = styled.ScrollView`
    width: 90%;
    border: 2px;
    display:flex;
`

export default function ChooseClinic() {
    return (
        <Container>
            <ContainerScrollView>
                <Title>
                    Selecionar clínica
                </Title>

                <FlatlistInfos
                    width={'100%'}
                    data={ClinicData}
                    renderItem={({ item }) => {
                        return (

                            <CardUser
                                nameUser={item.nome}
                                descriptionUser={item.localidade}
                            />

                        )
                    }}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                />
            </ContainerScrollView>

        </Container>
    )
}