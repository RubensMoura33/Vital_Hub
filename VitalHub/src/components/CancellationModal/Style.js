import styled from "styled-components";
import { Title } from "../Title/Style";
import { SubTitle } from "../SubTitle/Style";
import { TextUnderlined } from "../Title/Style";

export const ViewModal = styled.View`
flex: 1;
background-color: rgba(0, 0, 0, 0.5);
align-items: center;
justify-content: center;

`

export const ContentModal = styled.View`
background-color: white;
padding: 20px;
border-radius: 10px;
width: 90%;
align-items: center;
`
export const TitleModal = styled(Title)`

`
export const SubTitleModal = styled(SubTitle)`
align-self: center;
font-size: 21px;
`
export const TextUnderlinedModal = styled(TextUnderlined)`
margin-top: 25px;
`