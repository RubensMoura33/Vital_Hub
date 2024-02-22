// Import das tags nativas do react-native
import { Button, View } from "react-native";

// Componente Navigation que esta sendo exportado
export const Navigation = ({ navigation }) => {
    return(
    <>
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Button 
            title="Login"
            onPress={() => navigation.navigate("Login")}/>
        </View>
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Button 
            title="Profile"
            onPress={() => navigation.navigate("Profile")}/>
        </View>  
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Button 
            title="InsertMedicalRecord"
            onPress={() => navigation.navigate("InsertMedicalRecord")}/>
        </View>  
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Button 
            title="Home"
            onPress={() => navigation.navigate("Home")}/>
        </View>  
    </>

    );
} 
