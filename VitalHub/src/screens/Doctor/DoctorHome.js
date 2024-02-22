import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { CalendarHome } from '../../components/Calendar/Calendar';
import { Container } from '../../components/Container/Style';
import { ContainerView } from '../../components/Buttons/Buttons';
import { Button } from '../../components/Button/Button';
import { APP_COLORS } from '../../utils/App_colors';
import { FlatlistInfos } from '../../components/FlatlistUsers/FlatlistUsers';
import { CardUser } from '../../components/FlatlistUsers/CardFlatlistUsers';
// import Teste from '../../components/FlatlistUsers/FlatlistUsers';
import { MockData } from '../../utils/MockData';
import { CardSituation } from '../../utils/AppSituationCard';


const DoctorHome = () => {

    const [selectedButton, setSelectedButton] = useState()
    const [filteredData, setFilteredData] = useState(MockData);

    useEffect(() => {
        if (selectedButton) {
            let newData = [];

            switch (selectedButton) {
                case "Agendadas":
                    newData = MockData.filter(item => item.situation === CardSituation.scheduled);
                    break;
                case "Realizadas":
                    newData = MockData.filter(item => item.situation === CardSituation.carriedOut);
                    break;
                case "Canceladas":
                    newData = MockData.filter(item => item.situation === CardSituation.canceled);
                    break;
                default:
                    newData = MockData;
                    break;
            }

            setFilteredData(newData);
        }
    }, [selectedButton]);

    console.log(selectedButton);

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
                    onPress={() => setSelectedButton("Agendadas")}
                />
                <Button
                    width={"32%"}
                    activeOpacity={.8}
                    title={"Realizadas"}
                    border={APP_COLORS.secondaryV2}
                    color={selectedButton == "Realizadas" ? "white" : APP_COLORS.secondary}
                    backgroundColor={selectedButton === "Realizadas" ? APP_COLORS.secondary : "transparent"}
                    onPress={() => setSelectedButton("Realizadas")}
                />
                <Button
                    width={"32%"}
                    activeOpacity={.8}
                    title={"Canceladas"}
                    border={APP_COLORS.secondaryV2}
                    color={selectedButton == "Canceladas" ? "white" : APP_COLORS.secondary}
                    backgroundColor={selectedButton === "Canceladas" ? APP_COLORS.secondary : "transparent"}
                    onPress={() => setSelectedButton("Canceladas")}
                />
            </ContainerView>

            <FlatlistInfos
                data={filteredData}
                renderItem={({ item }) => (
                    <CardUser
                        imageUser={{uri: 'https://github.com/gsolivier.png'}}
                        nameUser={item.nome}
                        ageUser={item.idade}
                        descriptionUser={item.situacao}
                        iconName={"clockcircle"}
                        bgColor={item.situation}
                        schedulingTime={'14:00'}
                        key={item.id}
                        situation={item.situation}
                    />
                )}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            />
        </Container>

    );
};

export default DoctorHome;