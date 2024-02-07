import styled from "styled-components/native";

export const Paragrafo = styled.Text`
    font-size: ${props => `${props.FontSize}px`};
    /* font-family: 'MontserratAlternates_700Bold'; */
    color: ${props => props.FontColor} ;
`


export function ParagrafText( {
    FontSizeParagrafo,
    FontColorParagrafo,
    textValue
}) {
    return(
        <Paragrafo
            FontColor={FontColorParagrafo}
            FontSize= {FontSizeParagrafo}
        >
         
        </Paragrafo>
    )
}