import styled from "styled-components/native";

export const ContainerView = styled.View`
    flex-direction: row;
    justify-content:space-between;
    width: ${({widthContainer = "90%"}) => widthContainer};
    height: 70px;
    margin-bottom: ${({marginBottom}) => marginBottom}
`
