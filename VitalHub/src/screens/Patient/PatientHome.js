import React, { useEffect, useState } from 'react'
import { MockData } from '../../utils/MockData';
import { CardSituation } from '../../utils/AppSituationCard';
import { Container } from '../../components/Container/Style';
import { Header } from '../../components/Header/Header';
import { CalendarHome } from '../../components/Calendar/Calendar';
import { ContainerView } from '../../components/Buttons/Buttons';
import { Button } from '../../components/Button/Button';
import { APP_COLORS } from '../../utils/App_colors';
import { FlatlistInfos } from '../../components/FlatlistUsers/FlatlistUsers';
import { CardUser } from '../../components/FlatlistUsers/CardFlatlistUsers';
import { DoctorData } from '../../utils/MockDataDoctor';
import CancelDialogs from '../../components/Dialogs/CalcelDialogs';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';
import ScheduleAppointment from '../../components/Dialogs/ScheduleAppointment';


export const ScheduledButton = styled.TouchableOpacity`
    background-color: ${APP_COLORS.primary};
    width: 60px;
    height: 60px;
    color: ${APP_COLORS.white};
    border-radius: 8px;
    elevation: 9px;
    position: absolute;
    bottom: 2%; /* Ajuste conforme necessário */
    left: 80%;
    align-items: center;
    justify-content: center;
`

const PatientHome = ({ navigation }) => {

    const data = [
        { key: '1', value: 'CheckUp' },
        { key: '2', value: 'routine' }
    ]

    const [selectedButton, setSelectedButton] = useState(CardSituation.scheduled);
    const [filteredData, setFilteredData] = useState(DoctorData);
    const [isModalCancel, setIsModalCancel] = useState(false);
    const [isModalMedical, setisModalMedical] = useState(false)
    const [isModalScheduleVisible, setIsModalScheduleVisible] = useState(false);
    const [selectedUserData, setSelectedUserData] = useState({})
    const [selectedInput, setSelectedInput] = useState("")

    const handleCardPress = (selectedSituation, userData) => {
        selectedSituation == "Agendadas" ? setIsModalCancel(true) : setisModalMedical(true)
        setSelectedUserData(userData)
    };

    useEffect(() => {
        let newData = [];

        switch (selectedButton) {
            case "Agendadas":
                newData = DoctorData.filter(item => item.situation === CardSituation.scheduled);
                break;
            case "Realizadas":
                newData = DoctorData.filter(item => item.situation === CardSituation.carriedOut);
                break;
            case "Canceladas":
                newData = DoctorData.filter(item => item.situation === CardSituation.canceled);
                break;
            default:
                newData = DoctorData;
                break;
        }

        setFilteredData(newData);

    }, [selectedButton]);

    return (
        <Container>
            <Header
                textValue={"Bem vindo!"}
                nameDoctor={"Gustavo Henrique"}
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
                        imageUser={{ uri: item.imagem }}
                        nameUser={item.nome}
                        ageUser={`${item.idade} anos`}
                        descriptionUser={item.especialidade}
                        iconName={"clockcircle"}
                        bgColor={item.situation}
                        schedulingTime={'14:00'}
                        key={item.id}
                        situation={item.situation}
                        onPress={() => handleCardPress(selectedButton, item)}
                    />
                )}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            />

            {/* Renderiza o Dialogs quando isModalVisible for true */}
            {isModalCancel && (
                <CancelDialogs
                    isVisible={isModalCancel}
                    bgColor={APP_COLORS.grayV6}
                    titleContent={"Cancelar consulta"}
                    customContent={"Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?"}
                    fontSizeText={"22px"}
                    fontSizeTextParagraf={"15px"}
                    onPressConfirm={() => { setIsModalCancel(false) }}
                    onPressCancel={() => { setIsModalCancel(false) }}
                    showCancelButton={true}
                />
            )}

            <ScheduledButton
                activeOpacity={.8}
                onPress={() => setIsModalScheduleVisible(true)}
            >
                <FontAwesome5
                    name="stethoscope"
                    size={32}
                    color={APP_COLORS.white}
                />
            </ScheduledButton>
            {isModalScheduleVisible &&
                <ScheduleAppointment
                    widthModal={"100%"}
                    heightModal={600}
                    titleContent={"Agendar consulta"}
                    justifyContentModal={'flex-end'}
                    fontSizeText={25}
                    placeholder={"tipo de consulta"}
                    mockdata={data}
                    save={"value"}
                    setSelectedType={setSelectedInput}
                    onSelected={selectedInput}
                    cancelDialog={() => setIsModalScheduleVisible(false)}
                    onClick={() => {
                        navigation.navigate('ChooseClinic')
                        setIsModalScheduleVisible(false)
                        
                    }}
                />
            }

        </Container>
    )
}

export default PatientHome;