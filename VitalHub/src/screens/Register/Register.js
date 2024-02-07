// Componentes estilizados
import { Container, SubTitleView } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { TextUnderlined, Title } from "../../components/Title/Style";
import { SubTitle } from "../../components/SubTitle/Style";
import { Input } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";

export const Register = ({ navigation }) => {
    return(
        <Container>
            <Logo  source={require("../../assets/img/VitalHub_Logo 1.png")}/>

            <Title>Criar conta</Title>

            <SubTitleView>
            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>
            </SubTitleView>

            <Input 
            placeholder='Usuário ou E-mail'
            />

            <Input 
            placeholder='Senha' 
            secureTextEntry/>

            <Input 
            placeholder='Confirmar Senha'             
            secureTextEntry/>

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>

                <TextUnderlined onPress={() => navigation.navigate("Login")}>Cancelar</TextUnderlined>       

        </Container>
    );
}