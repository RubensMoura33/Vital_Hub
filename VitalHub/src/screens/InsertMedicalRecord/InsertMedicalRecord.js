import { BoxInput } from "../../components/BoxInput/Index"
import { Button, ButtonTitle } from "../../components/Button/Style"
import { Container, ContainerProfile, ViewSubTitle } from "../../components/Container/Style"
import { ProfileImage } from "../../components/Images/Style"
import { SubTitle } from "../../components/SubTitle/Style"
import { ProfileTitle, TextUnderlined } from "../../components/Title/Style"

export const InsertMedicalRecord = () => {
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
            textLabel={'Descrição da consulta'}
            placeholder={"Descrição"}
            borderStyle={'#49B3BA'}
            textColor={'#49B3BA'}/>

            <BoxInput
            textLabel={'Diagnóstico do paciente'}
            placeholder={"Diagnóstico"}
            borderStyle={'#49B3BA'}
            textColor={'#49B3BA'}/>

            <BoxInput
            textLabel={'Prescrição médica'}
            fieldHeight={"120px"}
            borderStyle={'#49B3BA'}
            placeholder={"Prescrição médica"}
            textColor={'#49B3BA'}
            paddingBottom={"70px"}/>

            <Button>
                <ButtonTitle>SALVAR</ButtonTitle>
            </Button>
            <TextUnderlined>CANCELAR</TextUnderlined>
            </Container>
        </ContainerProfile>
    )
}