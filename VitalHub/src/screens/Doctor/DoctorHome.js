import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { CalendarHome } from '../../components/Calendar/Calendar';
import { Container } from '../../components/Container/Style';
import { ContainerView } from '../../components/Buttons/Buttons';
import { Button } from '../../components/Button/Button';
import { APP_COLORS } from '../../utils/App_colors';
import teste, { FlalistInfos } from '../../components/FlatlistUsers/FlatlistUsers';
import { CardUser } from '../../components/FlatlistUsers/CardFlatlistUsers';
import Teste from '../../components/FlatlistUsers/FlatlistUsers';
import { MockData } from '../../utils/MockData';
import { FlatList } from 'react-native';

const DoctorHome = ({ }) => {

    const [selectedButton, setSelectedButton] = useState()

    function handleButtonCLick(buttonName) {
        setSelectedButton(buttonName)
    }

    return (
        <Container>
            <Header
                textValue={"Bem vindo!"}
                nameDoctor={"Guilherme Amorim"}
            />

            <CalendarHome />

            <ContainerView>
                <Button
                    width={"32%"}
                    activeOpacity={.8}
                    title={"Agendadas"}
                    border={APP_COLORS.secondaryV2}
                    color={selectedButton == "Agendadas" ? "white" : APP_COLORS.secondary}
                    backgroundColor={selectedButton === "Agendadas" ? APP_COLORS.secondary : "transparent"}
                    onPress={() => handleButtonCLick("Agendadas")}
                />
                <Button
                    width={"32%"}
                    activeOpacity={.8}
                    title={"Realizada"}
                    border={APP_COLORS.secondaryV2}
                    color={selectedButton == "Realizada" ? "white" : APP_COLORS.secondary}
                    backgroundColor={selectedButton === "Realizada" ? APP_COLORS.secondary : "transparent"}
                    onPress={() => handleButtonCLick("Realizada")}
                />
                <Button
                    width={"32%"}
                    activeOpacity={.8}
                    title={"Canceladas"}
                    border={APP_COLORS.secondaryV2}
                    color={selectedButton == "Canceladas" ? "white" : APP_COLORS.secondary}
                    backgroundColor={selectedButton === "Canceladas" ? APP_COLORS.secondary : "transparent"}
                    onPress={() => handleButtonCLick("Canceladas")}
                />
            </ContainerView>



            <FlalistInfos
                endFillColor={APP_COLORS.white}
                data={MockData}
                renderItem={({ item }) => (
                    <CardUser
                        textCardTitle={item.nome}
                        ageUser={item.idade}
                        descriptionUser={item.situacao}
                        key={item.id}
                    />
                )}
                keyExtractor={item => item.id}
                // showsHorizontalScrollIndicator={false}
            />
        </Container>

    );
};

export default DoctorHome;