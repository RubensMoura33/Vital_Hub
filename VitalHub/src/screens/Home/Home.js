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

const Consultas = [
  { id: 1, nome: "Rubens", situacao: "pendente"},
  { id: 2, nome: "Carlos", situacao: "cancelado"},
  { id: 3, nome: "Gabriel", situacao: "realizado"},
  { id: 4, nome: "Edu", situacao: "pendente"},
  { id: 5, nome: "Wanderson", situacao: "pendente"},
];

export const Home = ({navigation}) => {

  const [statusList, setStatusList] = useState("pendente");
  const [showModalCancel, setShowModalCancel] = useState(false)
  const [showModalAppointment, setShowModalAppointment] = useState(false)
  return (
    <Container>
      <Header />

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
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusList == item.situacao && (
                        <Card nome= {item.nome} situacao={item.situacao}
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
  );
};
