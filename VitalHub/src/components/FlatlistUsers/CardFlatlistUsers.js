import styled from "styled-components/native";
import { Title } from "../Title/Style";
import { AntDesign } from '@expo/vector-icons';

export const CardsUser = styled.View`
    flex: 1;
    width: 98%;
    border-radius: 8px;
    flex-direction: row;
    align-self:center;
    padding: 2%;
    margin-bottom:5%;
    background-color: #FFF;
    elevation: 5;
`

export const ProfileImage = styled.Image`
    width: 88px ;
    height: 99px ;
    border-radius: 5px ;
    margin-right: 15px;

`

export const ProfileName = styled.Text`   
    color: #33303e;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 20px ;
`

export const ProfileData = styled.View`
    flex-direction: row ;
    gap: 15px ;
    margin-bottom: -10px;
`
export const TextAge = styled.Text`
    font-size: 16px ;
    color: #8C8A97;
    font-family: "Quicksand_400Regular";
`
export const TextBold = styled(TextAge)`
    font-family: "Quicksand_600SemiBold";
`
export const ViewRow = styled.View`
    width: 100%;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
    margin-top: 11px ;
`

export const ClockCard = styled.View`
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    padding: 4px 23px;
    gap: 6px ;
    border-radius: 5px ;
    background-color: ${(props) => props.situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"} ;
`
export const ButtonCard = styled.TouchableOpacity`

`
export const ButtonText = styled.Text`
    color: ${(props) => props.situacao == "pendente" ? "#c81d25" : "#344f8f"} ;
`

export const CardTitle = styled.Text`
    color: ${({ colorTitle }) => colorTitle};
`

export const ContainerFlex = styled.View`
    flex-direction: column;
    gap: 8px;
`

export function CardUser({
    imageUser,
    nameUser,
    ageUser,
    descriptionUser,
    examScheduling,
    medicalRecords,
    textCardTitle,
    schedulingTime,
    iconName,
    iconColor,
    iconSize
}) {
    return (
        <CardsUser>

            <ProfileImage
                source={imageUser}
            />

            <ContainerFlex>

                <ProfileName>
                    {nameUser}
                </ProfileName>

                <ProfileData>
                    <TextAge>{ageUser}</TextAge>
                    <TextBold>{descriptionUser}</TextBold>
                </ProfileData>

                <ViewRow>
                    <ClockCard>
                        <AntDesign
                            name={iconName}
                            size={iconSize}
                            color={iconColor}
                        />

                        <TextBold>
                            {schedulingTime}
                        </TextBold>
                    </ClockCard>
                </ViewRow>
            </ContainerFlex>

            <ButtonCard/>

            {/* <CardTitle>
                {textCardTitle}
            </CardTitle> */}
        </CardsUser>
    )
}
