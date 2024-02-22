import { Modal } from "react-native";
import {
  ContentAppointment,
  PatientPhoto,
  TextUnderlinedModal,
  TitleModal,
  ViewModalAppointment,
  ViewSubTitles,
} from "./Style";
import { TextUnderlined, Title } from "../Title/Style";
import { SubTitle } from "../SubTitle/Style";
import { Button, ButtonTitle } from "../Button/Style";

const ModalAppointment = ({ visible, setShowModalAppointment, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ViewModalAppointment>
        <ContentAppointment>
          <PatientPhoto
            source={require("../../assets/img/igor-caique-coronado-no-corinthians_2g.jpg")}
          />
          <TitleModal>Igor Coronado</TitleModal>
          <ViewSubTitles>
            <SubTitle>22 anos</SubTitle>
            <SubTitle>niccole.sarga@gmail.com</SubTitle>
          </ViewSubTitles>
          <Button>
            <ButtonTitle>INSERIR PRONTUÁRIO</ButtonTitle>
          </Button>
          <TextUnderlinedModal onPress={() => setShowModalAppointment(false)}>
            Cancelar
          </TextUnderlinedModal>
        </ContentAppointment>
      </ViewModalAppointment>
    </Modal>
  );
};

export default ModalAppointment;