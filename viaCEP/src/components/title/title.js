import styled from 'styled-components';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular
});

export const TitleStyle = styled.Text`
    color: #047CD3;
    justify-items: flex-start;
    align-self: flex-start;
    font-weight: bold;
    font-size: 15px; // Corrigido o valor do font-size
    font-family: 'Roboto_400Regular';
`;
