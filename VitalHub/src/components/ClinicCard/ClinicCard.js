import { ContainerCard, ContentCard, DataProfile, ProfileName, TextBold } from "../Card/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { AssessmentText, StarView } from "./Style";

export const ClinicCard = ({nome, local, avaliacao}) => {
    return (
        
        <ContainerCard>
            <ContentCard>
                <DataProfile>
                    <ProfileName>{nome}</ProfileName>
                    <TextBold>{local}</TextBold>
                </DataProfile>
                <StarView>
                <AntDesign name="star" size={24} color="#F9A620"/>
                <AssessmentText>{avaliacao}</AssessmentText>
                </StarView>
                <MaterialCommunityIcons name="calendar" size={24} color="#49B3BA" />
            </ContentCard>
        </ContainerCard>
    )
}