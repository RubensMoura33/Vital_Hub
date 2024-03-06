import styled from "styled-components";
import { Title } from "../Title/Style";
import { TextUnderlined } from "../Title/Style";
import { Button, ButtonTitle } from "../Button/Style";

export const ViewModalQuery = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const ContentQuery = styled.View`
background-color: white;
padding: 20px;
border-radius: 15px;
width: 90%;
align-items: center;
`;

export const DoctorPhoto = styled.Image`
  width: 90%;
  object-fit: contain;
  height: 200px;
`;

export const DoctorName = styled(Title)`
margin-top: 20px;
`;

export const ViewInfos = styled.View`
flex-direction: row;
gap: 20px;
`;

export const Specialty = styled.Text`

`;

export const CRM = styled.Text`

`;

export const ButtonLocal = styled(Button)`

`;

export const TextButton = styled(ButtonTitle)`

`;
export const TextCancel = styled(TextUnderlined)`
    margin-top: 30px;
`;
