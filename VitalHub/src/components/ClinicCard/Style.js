import styled from "styled-components";
import { ContainerCard, ContentCard } from "../Card/Style";

export const StarView = styled.View`
flex-direction: row;
gap: 5px;
align-items: center;
`
export const AssessmentText = styled.Text`
font-family: 'Quicksand_600SemiBold';
font-size: 18px;
color: #F9A620;
`
export const TextDate = styled.Text`
font-family: 'Quicksand_600SemiBold';
color: #49B3BA;
font-size: 15px;
`

export const ViewCalendar = styled.View`
flex-direction: row;
gap: 5px;
height: 22px;   
width: 100px;
align-items: center;
background-color: #E8FCFD;
gap: 10px;
justify-content: center;
`
export const View1 = styled.View`
flex-direction: row;
justify-content: space-between;
width: 100%;
`
export const View2 = styled.View`
flex-direction: row;
margin-top: 10px;
width: 100%;
justify-content: space-between;
`
export const ContainerClinic = styled(ContainerCard)`
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 18px;
padding-right: 18px;
gap: 0px;
border: ${props => props.isSelected ? '3px solid #496BBA' : 'none'};
`
