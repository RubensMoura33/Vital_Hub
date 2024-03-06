import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { ContentIcon, TextIcon } from "./Style";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#ffffff", height: 80, paddingTop: 10 },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
              >
                <FontAwesome name="calendar" size={18} color="#4E4B59" />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else {
            return (
                <ContentIcon>
                  <FontAwesome name="user" size={18} color="#4E4B59" />
                  {focused && <TextIcon>Perfil</TextIcon>}
                </ContentIcon>
              );
          }
        },
      })}
    >
      {/* Criar a rota da home */}
      <BottomTab.Screen name="Home" component={Home} />

      {/* Criar a do perfil */}
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};
