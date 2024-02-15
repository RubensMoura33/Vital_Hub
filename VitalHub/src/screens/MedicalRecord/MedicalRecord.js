import { BoxInput } from "../../components/BoxInput/Index"
import { Container, ContainerProfile, ViewSubTitle } from "../../components/Container/Style"
import { ProfileImage } from "../../components/Images/Style"
import { SubTitle } from "../../components/SubTitle/Style"
import { ProfileTitle } from "../../components/Title/Style"

export const MedicalRecord = () => {
    return(
        <ContainerProfile>
            <ProfileImage source={require("../../assets/img/Profile.jpg")} />
            <Container>
            <ProfileTitle>Richard Kosta</ProfileTitle>
            <ViewSubTitle>
            <SubTitle>22 Anos</SubTitle>
            <SubTitle>richard.kosta@gmail.com</SubTitle>
            </ViewSubTitle>

            <BoxInput
            textLabel={'Descrição da consulta'}/>

            <BoxInput
            textLabel={'Diagnóstico do paciente'}/>

            <BoxInput
            textLabel={'Prescrição médica'}
            fieldHeight={120}
            borderStyle={'#49B3BA'}/>

            </Container>
        </ContainerProfile>
    )
}