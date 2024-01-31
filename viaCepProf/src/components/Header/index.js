import { HeaderContainer, HeaderContent, TextHeader } from "./style";

export function Header() {
    return(
        //headerContainer - view
        //headerContent - safeAreaView
        //TextHeader - Text

        <HeaderContainer>
            <HeaderContent>
                <TextHeader>
                    Consumo da API ViaCEP
                </TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
}