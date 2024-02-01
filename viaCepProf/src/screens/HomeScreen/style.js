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
    
`

// export const BoxInput = styled.View`
//     height: 100;
//     justify-content: space-between;
// `

// export const Label = styled.Text`
//     font-size: 18px;
//     color: #047CD3;
// `

// export const Input = styled.TextInput`
//     border-width: 2;
//     border-radius: 10px;
//     height: 60px;
//     background-color: #F6F6F6;
//     border-color: #A1A1A1;
//     padding: 10px;
// `