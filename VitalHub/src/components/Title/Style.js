// Import styled da biblioteca styled-components
import styled from "styled-components";

// Componente Title estilizado sendo exportada
export const Title = styled.Text`
    font-size: 23px;
    color: #33303e;
    font-family: "MontserratAlternates_600SemiBold";
    margin-bottom: 5px;
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
    align-self: center;
    text-decoration: underline;
    color: #344F8F;
    font-family: "MontserratAlternates_600SemiBold";
`