// Import styled da biblioteca styled-components
import styled from "styled-components";

// Componente Button estilizado sendo exportado
export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 60px;
    border-radius: 5px;
    background-color: #496BBA;
    border: 1px solid #496BBA;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    
`
// Componente ButtonTitle estilizado sendo exportado
export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: white;
    font-family: "MontserratAlternates_600SemiBold";
`
// Componente ButtonGoogle estilizado sendo exportado
export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    border: 1px solid #496BBA;
    margin-top: 20px;
    flex-direction: row;
`
// Componente ButtonTitleGoogle estilizado sendo exportado
export const ButtonTitleGoogle = styled(ButtonTitle)`
    color: #496BBA; 
`
export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
    margin-top: 85px;
    margin-left: 25px;
    align-self: flex-start;
`

// Componente IconGoogle estilizado sendo exportado
export const IconGoogle = styled.Image`
    margin-right: 27px;
`