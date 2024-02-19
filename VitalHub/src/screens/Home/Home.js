import { useState } from "react";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";
import { Container } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { BoxButtonHome } from "./Style";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

const Consultas = [
  { id: 1, nome: "Rubens", situacao: "pendente"},
  { id: 2, nome: "Carlos", situacao: "cancelado"},
  { id: 3, nome: "Gabriel", situacao: "realizado"},
  { id: 4, nome: "Edu", situacao: "pendente"},
  { id: 5, nome: "Wanderson", situacao: "pendente"},
];

export const Home = () => {
  const [statusList, setStatusList] = useState("pendente");
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

      

    </Container>
  );
};
