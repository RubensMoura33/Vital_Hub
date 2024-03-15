
import { BoxInput } from "../../components/BoxInput/Index"
import { ContainerProfile, ContainerScroll,  Line,  ViewInsertPhoto, ViewSuBTitlePrescription} from "../../components/Container/Style"
import { DoctorImage } from "../../components/Images/Style"
import { BtnProfile, SubtitleRecord, TitleCancelPhoto, TitleProfile } from "../../components/Title/Style"
import { BtnCancelPhoto, BtnInsertPhoto } from "../../components/Button/Button"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinkCancelMargin } from "../../components/Link/Style"
import { useState } from "react"
import { Image } from "react-native"

export const SeePrescription = ({navigation, route}) => {


    const { photoUri} = route.params || {}
    const [isPhoto, setIsPhoto] = useState(true)
    

    function onPressPhoto() {
        navigation.navigate("CameraRecord");
        setIsPhoto(true)
    }

    function onPressCancel() {
        setIsPhoto(false);
        route.params = null
    }

    return(
        <ContainerScroll>
        <DoctorImage source={require("../../assets/doctor.png")}/>
            <ContainerProfile>

            <TitleProfile>Dr Claudio</TitleProfile>
            <ViewSuBTitlePrescription>
                <SubtitleRecord>Cliníco geral</SubtitleRecord>
                <SubtitleRecord>CRM-15286</SubtitleRecord>
            </ViewSuBTitlePrescription>

            <BoxInput
                multiline={true}
                textLabel={"Descrição da consulta"}
                placeholder={`O paciente possuí uma infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante`}
                fieldHeight={150}
            />
            <BoxInput
                multiline={true}
                textLabel={"Diagnóstico do paciente"}
                placeholder={`Infecção no ouvido`}
                fieldHeight={80}
            />
            <BoxInput
                multiline={true}
                textLabel={"Prescrição médica"}
                placeholder={`Medicamento: Advil Dosagem: 50 mg Frequência: 3 vezes ao dia Duração: 3 dias`}
                fieldHeight={150}
            />
{
                    photoUri && isPhoto ?
                        <Image
                            style={{ width: '100%', height: 500, borderRadius: 10 }}
                            source={{ uri: photoUri }}
                        /> :
                        <BoxInput
                            textLabel={"Exames médicos"}
                            placeholder={`Nenhuma foto informada`}
                            fieldHeight={150}
                            marginBottom={0}
                        />
}
            <ViewInsertPhoto>
                
                <BtnInsertPhoto onPress={() => onPressPhoto()}>
                    <MaterialCommunityIcons name="camera-plus-outline" size={26} color="white" />
                    <BtnProfile>Enviar</BtnProfile>
                </BtnInsertPhoto>
                <BtnCancelPhoto  onPress={() => onPressCancel()}>
                    <TitleCancelPhoto >Cancelar</TitleCancelPhoto>
                </BtnCancelPhoto>

            </ViewInsertPhoto>

            <Line></Line>

            <BoxInput
                placeholder={"Resultado do exame de sangue : tudo normal"}
                multiline={true}
                fieldHeight={120}
                marginBottom={0}
            />



            <LinkCancelMargin onPress={() => {navigation.replace("Main")}}>Voltar</LinkCancelMargin>

            </ContainerProfile>
        </ContainerScroll>


    )
}