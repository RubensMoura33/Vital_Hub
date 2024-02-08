import { useState } from "react";
import { BoxInput } from "../../components/BoxInput/Index";
import { Button, ButtonTitle } from "../../components/Button/Style";
import {
  Container,
  ContainerEdit,
  ContainerProfile,
  RowView,
  ViewTitle,
} from "../../components/Container/Style";
import { ProfileImage } from "../../components/Images/Style";
import { SubTitle } from "../../components/SubTitle/Style";
import { ProfileTitle } from "../../components/Title/Style";

export const Profile = ({ navigation }) => {
  const [profileEdit, setProfileEdit] = useState(false);

  return (
    <ContainerProfile>
      {!profileEdit ? (
        <>
          <ProfileImage source={require("../../assets/img/Profile.jpg")} />

          <Container>
            <ProfileTitle>Richard Kosta</ProfileTitle>

            <SubTitle>richard.kosta@gmail.com</SubTitle>

            <BoxInput
              textLabel="Data de nascimento:"
              placeholder="04/05/1999"
              editable={false}
            />

            <BoxInput
              textLabel="Data de nascimento:"
              placeholder="04/05/1999"
              editable={false}
            />

            <BoxInput
              textLabel="CPF"
              placeholder="859********"
              editable={false}
            />

            <RowView>
              <BoxInput
                fieldWidth={40}
                textLabel="CEP"
                placeholder="06548-909"
                editable={false}
              />

              <BoxInput
                fieldWidth={40}
                textLabel="Cidade"
                placeholder="Moema-SP"
                editable={false}
              />
            </RowView>

            <Button>
              <ButtonTitle>SALVAR</ButtonTitle>
            </Button>

            <Button onPress={() => setProfileEdit(true)}>
              <ButtonTitle>EDITAR</ButtonTitle>
            </Button>
          </Container>
        </>
      ) : (
        <>
          <ProfileImage source={require("../../assets/img/Profile.jpg")} />
          <ViewTitle>
            <ProfileTitle>Richard Kosta</ProfileTitle>
            <SubTitle>richard.kosta@gmail.com</SubTitle>
          </ViewTitle>
          <ContainerEdit>
            <BoxInput
              textLabel="Data de nascimento:"
              placeholder="04/05/1999"
              editable={true}
            />

            <BoxInput
              textLabel="Data de nascimento:"
              placeholder="04/05/1999"
              editable={true}
            />

            <BoxInput
              textLabel="CPF"
              placeholder="859********"
              editable={true}
            />

            <RowView>
              <BoxInput
                fieldWidth={40}
                textLabel="CEP"
                placeholder="06548-909"
                editable={true}
              />

              <BoxInput
                fieldWidth={40}
                textLabel="Cidade"
                placeholder="Moema-SP"
                editable={true}
              />
            </RowView>

            <Button onPress={() => setProfileEdit(false)}>
              <ButtonTitle>SALVAR</ButtonTitle>
            </Button>
          </ContainerEdit>
        </>
      )}
    </ContainerProfile>
  );
};
