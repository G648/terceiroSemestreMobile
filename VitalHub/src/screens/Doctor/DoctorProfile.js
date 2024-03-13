import React, { useState } from 'react'
import { Container, DataUser } from '../../components/Header/Header'
import { ProfileImageModal } from '../../components/Dialogs/SeeMedicalDialog'
import styled from 'styled-components/native'
import { APP_COLORS } from '../../utils/App_colors'
import { InputStyle, ScrollViewContainer, TextLabel } from './MedicalRecord'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from '@expo/vector-icons';
import { Pressable, Platform } from 'react-native'
import { Button } from '../../components/Button/Button'
import { UnderlinedLink } from '../../components/Links/Style'

export const DoctorContainerInfos = styled.View`
  width: 80%;
  height: 12%;
  position: absolute;
  top: 28%;
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

export const Calendar = styled(Entypo)`
  position: absolute;
  /* bottom: 2px; */
  top: 9%;
  left: 90%;
`

export const InfosContainer = styled.View`
  flex-direction: row;
  justify-content:space-between;
`

export const InfosColumn = styled.View`
  flex-direction:column;
  width: 45%;
`

export const ContainerInfoDoctor = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`
export const Crm = styled(DoctorEmail)`

`

export const Especialidade = styled(Crm)`

`

export default function DoctorProfile({
  especialidade,
  crm,
  isDoctor
}) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [isEditable, setIsEditable] = useState(false); // Estado de edição dos inputs

  const toggleEdit = () => {
    setIsEditable(prevState => !prevState); // Alterna entre editável e não editável
  };

  const handleSave = () => {
    setIsEditable(false); // Define todos os inputs como não editáveis ao salvar
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate)

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${day}/${month}/${year}`
  }

  const toggleDatePicker = () => {
    setOpen(!open);
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate)

      if (Platform.OS === "android") {
        toggleDatePicker()

        setDateOfBirth(formatDate(currentDate));
      }
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

          <ContainerInfoDoctor>
            <Crm>
              {crm}
            </Crm>

            <Especialidade>
              {especialidade}
            </Especialidade>
          </ContainerInfoDoctor>

          <DoctorEmail>
            cezarguilherme03@gmail.com
          </DoctorEmail>
        </DataUser>
      </DoctorContainerInfos>

      <ScrollViewContainer
        width={"90%"}
        showsVerticalScrollIndicator={false}
      >
        <TextLabel>
          Data de nascimento
        </TextLabel>

        {open && (

          <DateTimePicker
            mode='date'
            display='inline'
            value={date}
            onChange={onChange}
            editable={isEditable}
            isEditable={isEditable}
          />
        )}

        {!open && (

          <Pressable
            onPress={toggleDatePicker}>
            <InputStyle
              placeholder='03/08/02'
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              placeholderTextColor={APP_COLORS.primaryV1}
              boxHeigth={'60px'}
              boxWidth={"100%"}
              borderColor={APP_COLORS.primary}
              editable={isEditable}
              isEditable={isEditable}
            />
          </Pressable>
        )}

        <Calendar
          name="calendar"
          size={24}
          color={APP_COLORS.primaryV1}
        />

        <TextLabel>
          CPF
        </TextLabel>

        <InputStyle
          placeholder='859*********'
          placeholderTextColor={APP_COLORS.primaryV1}
          boxHeigth={'60px'}
          boxWidth={"100%"}
          borderColor={APP_COLORS.primary}
          editable={isEditable}
          isEditable={isEditable}
        />
        <TextLabel>
          Endereço
        </TextLabel>

        <InputStyle
          placeholder='Rua Vicenso Silva, 987'
          placeholderTextColor={APP_COLORS.primaryV1}
          boxHeigth={'60px'}
          boxWidth={"100%"}
          borderColor={APP_COLORS.primary}
          editable={isEditable}
          isEditable={isEditable}
        />


        <InfosContainer>
          <InfosColumn>
            <TextLabel>
              CEP
            </TextLabel>
            <InputStyle
              boxWidth={"100%"}
              boxHeigth={"60px"}
              editable={isEditable}
              isEditable={isEditable}
            />
          </InfosColumn>

          <InfosColumn>
            <TextLabel>
              Cidade
            </TextLabel>
            <InputStyle
              boxWidth={"100%"}
              boxHeigth={"60px"}
              editable={isEditable}
              isEditable={isEditable}
            />
          </InfosColumn>
        </InfosContainer>



        {!isEditable && ( // Renderiza o botão de editar apenas quando os inputs não estiverem editáveis
          <Button
            width={"100%"}
            activeOpacity={.6}
            backgroundColor={APP_COLORS.secondary}
            border={APP_COLORS.secondary}
            color={APP_COLORS.white}
            title={"Editar"}
            // marginTop={30}
            onPress={toggleEdit}
          />
        )}

        {isEditable && ( // Renderiza o botão de salvar apenas quando os inputs estiverem editáveis
          <Button
            width={"100%"}
            activeOpacity={.6}
            backgroundColor={APP_COLORS.secondary}
            border={APP_COLORS.secondary}
            color={APP_COLORS.white}
            title={"Salvar"}
            // marginTop={-10}
            onPress={handleSave}
          />
        )}

        <UnderlinedLink
          textIntput={"Cancelar"}
          ColorText={APP_COLORS.secondaryV1}
          buttonOpacity={.6}
          onClick={handleSave}

        />

      </ScrollViewContainer>

    </Container>
  )
}