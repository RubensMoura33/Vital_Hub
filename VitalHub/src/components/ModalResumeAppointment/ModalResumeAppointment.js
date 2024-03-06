import { Modal } from "react-native"
import { ContentAppointment, TextUnderlinedModal, ViewModalAppointment } from "../ModalAppointment/Style"
import { Title } from "../Title/Style"
import { ButtonModal, SubTitleModal, TextData, TitleData, TitleModal, ViewData } from "./Style"
import { SubTitle } from "../SubTitle/Style"
import { Button, ButtonTitle } from "../Button/Style"

export const ModalResumeAppointment = ({navigation,
    visible,
    setShowModalResume,
    ...rest
}) => {
    function onClick () {
        navigation.navigate("Home")
        setShowModalResume(false)
    }
    return(
        
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ViewModalAppointment>
                <ContentAppointment>
                    <TitleModal>Agendar consulta</TitleModal>
                    <SubTitleModal>Consulte os dados selecionados para a sua consulta</SubTitleModal>

                    <ViewData>
                    <TitleData>Data da consulta</TitleData>
                    <TextData>1 de Novembro de 2023</TextData>
                    </ViewData>

                    <ViewData>
                    <TitleData>Médico(a) da consulta</TitleData>
                    <TextData>Dra Alessandra</TextData>
                    <TextData>Demartologa, Esteticista</TextData>
                    </ViewData>

                    <ViewData>
                    <TitleData>Local da consulta</TitleData>
                    <TextData>São Paulo, SP</TextData>
                    </ViewData>
                    
                    <ViewData>
                    <TitleData>Tipo da consulta</TitleData>
                    <TextData>Rotina</TextData>
                    </ViewData>

                    <ButtonModal onPress={() => onClick()}>
                        <ButtonTitle>CONFIRMAR</ButtonTitle>
                    </ButtonModal>
                    <TextUnderlinedModal onPress={() => onClick()}>Cancelar</TextUnderlinedModal>
                </ContentAppointment>
            </ViewModalAppointment>
        </Modal>
    )
}