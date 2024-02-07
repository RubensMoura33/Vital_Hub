// Componentes estilizados
import { Button, ButtonBack, ButtonTitle } from "../../components/Button/Style";
import { CodeView, Container, SubTitleView } from "../../components/Container/Style";
import { InputCode } from "../../components/Input/Style";
import { IconBack, Logo } from "../../components/Logo/Style";
import { ExEmail, SubTitle } from "../../components/SubTitle/Style";
import { TextUnderlined, Title } from "../../components/Title/Style";

export const EmailCode = ( {navigation} ) => {
    return(
        <Container>
            <ButtonBack onPress={() => navigation.navigate("Login")}>
             <IconBack source={require("../../assets/icons/Group170.png")} />
            </ButtonBack>

            <Logo source={require("../../assets/img/VitalHub_Logo 1.png")}/>

            <Title>Verifique seu e-mail</Title>
                <SubTitleView>
                    <SubTitle>Digite o código de  4 dígitos enviado para  
                    <ExEmail> username@email.com</ExEmail>
                    </SubTitle>
                </SubTitleView>
                <CodeView>
                    <InputCode placeholder='0'/>
                    <InputCode placeholder='0'/>
                    <InputCode placeholder='0'/>
                    <InputCode placeholder='0'/>                  
                </CodeView>
                <Button onPress={() => navigation.navigate("RedefinePassword")}>
                    <ButtonTitle>ENTRAR</ButtonTitle>
                </Button>
                <TextUnderlined>Reenviar Código</TextUnderlined>
        </Container>
    );
}