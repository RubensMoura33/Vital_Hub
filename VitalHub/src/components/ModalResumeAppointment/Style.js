import styled from "styled-components";
import { Title } from "../Title/Style";
import { SubTitle } from "../SubTitle/Style";
import { TextUnderlinedModal } from "../ModalAppointment/Style";
import { Button } from "../Button/Style";

export const TitleModal = styled(Title)`
    margin-top: 30px;
`
export const SubTitleModal = styled(SubTitle)`
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 50px;
`
export const ViewData = styled.View`
    align-self: flex-start;
    gap: 10px;
    margin-left: 22px;
    margin-bottom: 40px;
`
export const TitleData = styled.Text`
    font-size: 18px;
    font-family: "Quicksand_600SemiBold";
`
export const TextData = styled.Text`
    font-size: 16px;
    font-family: "Quicksand_500Medium";
`
export const TextUnderlinedModalResume = styled(TextUnderlinedModal)`
    margin-bottom: 15px;
`
export const ButtonModal = styled(Button)`
    margin-top: 0px;
`
