import { ContainerForm, ScrollViewApp } from "./style";
import { BoxInput } from "../../components/BoxInput";

export function HomeScreen() {

    //Hooks - states
    //hooks - efect
    //chamada da API

    return (
        <ScrollViewApp>
            <ContainerForm>
                <BoxInput
                    textLabel="teste"
                    placeholder="Cep..."
                    KeyType="numeric"
                    maxLength={9}
                    fieldWidth={100}
                />
            </ContainerForm>
        </ScrollViewApp>
    )
}