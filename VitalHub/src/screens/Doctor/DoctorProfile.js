import React, { useState } from 'react'
import { Container, DataUser } from '../../components/Header/Header'
import { ProfileImageModal } from '../../components/Dialogs/SeeMedicalDialog'
import styled from 'styled-components/native'
import { APP_COLORS } from '../../utils/App_colors'
import { ContainerViewUserInfo, InputStyle, TextLabel } from './MedicalRecord'
import DateTimePicker from '@react-native-community/datetimepicker';

export const DoctorContainerInfos = styled.View`
  width: 80%;
  height: 12%;
  position: relative;
  bottom: 70px;
  background-color: ${APP_COLORS.white};
  border-radius: 8px;
  elevation: 10px;
`

export const DoctorName = styled.Text`
  font-size: 20px;
  color: black;
  font-family: "MontserratAlternates_600SemiBold";
  text-align:center;
  margin-top: 10px;
`

export const DoctorEmail = styled(DoctorName)`
  font-size: 16px;
  margin-top: 20px;
`

export default function DoctorProfile() {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const toggleDatePicker = () => {
    setOpen(!open);
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate)
    } else {
      toggleDatePicker()
    }
  }

  return (
    <Container>
      <ProfileImageModal
        source={{ uri: "https://github.com/G648.png" }}
        widthImageUser={"100%"}
        heightImageUser={300}
        resizeMode='cover'
      />

      <DoctorContainerInfos>
        <DataUser>
          <DoctorName>
            Guilherme Amorim
          </DoctorName>

          <DoctorEmail>
            cezarguilherme03@gmail.com
          </DoctorEmail>
        </DataUser>
      </DoctorContainerInfos>

      <ContainerViewUserInfo>
        <TextLabel>
          Data de nascimento
        </TextLabel>

        {/* <Button title={"selecionar data"} onPress={() => setOpen(true)} /> */}

        {/* <DatePicker date={date} onDateChange={setDate} /> */}

        {open && (

          <DateTimePicker
            mode='date'
            display='spinner'
            value={date}
            onChange={onChange}
          />
        )}

        <InputStyle
          placeholder='03/08/02'
          onChangeText={setOpen}
          placeholderTextColor={APP_COLORS.primaryV1}
          boxHeigth={'60px'}
          boxWidth={"90%"}
          borderColor={APP_COLORS.primary}
        />

      </ContainerViewUserInfo>

    </Container>
  )
}