// Import styled da biblioteca styled-components
import styled from "styled-components";

import {LinearGradient} from 'expo-linear-gradient'

// Componente Container estilizado sendo exportado
export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`
// Componente ContainerEdit estilizado sendo exportado
export const ContainerEdit = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
    margin-top: 60px;
`
// Componente ContentAccount estilizado sendo exportado
export const ContentAccount = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 50px;
`
// Componente SubTitleView estilizado sendo exportado
export const SubTitleView =  styled.View`
    width: 85%;
    align-items: center;
    
`
// Componente CodeView estilizado sendo exportado
export const CodeView = styled.View`
    flex-direction: row;
    gap: 15px;
`
// Componente CodeView estilizado sendo exportado
export const RowView = styled.View`
    flex-direction: row;
    gap: 15px;
`
export const ViewSubTitle = styled.View`
    flex-direction: row;
    gap: 20px;
`

// Componente ViewTitle estilizado sendo exportado
export const ViewTitle = styled.View`
width: 80%;
height: 130px;
position: absolute;
z-index: 99;
margin-bottom: 20px;
background-color: #FFFFFF;
border-radius: 7px;
align-self: center;
align-items: center;
justify-content: center;
margin-top: 290px;
`

export const ContainerHeader = styled(LinearGradient).attrs({
    colors : ['#60BFC5', '#496BBA'],
    start: {x: -0.05, y: 1.08},
    end:{x:1, y:0}
})
`
    width: 100%;
    height: 160px;
    padding: 20px;
    padding-bottom: 25px;
    

    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 4px 15px #00000014;
`

// Componente ContainerProfile estilizado sendo exportado
export const ContainerProfile = styled.ScrollView`
    background-color: #FAFAFA
`