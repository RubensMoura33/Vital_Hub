// Componentes estilizados
import { Button, ButtonBack, ButtonTitle } from "../../components/Button/Style";
import { Container, SubTitleView } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { IconBack, Logo } from "../../components/Logo/Style";
import { SubTitle } from "../../components/SubTitle/Style";
import { Title } from "../../components/Title/Style";

export const RedefinePassword = ({ navigation }) => {
    return(
    <Container>
        <ButtonBack onPress={() => navigation.navigate("Login")}>
             <IconBack source={require("../../assets/icons/Group170.png")} />
            </ButtonBack>
        <Logo source={require("../../assets/img/VitalHub_Logo 1.png")}/>

        <Title>Redefinir senha</Title>

        <SubTitleView>
            <SubTitle>Insira e confirme a sua nova senha</SubTitle>
        </SubTitleView>

        <Input placeholder='Nova Senha'/>

        <Input placeholder='Confirmar nova senha'/>

        <Button onPress={() => navigation.navigate("Login")}>
            <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
        </Button>
    </Container>
    );
}
