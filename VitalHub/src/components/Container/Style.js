import styled from "styled-components"
import { useTheme } from "../../theme/themeContext";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${({theme}) => theme.colors.white};
`

export function ContainerView({
}) {

    const { theme } = useTheme();

    return(
        <Container>
            {theme.colors.primary}
        </Container>
    )
}