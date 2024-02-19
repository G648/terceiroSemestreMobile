import React from 'react';
import { Header } from '../../components/Header/Header';
import { CalendarHome } from '../../components/Calendar/Calendar';
import { Container } from '../../components/Container/Style';

const DoctorHome = ({ }) => {
    return (
        <Container>
            <Header
                textValue={"Bem vindo!"}
                nameDoctor={"Guilherme Amorim"}
            />

            <CalendarHome />

        </Container>
    );
};

export default DoctorHome;