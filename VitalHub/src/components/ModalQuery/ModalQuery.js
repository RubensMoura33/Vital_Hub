import { Modal } from "react-native"
import { ButtonLocal, CRM, ContentQuery, DoctorName, DoctorPhoto, Specialty, TextButton, TextCancel, ViewInfos, ViewModalQuery } from "./Style"

export const ModalQuery = ({
    navigation,
    visible,
    setShowModalQuery,
    ...rest}) => {
        return(
            <Modal {...rest} visible={visible} transparent={true} animationType="fade">
                <ViewModalQuery>
                    <ContentQuery>
                        <DoctorPhoto source={require("../../assets/img/medico.png")}/>
                        <DoctorName>Dr. Claudio</DoctorName>
                        <ViewInfos>
                            <Specialty>Cliníco geral</Specialty>
                            <CRM>CRM-15286</CRM>
                        </ViewInfos>
                        <ButtonLocal>
                            <TextButton>VER O LOCAL DA CONSULTA</TextButton>
                        </ButtonLocal>
                        <TextCancel onPress={() => setShowModalQuery(false)}>Cancelar</TextCancel>
                    </ContentQuery>
                </ViewModalQuery>
            </Modal>
        )
    }