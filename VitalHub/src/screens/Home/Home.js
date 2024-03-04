import { useState } from "react";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { BoxButtonHome } from "./Style";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { ListComponent } from "../../components/List/Style";
import { Card } from "../../components/Card/Card";
import CancellationModal from "../../components/CancellationModal/CancellationModal";
import ModalAppointment from "../../components/ModalAppointment/ModalAppointment";
import ModalSchedule from "../../components/ModalSchedule/ModalSchedule";
import { TouchableOpacity } from "react-native";
import { BoxIcon } from "../UserHome/Style";
import { FontAwesome5 } from '@expo/vector-icons';

const Lista = [
  {
      id: "1",
      nome: "Gabriel Victor",
      idade: "22",
      horarioConsulta: "14:00",
      tipoConsulta: "Rotina",
      status: "pendente",
      typeUser: "paciente"
  },
  {
      id: "4",
      nome: "Walter",
      idade: "22",
      horarioConsulta: "14:00",
      tipoConsulta: "Exame",
      status: "pendente",
      typeUser: "paciente"
  },
  {
      id: "2",
      nome: "Richard Kosta",
      idade: "28",
      horarioConsulta: "15:00",
      tipoConsulta: "Urgencia",
      status: "realizado",
      typeUser: "paciente"
  },
  {
      id: "3",
      nome: "Gabriel Victor",
      idade: "28",
      horarioConsulta: "15:00",
      tipoConsulta: "Urgencia",
      status: "cancelado",
      typeUser: "paciente"
  },
  {
      id: "5",
      nome: "Dr. Murilo",
      idade: "22",
      horarioConsulta: "14:00",
      tipoConsulta: "Rotina",
      status: "pendente",
      typeUser: "medico",

  },
  {
      id: "6",
      nome: "Dra. Vanessa",
      idade: "36",
      horarioConsulta: "15:20",
      tipoConsulta: "Urgencia",
      status: "realizado",
      typeUser: "medico",

  },
  {
      id: "7",
      nome: "Dra. Rafaela",
      idade: "28",
      horarioConsulta: "16:00",
      tipoConsulta: "Urgencia",
      status: "cancelado",
      typeUser: "medico",

  }
]

export const Home = ({navigation}) => {

  const [statusList, setStatusList] = useState("pendente");
  const [showModalCancel, setShowModalCancel] = useState(false)
  const [showModalAppointment, setShowModalAppointment] = useState(false)
  const [showModalSchedule, setShowModalSchedule] = useState(false)

  const [userLogin, setUserLogin] = useState("paciente")
  
  return (
    userLogin == "medico" ?
    <Container>
      <Header
      name={"Dr. Caludio"} />

      <CalendarHome />

      <BoxButtonHome>
        <ButtonHome
          textButton={"Pendente"}
          clickButton={statusList === "pendente"}
          onPress={() => setStatusList("pendente")}
        />

        <ButtonHome
          textButton={"Realizadas"}
          clickButton={statusList === "realizado"}
          onPress={() => setStatusList("realizado")}
        />

        <ButtonHome
          textButton={"Canceladas"}
          clickButton={statusList === "cancelado"}
          onPress={() => setStatusList("cancelado")}
        />
      </BoxButtonHome>

      {/* Lista (FlatList)*/}
      <ListComponent
                data={Lista}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.status && item.typeUser == 'paciente' &&(
                        <Card nome= {item.nome} situacao={item.status}
                        onPressCancel={() => setShowModalCancel(true)}
                        onPressAppointment={() => setShowModalAppointment(true)}/>
                    )}
            />
            <CancellationModal
            visible={showModalCancel}
            setShowModalCancel={setShowModalCancel}
            />
            <ModalAppointment
            visible={showModalAppointment}
            setShowModalAppointment={setShowModalAppointment}
            navigation={navigation}
            />
      

    </Container>
    :
    <Container>
      <Header
      name={"Richard Kosta"} />

      <CalendarHome />

      <BoxButtonHome>
        <ButtonHome
          textButton={"Pendente"}
          clickButton={statusList === "pendente"}
          onPress={() => setStatusList("pendente")}
        />

        <ButtonHome
          textButton={"Realizadas"}
          clickButton={statusList === "realizado"}
          onPress={() => setStatusList("realizado")}
        />

        <ButtonHome
          textButton={"Canceladas"}
          clickButton={statusList === "cancelado"}
          onPress={() => setStatusList("cancelado")}
        />
      </BoxButtonHome>

      {/* Lista (FlatList)*/}
      <ListComponent
                data={Lista}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.status && item.typeUser == 'medico' &&(
                        <Card nome= {item.nome} situacao={item.status}
                        onPressCancel={() => setShowModalCancel(true)}
                        onPressAppointment={() => setShowModalAppointment(true)}/>
                    )}
            />
            <ModalSchedule
            visible={showModalSchedule}
            setShowModalSchedule ={setShowModalSchedule}
            navigation={navigation}
            />
            <TouchableOpacity  onPress={() => setShowModalSchedule(true)}>
            <BoxIcon>
            <FontAwesome5 name="stethoscope" size={24} color="white" />
            </BoxIcon>
            </TouchableOpacity>

    </Container>
  );
};
