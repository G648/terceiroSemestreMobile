import { Calendar, LocaleConfig } from 'react-native-calendars';
import React, { useEffect, useState } from 'react'
import { Container } from '../../components/Container/Style';
import { Title } from '../../components/Title/Style';
import { APP_COLORS } from '../../utils/App_colors';
import { FontAwesome } from '@expo/vector-icons';
import ScheduleAppointment, { SelectedList, ViewSelectedList } from '../../components/Dialogs/ScheduleAppointment';
import { ScheduledButton } from './PatientHome';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ChooseDate({ navigation }) {

    const [selected, setSelected] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [isModalScheduleVisible, setIsModalScheduleVisible] = useState(true);
    const [isModalCancel, setIsModalCancel] = useState(false);
    const [selectedInput, setSelectedInput] = useState("")

    useEffect(() => {

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year

        setCurrentDate(
            date + '/' + month + '/' + year
        )

        // LocaleConfig.locales['pt-BR'] = {
        //     //meses
        //     monthNames:
        //         "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
        //             "_"
        //         ),
        //     //abreviação de meses
        //     monthNamesShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        // };

        // LocaleConfig.defaultLocale = 'pt-BR';

    }, []);

    const data = [
        { key: '1', value: 'CheckUp' },
        { key: '2', value: 'routine' }
    ]

    return (
        <Container>
            <Title
                marginTop={60}
            >
                Selecionar Data
            </Title>

            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}

                current={currentDate}

                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}

                style={{
                    backgroundColor: APP_COLORS.white,
                    width: 300,
                }}
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

            {/* <ScheduledButton
                activeOpacity={.8}
                onPress={() => setIsModalScheduleVisible(true)}
            >
                <FontAwesome5
                    name="stethoscope"
                    size={32}
                    color={APP_COLORS.white}
                />
            </ScheduledButton> */}

            <ViewSelectedList>

                <SelectedList
                    data={data}
                    placeholder={'teste'}
                    setSelected={setSelectedInput}
                    save={"save"}
                    onSelect={selectedInput}
                    boxStyles={{
                        borderColor: APP_COLORS.primary,
                        borderWidth: 2,
                        height: 60,
                        alignItems: 'center'
                    }}

                    dropdownStyles={{
                        backgroundColor: "white",
                        position: "absolute",
                        top: 40,
                        width: "100%",
                        height: '80px',
                        zIndex: 1,
                        borderColor: APP_COLORS.primary,
                        borderWidth: "2px",
                        borderRadius: 5,
                        borderWidth: 2,
                        borderTopWidth: 0,
                        borderTopRightRadius: 0,
                        borderTopLeftRadius: 0,
                    }}
                    fontFamily='MontserratAlternates_600SemiBold'
                    dropdownTextStyles={{
                        color: APP_COLORS.primaryV1
                    }}
                    inputStyles={{
                        color: APP_COLORS.primaryV1
                    }}
                    arrowicon={<FontAwesome name="caret-down" size={24} color={APP_COLORS.primaryV1} />}
                />

            </ViewSelectedList>
        </Container>
    )
}