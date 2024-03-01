import { TouchableOpacity } from "react-native";
import { Button, ButtonTitle } from "../../components/Button/Style";
import { ClinicCard } from "../../components/ClinicCard/ClinicCard";
import { Container } from "../../components/Container/Style";
import { ListComponent } from "../../components/List/Style";
import { ButtonClinic, TextCancel, TitleSelect } from "./Style";
import { TextUnderlined } from "../../components/Title/Style";
import { useState } from "react";

const Clinicas = [
    { id: 1, nome: "Clínica Natureh", local: "São Paulo, SP", avaliacao:"4,5", date: "Seg-Sex"},
    { id: 2, nome: "Diamond Pró-Mulher", local: "São Paulo, SP", avaliacao:"4,5", date: "Seg-Sex"},
    { id: 3, nome: "Clinica Villa Lobos", local: "São Paulo, SP", avaliacao:"4,5", date: "Seg-Sex"},
    { id: 4, nome: "SP Oncologia Clínica", local: "São Paulo, SP", avaliacao:"4,5", date: "Seg-Sex"},
  ];

const SelectClinic = ({navigation}) => {

    const [selectedClinic, setSelectedClinic] = useState(null);
return(
    <Container>
        <TitleSelect>Selecionar clínica</TitleSelect>
        <ListComponent
            data={Clinicas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                     (
                        <TouchableOpacity onPress={() => setSelectedClinic(item.id)}>
                        <ClinicCard nome ={item.nome} local={item.local}
                        avaliacao = {item.avaliacao} date={item.date}
                        isSelected={item.id == selectedClinic}
                        />
                        </TouchableOpacity>
                    )}
        />
        <ButtonClinic onPress ={() => navigation.navigate("SelectDoctor")}>
            <ButtonTitle>CONFIRMAR</ButtonTitle>
        </ButtonClinic>
        <TextCancel>Cancelar</TextCancel>
    </Container>
)
}

export default SelectClinic;