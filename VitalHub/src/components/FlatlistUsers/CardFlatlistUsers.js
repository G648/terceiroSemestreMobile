import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { CardSituation } from "../../utils/AppSituationCard";
import { APP_COLORS } from "../../utils/App_colors";

const defaultBgColor = APP_COLORS.grayV6;
const defaultIconColor = APP_COLORS.grayV1;
const defaultTextColor = APP_COLORS.grayV2;

const scheduledBgColor = APP_COLORS.primaryV4;
const scheduledIconColor = APP_COLORS.primary;
const scheduledTextColor = APP_COLORS.primary


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
    color: ${defaultTextColor};
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
    background-color: ${(props) => props.situation == CardSituation.scheduled ? scheduledBgColor : defaultBgColor} ;
`

export const ClockIcon = styled(AntDesign)`
    color: ${(props) =>
        props.situation === CardSituation.scheduled ? scheduledIconColor : defaultIconColor
    };
`;

export const ClockTime = styled.Text`
    color: ${(props) =>
        props.situation === CardSituation.scheduled ? scheduledTextColor : defaultTextColor
    };
    font-family: "Quicksand_600SemiBold";
    font-size: 16px;
`;

export const ButtonCard = styled.TouchableOpacity`
    
`

export const ButtonText = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    color: ${(props) => 
        props.situation === CardSituation.scheduled ? APP_COLORS.red : APP_COLORS.secondaryV1
    };
    margin-right: 10px;
`

// export const CardTitle = styled.Text`
//     color: ${({ colorTitle }) => colorTitle};
// `

export const ContainerFlex = styled.View`
    flex: 1;
    flex-direction: column;
    gap: 8px;
`

export function CardUser({
    imageUser,
    nameUser,
    ageUser,
    descriptionUser,
    schedulingTime,
    iconName,
    iconColor,
    iconSize,
    bgColor,
    situation
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
                    <ClockCard situation={bgColor}>
                        <ClockIcon
                            name={iconName}
                            size={iconSize}
                            color={iconColor}
                            situation={bgColor}
                        />
                        <ClockTime situation={bgColor}>
                            {schedulingTime}
                        </ClockTime>
                    </ClockCard>

                    <ButtonCard
                        activeOpacity={.6}
                    >
                        {situation == CardSituation.scheduled ? (
                            <ButtonText
                                situation={situation}
                            >
                                {"Cancelar"}
                            </ButtonText>
                        ) : situation == CardSituation.carriedOut ? (
                                <ButtonText>
                                    {"Ver Prontuário"}
                                </ButtonText>
                            ) : (
                                    <>
                                    </>
                            )}

                    </ButtonCard>
                </ViewRow>
            </ContainerFlex>

            <ButtonCard />
        </CardsUser>
    )
}
