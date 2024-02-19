// Import styled da biblioteca styled-components
import styled from "styled-components";

// Componente Title estilizado sendo exportada
export const Title = styled.Text`
    font-size: 23px;
    color: #33303e;
    font-family: "MontserratAlternates_600SemiBold";
    margin-bottom: 5px;
`
//Componente ProfileTitle estilizado sendo exportada
export const ProfileTitle = styled(Title)`
    align-self: center;
    margin-top: 20px;
` 

// Componente TextAccount estilizado sendo exportada
export const TextAccount = styled.Text`
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
`
// Componente TextLink estilizado sendo exportada
export const TextLink = styled(TextAccount)`
    color: #4D659D;
`
// Componente TextUnderlined estilizado sendo exportada
export const TextUnderlined = styled.Text`
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 30px;
    align-self: center;
    text-decoration: underline;
    color: #344F8F;
    font-family: "MontserratAlternates_600SemiBold";
`