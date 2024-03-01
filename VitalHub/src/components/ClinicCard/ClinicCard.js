import {
  ContainerCard,
  ContentCard,
  DataProfile,
  ProfileName,
  TextBold,
} from "../Card/Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AssessmentText, ContainerClinic, StarView, TextDate, View1, View2, ViewCalendar } from "./Style";

export const ClinicCard = ({ nome, local, avaliacao, date, isSelected }) => {
  return (
    <ContainerClinic isSelected={isSelected}>

        <View1>
          <ProfileName>{nome}</ProfileName>
          <StarView>
            <AntDesign name="star" size={24} color="#F9A620" />
            <AssessmentText>{avaliacao}</AssessmentText>
          </StarView>
          </View1>

          <View2>
          <TextBold>{local}</TextBold>
          <ViewCalendar>
            <MaterialCommunityIcons name="calendar" size={24} color="#49B3BA" />
            <TextDate>{date}</TextDate>
          </ViewCalendar>
          </View2>
          
    </ContainerClinic>
  );
};
