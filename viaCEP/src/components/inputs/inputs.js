import styled from "styled-components";

export const InputStyle = styled.TextInput`
    width: ${(props) => 
        props.variant === 'uf' ? '30%': '100%' && props.variant === 'estado' ? '70%' : '100%'
    };
    height: 30;
    border-bottom-width: 1;
    border-color: black;
    padding-top: 10;
`