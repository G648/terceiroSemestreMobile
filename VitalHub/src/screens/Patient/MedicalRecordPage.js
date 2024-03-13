import React from 'react'
import { Container } from '../../components/Container/Style'
import { useRoute } from '@react-navigation/native';
import { ContainerInfoUser, Infouser, ProfileImageModal } from '../../components/Dialogs/SeeMedicalDialog';
import { ContainerTextBox } from '../../components/Dialogs/CalcelDialogs';
import { ProfileName } from '../../components/FlatlistUsers/CardFlatlistUsers';
import { ContainerInfoDoctor, Crm, DoctorContainerInfos, DoctorEmail, DoctorName, Especialidade } from '../Doctor/DoctorProfile';
import { DataUser } from '../../components/Header/Header';

export default function MedicalRecordPage() {

    const route = useRoute();

    const userData = route.params.userData;

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
        </Container>
    )
}