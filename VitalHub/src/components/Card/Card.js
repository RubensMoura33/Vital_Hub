import { Image, Text } from "react-native";
import { ButtonCard, ButtonText, ClockCard, ContainerCard, ContentCard, DataProfile, ImagePoint, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from "./Style"
import { AntDesign } from '@expo/vector-icons';

export const Card = ({  nome, situacao, onPressCancel, onPressAppointment }) => {
    return (
        <ContainerCard>
            {/* Imagem do Card */}
            <ProfileImage source={require('../../assets/img/igor-caique-coronado-no-corinthians_2g.jpg')} />


            <ContentCard>
                <DataProfile>
                    <ProfileName>{nome}</ProfileName>
                    <ProfileData>
                        <TextAge>17 anos</TextAge>
                        <ImagePoint source={require('../../assets/icons/point.png')} />
                        <TextBold>Rotina</TextBold>
                    </ProfileData>
                </DataProfile>
                <ViewRow>
                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={18} color={situacao == "pendente" ? '#49B3BA' : '#4E4B59'} />
                        <TextBold>14:00</TextBold>
                    </ClockCard>


                    {/* valida e mostra o tipo de botao conforme a situacao */}

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }


                </ViewRow>
            </ContentCard>

        </ContainerCard>
    )
}