import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";
 
export default function index() {
  const MENU =[
    {
      id:1,
      name:"Lanches",
      description:"Diversos sabores",
      price: 32.70,
      Image: require ("@/assets/images/bruxa.webp")
    },
    {
    id:2,
    name:"combos",
    description:"Monte seu kit",
    price: 15.90,
    Image: require ("@/assets/images/bruxa.webp")
    },
    {
    id:3,
    name:"bebidas",
    description:"sucos, refrigerantes",
    price: 7.80,
    Image: require ("@/assets/images/sucuz.jpg")
    },
   
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("@/assets/images/bruxa.webp")}
        />
        <Text style={styles.restauranteName}>Steak</Text>
        <Text style={styles.subtitle}> A melhor churrascaria do brasil </Text>
      </View>
 
      <View style = {styles.tabs}>
        {["Rodizio", "Espetos","porções", "Bebidas"].map((item) =>(
          <TouchableOpacity>
            <Text style={styles.tabsName}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style= {styles.menuList}>
 
 
      {
        MENU.map((item)=> (
          <Link href={"/produto/page"} asChild>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
            <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
            </View>
            <Image  style= {styles.itemImage} source ={item.Image}/>
          </TouchableOpacity>
          </Link>
        ))
      }
          </ScrollView>
    </View>
  );
}
 
 
 
 