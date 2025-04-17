import { StyleSheet } from "react-native";
 
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";
 
export const styles = StyleSheet.create({
    login: {
        borderBottomWidth: 1,
        backgroundColor: "#937460",
        flex: 1,
        alignItems: "center",
    },
 
    containerBox: {
        borderBottomWidth: 1,
        marginTop: 50,
        width: 400,
        borderBottomColor: "black",
    },
 
    campo: {
        fontSize: 20,
    },
 
    logoImage: {
        width: 174,
        height: 200,
        borderRadius: 8,
    },
 
    enviar: {
        marginTop: 20,
        fontSize: 20,
        backgroundColor:"#EBAD27",
        paddingVertical: 10,      
        paddingHorizontal: 20,    
        borderRadius: 8,          
        textAlign: "center",      
        color: "black",          
     
    },
 
    crieSuaConta: {
        marginTop: 15,
        fontSize: 18,
        color: "#black",
        textAlign: "center",
       
    },
});