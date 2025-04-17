import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
    produto: {
        flex: 1,
        backgroundColor: "#ffff",
        color: "black",
    },
    header: {
        padding:2
    },
    headerImage: {
        width: "100%",
        height: 260,
        borderRadius: 8,
       
    },
    produtoname:{
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 16,
    },
    subtitle:{
        color: "black",
        marginTop: 4,
        fontSize: 20,
        fontWeight: "bold",
        
    },
    descricao:{
        marginTop: 28,
        fontSize:24,
        fontWeight: "bold",
    },
    descricaosubs:{
        marginTop: 4,
        fontSize:16,
    }
 
});