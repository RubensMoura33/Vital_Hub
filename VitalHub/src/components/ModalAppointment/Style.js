import styled from "styled-components";
import { Title } from "../Title/Style";
import { TextUnderlined } from "../Title/Style";

export const ViewModalAppointment = styled.View`
flex: 1;
background-color: rgba(0, 0, 0, 0.5);
align-items: center;
justify-content: center;

`

export const ContentAppointment = styled.View`
background-color: white;
padding: 20px;
border-radius: 10px;
width: 90%;
align-items: center;
`

export const ViewSubTitles = styled.View`
flex-direction: row;
gap: 20px;
`
export const PatientPhoto = styled.Image`
width: 90%;
object-fit: contain;
height: 200px;
`
export const TitleModal =  styled(Title)`
 margin-top: 20px;
`
export const TextUnderlinedModal = styled(TextUnderlined)`
    margin-top: 35px;
`