import React, { useState } from 'react'
import { Container } from '../../components/Container/Style'
import { useRoute } from '@react-navigation/native';
import { ProfileImageModal } from '../../components/Dialogs/SeeMedicalDialog';
import { ContainerInfoDoctor, Crm, DoctorContainerInfos, DoctorEmail, DoctorName, Especialidade } from '../Doctor/DoctorProfile';
import { DataUser } from '../../components/Header/Header';
import { InputStyle, ScrollViewContainer, TextLabel } from '../Doctor/MedicalRecord';
import { APP_COLORS } from '../../utils/App_colors';
import { Button } from '../../components/Button/Button';

export default function MedicalRecordPage({navigation}) {

    const [isEditable, setIsEditable] = useState(false);
    const route = useRoute();

    const userData = route.params.userData;

    const toggleEdit = () => {
        setIsEditable(prevState => !prevState); // Alterna entre editável e não editável
      };
    
      const handleSave = () => {
        setIsEditable(false); // Define todos os inputs como não editáveis ao salvar
      };

    return (
        <Container>
            <ProfileImageModal
                source={userData.imagem}
                widthImageUser={"100%"}
                heightImageUser={280}
                resizeMode='cover'
            />

            <DoctorContainerInfos>
                <DataUser>
                    <DoctorName>
                        {`${userData.nome}`}
                    </DoctorName>

                    <ContainerInfoDoctor>
                        <Crm>
                            {userData.crm}
                        </Crm>

                        <Especialidade>
                            {userData.especialidade}
                        </Especialidade>
                    </ContainerInfoDoctor>
                </DataUser>
            </DoctorContainerInfos>
            <ScrollViewContainer>
                <TextLabel>
                    Descrição da consulta
                </TextLabel>
                <InputStyle
                    placeholder='Descrição da consulta'
                    placeholderTextColor={APP_COLORS.primaryV1}
                    boxHeigth={'150px'}
                    boxWidth={"100%"}
                    borderColor={APP_COLORS.primary}
                    editable={isEditable}
                    isEditable={isEditable}
                />

                <TextLabel>
                    Diagnóstico do paciente
                </TextLabel>
                <InputStyle
                    placeholder='Infecção no ouvido'
                    placeholderTextColor={APP_COLORS.primaryV1}
                    boxHeigth={'80px'}
                    boxWidth={"100%"}
                    borderColor={APP_COLORS.primary}
                    editable={isEditable}
                    isEditable={isEditable}
                />

                <TextLabel>
                    Prescrição médica
                </TextLabel>
                <InputStyle
                    placeholder='Medicamento: Advil
                    Dosagem: 50 mg
                    Frequência: 3 vezes ao dia
                    Duração: 3 dias'
                    placeholderTextColor={APP_COLORS.primaryV1}
                    boxHeigth={'150px'}
                    boxWidth={"100%"}
                    borderColor={APP_COLORS.primary}
                    editable={isEditable}
                    isEditable={isEditable}
                />

                <TextLabel>
                    Exames médicos
                </TextLabel>

                <Button
                    onPress={() => navigation.navigate("MedicalExamsPhotos")}
                />
            </ScrollViewContainer>
        </Container>
    )
}