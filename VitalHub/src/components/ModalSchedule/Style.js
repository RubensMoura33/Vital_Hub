import styled, { css } from "styled-components";
import { Title } from "../Title/Style";
import { ButtonText } from "../ButtonHome/Style";
import { Button } from "../Button/Style";

export const ViewModalSchedule = styled.View`
flex: 1;
background-color: rgba(0, 0, 0, 0.5);
align-items: center;
justify-content: flex-end;
`
export const ViewContent = styled.View`
width: 100%;
height: 80%;
align-items: center;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
background-color: white;
`

export const TitleModal = styled(Title)`
margin-top:60px;
`
export const ButtonModal = styled.TouchableOpacity`
    width: 27%;
    border-radius: 5px;
    height: 55px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;

    ${props => props.clickButton ? css`
    background-color: #60BFC5;
  `: css`
    background-color: transparent;
    border: 2px solid #60BFC5;
  `}
`
export const ViewRow = styled.View`
flex-direction: row;
gap: 20px;
`

export const ButtonTextModal = styled(ButtonText)`

${props => props.clickText ? css`
    color: #fbfbfb;
  `: css`
  color: #60BFC5;
  `}
`
export const ButtonContinue = styled(Button) `
    margin-top: 200px;
`