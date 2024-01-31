import { BoxInput, ContainerForm, Input, Label, ScrollViewApp } from "./style";

export function HomeScreen() {

    //Hooks - states
    //hooks - efect
    //chamada da API
    return (
        <ScrollViewApp>
            <ContainerForm>
                <BoxInput>
                    <Label>
                        Informe o CEP
                    </Label>
                    <Input placeholder="teste" keyboardType='numeric'>

                    </Input>
                </BoxInput>
                <BoxInput>
                    <Label>
                        Logradouro
                    </Label>
                    <Input placeholder="teste">

                    </Input>
                </BoxInput>
                <BoxInput>
                    <Label>
                        Bairro
                    </Label>
                    <Input placeholder="teste">

                    </Input>
                </BoxInput>
                <BoxInput>
                    <Label>
                        Informe o CEP
                    </Label>
                    <Input placeholder="teste">

                    </Input>
                </BoxInput>
                <BoxInput>
                    <Label>
                        Cidade
                    </Label>
                    <Input placeholder="teste">

                    </Input>
                </BoxInput>
                <BoxInput>
                    <Label>
                        Estado
                    </Label>
                    <Input placeholder="teste">

                    </Input>
                </BoxInput>
                <BoxInput>
                    <Label>
                        UF
                    </Label>
                    <Input placeholder="teste">

                    </Input>
                </BoxInput>
            </ContainerForm>
        </ScrollViewApp>
    )
}