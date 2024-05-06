import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {StatusBar, SafeAreaView} from 'react-native'
/*import { NavigationContainer } from "react-navigation/native"
import { createStackNavigator } from "react-navigation/stack"
import { createBottomTabNavigator } from "react-navigation/bottom-tabs"
import { createDrawerNavigator } from "react-navigation/drawer"*/

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
    <StatusBar/>
    <View style={styles.quadradoA}>
        <Text style={styles.mainName}>Brilhante Baterias</Text>
    </View>
    <View style={styles.quadradoB}>
      <Text style={styles.logonName}>Login</Text>
    </View>
    <View style={styles.quadradoC}></View>
  </SafeAreaView>
    /*<View style={styles.container}>
      <View>
        <Text style={styles.mainName}>Brilhante Baterias</Text>
      </View>
      <Image
        source={require("./src/assets/baterias.jpg")}
        style={styles.logo}
      />
    </View>*/
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  quadradoA: {
    backgroundColor: "red",
    height: 220
  },
  quadradoB: {
    backgroundColor: "red",
    height: 220
  },
  quadradoC: {
    backgroundColor: "red",
    height: 220
  },
  mainName:{

    marginTop: 15,
    textAlign: "center",
    justifyContent: "center",
    color: "yellow",
    fontSize: 30
  },
  logonName:{
    textAlign: 'center',
    fontSize: 30
  }
/*logo:{

    label: "flexDirection",
    marginTop: 500,
    width: 50, 
    height: 50,
    alignContent: "center" 
  }*/

})


