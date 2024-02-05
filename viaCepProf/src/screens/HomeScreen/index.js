import { ContainerForm, ScrollViewApp, RowContainer } from "./style";
import { BoxInput } from "../../components/BoxInput";
import { api } from "../../utils/axios";
import { useEffect, useState } from "react";

export function HomeScreen() {

    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUf] = useState('')

    //hooks - efect
    useEffect(() => {

        if (cep != "" && cep.length === 8) {
            getViaCep();

        } else {
            console.log('====================================');
            console.log("deu ruim na verificação do cep");
            console.log('====================================');
        }

    }, [cep]);

    //chamada da API
    async function getViaCep() {
        try {
            const retornoDados = await api.get(`${cep}/json/`)

            console.log('====================================');
            console.log(retornoDados.data);
            console.log('====================================');

            setLogradouro(retornoDados.data.logradouro)
            setBairro(retornoDados.data.bairro)
            setCidade(retornoDados.data.localidade)
            setEstado(retornoDados.data.localidade)
            setUf(retornoDados.data.uf)

        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }

    }

    return (
        <ScrollViewApp>
            <ContainerForm>
                <BoxInput
                    textLabel="Informar CEP"
                    placeholder="Cep..."
                    KeyType='numeric'
                    maxLength={9}
                    fieldWidth={100}
                    onBlur={getViaCep}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={tx => setCep(tx)}
                />
                <BoxInput
                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    editable={false}
                    fieldValue={logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    editable={false}
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    editable={false}
                    fieldValue={cidade}
                />
                <RowContainer>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        editable={false}
                        fieldWidth={70}
                        fieldValue={estado}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF..."
                        editable={false}
                        fieldWidth={23}
                        fieldValue={uf}
                    />
                </RowContainer>
            </ContainerForm>
        </ScrollViewApp>
    )
}