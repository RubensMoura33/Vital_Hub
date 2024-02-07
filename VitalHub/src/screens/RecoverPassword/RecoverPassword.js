// Componentes estilizados
import { Container, SubTitleView } from "../../components/Container/Style";
import { IconBack, Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { SubTitle } from "../../components/SubTitle/Style";
import { Input } from "../../components/Input/Style";
import { Button, ButtonBack, ButtonTitle } from "../../components/Button/Style";
import { Image } from "react-native";

export const RecoverPassword = ({navigation}) => {
    return(    
        <Container>
            <ButtonBack onPress={() => navigation.navigate("Login")}>
             <IconBack source={require("../../assets/icons/Group169.png")} />
            </ButtonBack>

            <Logo source={require("../../assets/img/VitalHub_Logo 1.png")}/>

            <Title>Recuperar senha</Title>

            <SubTitleView>
            <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>
            </SubTitleView>

            <Input placeholder = 'Usuário ou E-mail'/>

            <Button onPress={() => navigation.navigate("EmailCode")}>
                <ButtonTitle >CONTINUAR</ButtonTitle>
            </Button>
        </Container>
    );
}