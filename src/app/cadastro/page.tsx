import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";
 
export default function loginScreen(){
    return(
        <View style={styles.login}>
           <View>
             
                <Image style={styles.logoImage} source={require("@/assets/images/houio.jpg")}/>
           </View>
           <View>
           <View style={styles.containerBox}>
                <Text style={styles.campo}>E-mail</Text>
                <TextInput placeholder="Digite seu e-mail"></TextInput>
            </View>
            <View style={styles.containerBox}>
                <Text style={styles.campo}>CPF</Text>
                <TextInput placeholder="Digite seu CPF"></TextInput>
            </View>
            <View style={styles.containerBox} >
                <Text style={styles.campo}>Senha</Text>
                <TextInput placeholder="Digite sua senha" secureTextEntry></TextInput>
            </View>
            <View style={styles.containerBox}>
                <Text style={styles.campo}>Data de Nacimento</Text>
                <TextInput placeholder="DD/MM/AA"></TextInput>
            </View>
            <Link href={"/home/page"} asChild>
            <TouchableOpacity>
                <Text style={styles.enviar}>Cadastre-se</Text>
            </TouchableOpacity>
           
            </Link>
           
           </View>
        </View>
    )
}
 