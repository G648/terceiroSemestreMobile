import styled from "styled-components";

//componente que contém a label + input
export const FieldContent = styled.View`
    //define o valor da largura como a props definida lá no index
    width: ${(fieldWidth) => `${fieldWidth}%`};
`