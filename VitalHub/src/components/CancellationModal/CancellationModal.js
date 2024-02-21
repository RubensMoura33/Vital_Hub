import { Modal } from "react-native";
import { TextUnderlined, Title } from "../Title/Style";
import { Button, ButtonTitle } from "../Button/Style";
import { ContentModal, ViewModal } from "./Style";

const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ViewModal>
        <ContentModal>
          <Title>Cancelar consulta</Title>
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
