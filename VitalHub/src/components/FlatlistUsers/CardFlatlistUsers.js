import styled from "styled-components/native";

export const CardsUser = styled.View`
    height: 65%;
    width: 100%;
    border-radius: 8px;
    border-width:2px;
`
export const CardTitle = styled.Text`
    /* color: ${({colorTitle}) => colorTitle}; */
`

export function CardUser({
    imageUser,
    nameUser,
    ageUser,
    descriptionUser,
    examScheduling,
    medicalRecords,
    textCardTitle
}) {
    return (
        <CardsUser>
            <CardTitle>
                {textCardTitle}
                {nameUser}
                {ageUser}
                {descriptionUser}
            </CardTitle>
        </CardsUser>
    )
}
