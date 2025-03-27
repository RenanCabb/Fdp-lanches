import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./style";


export default function index(){
  const MENU = [
    {
      id:1,
      name:"X depressão pós amor falso",
      description:"Chei de dor e sofrimento e mentira",
      price:20.00,
      image: require("@/assets/images/biglanches.jpg")
    },
    {
      id:2,
      name:"X amor de internet",
      description:"Ela te enganou né but",
      price:20.00,
      image: require("@/assets/images/quiytu.jpg")
    },
    {
      id:3,
      name:"X ela partiu",
      description:"Ela fez seu gosto musical evoluir",
      price:20.00,
      image: require("@/assets/images/lancheira.jpg")
    }
  ]
    return(
        <View style ={styles.container}>
            <View style= {styles.header}>
            <Image
            style={styles.headerImage}
            source={require("@/assets/images/olap.jpg")}
            />
            <Text style={styles.restauranteName}>/FDP-lanches</Text>
            <Text style={styles.subtitle}> PAra cair na real </Text>
            </View>

             <View>
              {["combos", "Lanches", "Fritas", "Bebidas"].map ((item) => (
                <TouchableOpacity>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
             </View>
             
             <ScrollView style={styles.menuItem}>

             {
              MENU.map((item)=> (
                <TouchableOpacity style={styles.menuItem}>
                  <View style={styles.menuContent}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                  </View>
                  <Image  style={styles.itemImage}source={item.image}/>
                </TouchableOpacity>
              ))
             }
             </ScrollView>
        </View>
     
    )
}
