import { useState } from "react"
import { Container } from "../../components/Container/Style";
import { TextCancel, TitleSelect } from "../SelectClinic/Style";
import { ListComponent } from "../../components/List/Style";
import { TouchableOpacity } from "react-native";
import { CardDoctor } from "../../components/CardDoctor/CardDoctor";
import { ButtonDoctor } from "./Style.js";
import { ButtonTitle } from "../../components/Button/Style.js";



const Medicos = [
    { id: 1, nome: "Dra Alessandra", Especialidade: "Demartologa, Esteticista", Foto: require("../../assets/img/nicole.png") },
    { id: 2, nome: "Dr Kumushiro", Especialidade: "Cirurgião, Cardiologista", Foto: require("../../assets/img/medico.png") },
    { id: 3, nome: "Dr Rodrigo Santos", Especialidade: "Clínico, Pediatra", Foto: require("../../assets/img/photo.png") },
    { id: 4, nome: "Dr Igor Coronado", Especialidade: "Oftamologista", Foto: require("../../assets/img/igor-caique-coronado-no-corinthians_2g.jpg") },

]



export const SelectDoctor = ({ navigation }) => {

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <Container>
            <TitleSelect>Selecionar Medico</TitleSelect>

            {<ListComponent
                data={Medicos}
                renderItem={({ item }) =>
                (
                    <TouchableOpacity onPress={() => setSelectedDoctor(item.id)}>
                        <CardDoctor name={item.nome}
                            espec={item.Especialidade}
                            photo={item.Foto}
                            isSelected={item.id == selectedDoctor}
                        />
                    </TouchableOpacity>
                )}
            />}

            <ButtonDoctor onPress ={() => navigation.navigate("SelectDate")}>
                <ButtonTitle>CONTINUAR</ButtonTitle>
            </ButtonDoctor>
            <TextCancel onPress={() => { navigation.navigate("UserHome") }}>Cancelar</TextCancel>
        </Container>
    )
}