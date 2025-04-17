import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Link } from "expo-router";
 
export default function ProductScreen(){
    return(
    <ScrollView>
        <View style={styles.produto}>
        <View style={styles.header}>
 <
  Image
          style={styles.headerImage}
          source={require("@/assets/images/recabe.webp")}
        />
        <Text style={styles.produtoname}>Lanches a partir de</Text>
                <Text style={styles.subtitle}> R$32.70  </Text>
              </View>
               <Text style={styles.descricao}>Sobre</Text>
                <Text style={styles.descricaosubs}>Todos feitos com amor para que o seu dia melhore
                </Text>
 
                    <Text style={styles.descricao}>MENU</Text>
               <Text style={styles.descricao}>Lanches</Text>
<Text style={styles.descricaosubs}>
  • X-boy{"\n"}
  • X-salada{"\n"}
  • X-Mega{"\n"}
  • X-chedar{"\n"}
  • X-frango{"\n"}
  • X-costela{"\n"}
  • X-Linguiça{"\n"}
</Text>
 
<Text style={styles.descricao}>Acompanhamentos</Text>
<Text style={styles.descricaosubs}>
  • Batata{"\n"}
  • Salada{"\n"}
  • Vinagrete{"\n"}
  • Maionese{"\n"}
  • Ketchup{"\n"}
  • Mostarda{"\n"}
  • Barbkill{"\n"}
</Text>
 
        </View>
</ScrollView>  
       
       
       
    )
}