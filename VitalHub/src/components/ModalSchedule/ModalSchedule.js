import { Modal } from "react-native"
import { ButtonContinue, ButtonModal, ButtonTextModal, TitleModal, ViewContent, ViewModalSchedule, ViewRow } from "./Style"
import { TextUnderlined, Title } from "../Title/Style"
import { BoxInput } from "../BoxInput/Index"
import { useState } from "react"
import { Button, ButtonTitle } from "../Button/Style"


const ModalSchedule = ({ navigation, setShowModalSchedule, visible, clickButton, clickText,  ...rest}) => {

const [statusList, setStatusList] = useState("rotina");


    function closeModal () {
        navigation.navigate("SelectClinic")
        setShowModalSchedule(false)
    }
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModalSchedule>
                <ViewContent >
                    <TitleModal>Agendar consulta</TitleModal>
                    <ViewRow>

                    <ButtonModal clickButton={statusList === "rotina"} onPress={() => setStatusList("rotina")}>
                        <ButtonTextModal clickText={statusList === "rotina"}>Rotina</ButtonTextModal>
                    </ButtonModal>

                    <ButtonModal clickButton={statusList === "exame"} onPress={() => setStatusList("exame")}>
                        <ButtonTextModal clickText={statusList === "exame"}>Exame</ButtonTextModal>
                    </ButtonModal>

                    <ButtonModal clickButton={statusList === "urgencia"} onPress={() => setStatusList("urgencia")}>
                        <ButtonTextModal clickText={statusList === "urgencia"}>Urgencia</ButtonTextModal>
                    </ButtonModal>

                    </ViewRow>

                    <BoxInput
                    textLabel={'Informe a localização desejada'}
                    placeholder={"Informe a localização"}
                    borderStyle={'#49B3BA'}
                    textColor={'#49B3BA'}/>

                    
                    <ButtonContinue onPress={() => closeModal()}>
                        <ButtonTitle>CONTINUAR</ButtonTitle>
                    </ButtonContinue>

                    <TextUnderlined onPress={() => setShowModalSchedule(false)}>Cancelar</TextUnderlined>
                </ViewContent>
            </ViewModalSchedule>
        </Modal>
    )
}

export default ModalSchedule;