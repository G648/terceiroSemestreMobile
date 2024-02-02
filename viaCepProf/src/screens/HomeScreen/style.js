import styled from "styled-components";

//scrolview - scrollview
//containerForm - View
//boxinput - View
//label - Text
//input - TextInput

export const ScrollViewApp =styled.ScrollView`
    /* background-color: black; */
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 8px;
`

export const ContainerForm = styled(ScrollViewApp)`
    width: 90%;
    flex: 4;
    margin: 20px auto;
`

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`