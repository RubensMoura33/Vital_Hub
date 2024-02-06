// Import styled da biblioteca styled-components
import styled from "styled-components";

// Componente Logo estilizada sendo exportada
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    width: 90%;
    height: 53px;
    margin-top: 15px;
    padding: 16px;
    border: 2px solid #49B3BA;
    border-radius: 5px;
    color: #34898F;
    font-size:14px;
    font-family:"MontserratAlternates_600SemiBold"
`