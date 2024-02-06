import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background-color: #496BBA;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    
`
export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: white;
    font-family: "MontserratAlternates_600SemiBold";
`
export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    border: 1px solid #496BBA;
    margin-top: 15px;
    flex-direction: row;
`
export const ButtonTitleGoogle = styled(ButtonTitle)`
    color: #496BBA; 
`
export const IconGoogle = styled.Image`
    margin-right: 27px;
`