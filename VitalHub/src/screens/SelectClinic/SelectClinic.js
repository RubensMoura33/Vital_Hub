import { TouchableOpacity } from "react-native";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { ClinicCard } from "../../components/ClinicCard/ClinicCard";
import { Container } from "../../components/Container/Style";
import { ListComponent } from "../../components/List/Style";
import { ButtonClinic, TextCancel, TitleSelect } from "./Style";
import { TextUnderlined } from "../../components/Title/Style";

const Clinicas = [
    { id: 1, nome: "Clínica Natureh", local: "São Paulo, SP", avaliacao:"4,5"},
    { id: 2, nome: "Diamond Pró-Mulher", local: "São Paulo, SP", avaliacao:"4,5"},
    { id: 3, nome: "Clinica Villa Lobos", local: "São Paulo, SP", avaliacao:"4,5"},
    { id: 4, nome: "SP Oncologia Clínica", local: "São Paulo, SP", avaliacao:"4,5"},
  ];

const SelectClinic = () => {
return(
    <Container>
        <TitleSelect>Selecionar clínica</TitleSelect>
        <ListComponent
            data={Clinicas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                     (
                        <TouchableOpacity>
                        <ClinicCard nome ={item.nome} local={item.local}
                        avaliacao = {item.avaliacao}
                        />
                        </TouchableOpacity>
                    )}
        />
        <ButtonClinic>
            <ButtonTitle>CONFIRMAR</ButtonTitle>
        </ButtonClinic>
        <TextCancel>Cancelar</TextCancel>
    </Container>
)
}

export default SelectClinic;