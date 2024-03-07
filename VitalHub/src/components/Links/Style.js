import styled from "styled-components/native";

export const LinkMedium = styled.Text`
font-size: 14px;
font-family: 'MontserratAlternates_500Medium' ;
color: #8c8a97;
margin-top: 26px;
align-self: center ;
margin-left: 20px;
margin-bottom: 15px;
color: ${props => props.ColorText};
text-align:center;
`

export const ButtonLink = styled.TouchableOpacity`
    align-self: ${props => props.AlignSelf};
    margin-right: 18px;
`

export function UnderlinedLink({
    textIntput,
    ColorText,
    buttonOpacity,
    onClick,
    buttonAlign
}) {
    return (
        <ButtonLink
            activeOpacity={buttonOpacity}
            onPress={onClick}
            AlignSelf={buttonAlign}
        >
            <LinkMedium
                ColorText={ColorText}
            >
                {textIntput}
            </LinkMedium>
        </ButtonLink>
    );
}