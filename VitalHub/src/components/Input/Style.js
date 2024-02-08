// Import styled da biblioteca styled-components
import styled from "styled-components";

// Componente Input estilizado sendo exportado
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    width: 90%;
    height: 65px;
    margin-top: 25px;
    padding: 16px;
    border: 2px solid #49B3BA;
    border-radius: 5px;
    color: #34898F;
    font-size:14px;
    font-family:"MontserratAlternates_600SemiBold";
`
export const InputProfile = styled(Input).attrs({placeholderTextColor: '#33303E'})`
    
    border-radius: 0px;
    margin-top: 0px;
    border: none;
    color: #33303E;
    background-color: #F5F3F3;
    font-family: "MontserratAlternates_500Medium";
`

// Componente InputCode estilizado sendo exportado
export const InputCode = styled(Input)`
    width: 70px;
    height: 70px;
    font-size: 52px;
    font-family:"MontserratAlternates_600SemiBold";
`