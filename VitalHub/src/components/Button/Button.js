import styled from "styled-components/native/";
import { AntDesign } from '@expo/vector-icons';

export const ButtonStyle = styled.TouchableOpacity`
    background-color: ${props => props.backgroundColor} ;
    border-color: ${props => props.border};
    border-width: 1px;
    width:90%;
    height: 44px;
    border-radius: 5px;

    margin-top: ${props => `${props.marginTop}px`};
    padding: 12px 8px 12px 8px;
    align-items: center;
`
export const TitleStyle = styled.Text`
    font-family: "MontserratAlternates_700Bold";
    height: 20px;
    color: ${props => props.colorText};
`

export const ButtonFlex = styled.View`
    flex-direction: row;
    gap: 10px;
`

export function Button({
    titleButton,
    backgroudButton,
    color,
    fieldButton,
    marginTopButton,
    onClick
}) {
  return (

        <ButtonStyle
            backgroundColor={backgroudButton}
            border={fieldButton}
            marginTop={marginTopButton}
            onPress={onClick}
        >
           
            <TitleStyle
                colorText={color}
            >
                {titleButton}
            </TitleStyle>
        </ButtonStyle>
   
  )
}