import { Modal } from "react-native";
import { TextUnderlined, Title } from "../Title/Style";
import { Button, ButtonTitle } from "../Button/Style";
import { ContentModal, ViewModal } from "./Style";
import { SubTitle } from "../SubTitle/Style";
import { TitleModal } from "../ModalAppointment/Style";

const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ViewModal>
        <ContentModal>
          <TitleModal>Cancelar consulta</TitleModal>
          <SubTitle>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</SubTitle>
          <Button >
            <ButtonTitle>CONFIRMAR</ButtonTitle>
          </Button>
          <TextUnderlined onPress={() => setShowModalCancel(false)}
          >Cancelar</TextUnderlined>
        </ContentModal>
      </ViewModal>
    </Modal>
  );
};

export default CancellationModal;
