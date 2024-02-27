import { Modal } from "react-native"
import { ButtonModal, ButtonTextModal, TitleModal, ViewContent, ViewModalSchedule, ViewRow } from "./Style"
import { TextUnderlined, Title } from "../Title/Style"
import { BoxInput } from "../BoxInput/Index"
import { useState } from "react"
import { Button, ButtonTitle } from "../Button/Style"


const ModalSchedule = ({ setShowModalSchedule, visible, ...rest}) => {

const [statusList, setStatusList] = useState("pendente");

    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModalSchedule>
                <ViewContent>
                    <TitleModal>Agendar consulta</TitleModal>
                    <ViewRow>

                    <ButtonModal>
                        <ButtonTextModal>gABRIEL</ButtonTextModal>
                    </ButtonModal>
                    <ButtonModal>
                        <ButtonTextModal></ButtonTextModal>
                    </ButtonModal>
                    <ButtonModal>
                        <ButtonTextModal></ButtonTextModal>
                    </ButtonModal>

                    </ViewRow>

                    <BoxInput
                    textLabel={'Informe a localização desejada'}
                    placeholder={"Informe a localização"}
                    borderStyle={'#49B3BA'}
                    textColor={'#49B3BA'}/>

                    
                    <Button>
                        <ButtonTitle>CONTINUAR</ButtonTitle>
                    </Button>

                    <TextUnderlined onPress={() => setShowModalSchedule(false)}>Cancelar</TextUnderlined>
                </ViewContent>
            </ViewModalSchedule>
        </Modal>
    )
}

export default ModalSchedule;