// Componentes estilizados
import { Button, ButtonGoogle, ButtonTitle, ButtonTitleGoogle, IconGoogle } from "../../components/Button/Style";
import { Container, ContentAccount } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { TextAccount, TextLink, Title } from "../../components/Title/Style";


export const Login = ({ navigation }) => {
    return(
        <Container>
            
            <Logo source={require("../../assets/img/VitalHub_Logo 1.png")}/>

            <Title>Entrar ou criar conta</Title>

            <Input
            placeholder='Usuário ou E-mail'/>

            <Input
            placeholder='Senha'
            secureTextEntry/>

            <LinkMedium onPress={() => navigation.navigate("RecoverPassword")}>Esqueceu sua senha?</LinkMedium>

             <Button>
                <ButtonTitle>ENTRAR</ButtonTitle>                
            </Button>

            <ButtonGoogle>
                <IconGoogle source={require("../../assets/icons/GOOGLE.png")}/>
                <ButtonTitleGoogle>ENTRAR COM GOOGLE</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <TextLink onPress={() => navigation.navigate("Register")}>Crie uma conta agora!</TextLink></TextAccount>
            </ContentAccount> 

        </Container>

    );
}