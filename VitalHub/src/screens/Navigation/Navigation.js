// Import das tags nativas do react-native
import { Button, View } from "react-native";

// Componente Navigation que esta sendo exportado
export const Navigation = ({ navigation }) => {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Button 
            title="Login"
            onPress={() => navigation.navigate("Login")}/>
        </View>

    );
} 
