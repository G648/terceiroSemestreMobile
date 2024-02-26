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
import Dialogs from '../../components/Dialogs/Dialogs';
import { Text } from 'react-native';

const DoctorHome = () => {
    const [selectedButton, setSelectedButton] = useState(CardSituation.scheduled);
    const [filteredData, setFilteredData] = useState(MockData);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null)

    const handleCardPress = () => {
        setIsModalVisible(true);
    };

    useEffect(() => {
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

    }, [selectedButton]);


    useEffect(() => {
        // Definindo o conteúdo do modal com base na seleção do botão "Realizadas"
        if (selectedButton === "Realizadas") {
            setModalContent(
                // <Dialogs
                //     confirmButtonTitle={"Inserir prontuário"}
                // >

                // </Dialogs>
            );
        } else {
            setModalContent(
                <Text>
                    Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                </Text>
            ); // Limpa o conteúdo do modal se outro botão for selecionado
        }
    }, [selectedButton]);

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
                        imageUser={{ uri: 'https://github.com/gsolivier.png' }}
                        nameUser={item.nome}
                        ageUser={item.idade}
                        descriptionUser={item.situacao}
                        iconName={"clockcircle"}
                        bgColor={item.situation}
                        schedulingTime={'14:00'}
                        key={item.id}
                        situation={item.situation}
                        onPress={() => handleCardPress()}
                    />
                )}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            />

            {/* Renderiza o Dialogs quando isModalVisible for true */}
            {isModalVisible && (
                <Dialogs
                    isVisible={isModalVisible}
                    bgColor={APP_COLORS.grayV6}
                    titleContent={"Cancelar consulta"}
                    customContent={modalContent}
                    paragrafCancel={""}
                    fontSizeText={"22px"}
                    fontSizeTextParagraf={"15px"}
                    onPressConfirm={() => { setIsModalVisible(false) }}
                    onPressCancel={() => { setIsModalVisible(false) }}
                    showCancelButton={true}
                />
            )}
        </Container>
    );
};

export default DoctorHome;