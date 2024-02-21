import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { CalendarHome } from '../../components/Calendar/Calendar';
import { Container } from '../../components/Container/Style';
import { ContainerView } from '../../components/Buttons/Buttons';
import { Button } from '../../components/Button/Button';
import { APP_COLORS } from '../../utils/App_colors';
import { ContainerFlatList, FlatlistInfos } from '../../components/FlatlistUsers/FlatlistUsers';
import { CardUser } from '../../components/FlatlistUsers/CardFlatlistUsers';
// import Teste from '../../components/FlatlistUsers/FlatlistUsers';
import { MockData } from '../../utils/MockData';
import { FlatList, ScrollView } from 'react-native';


const DoctorHome = ({ }) => {

    const [selectedButton, setSelectedButton] = useState()

    function handleButtonCLick(buttonName) {
        setSelectedButton(buttonName)
    }

    console.log('====================================');
    console.log(MockData.length);
    console.log('====================================');

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

            <FlatlistInfos
                data={MockData}
                renderItem={({ item }) => (
                    <CardUser
                        imageUser={{uri: 'https://github.com/gsolivier.png'}}
                        nameUser={item.nome}
                        ageUser={item.idade}
                        descriptionUser={item.situacao}
                        iconName={"clockcircle"}
                        iconColor={"#49B3BA"}
                        schedulingTime={'14:00'}
                        key={item.id}
                    />
                )}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            />
        </Container>

    );
};

export default DoctorHome;