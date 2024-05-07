import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function BoasVindas(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.name}>Brilhante Baterias</Text>
            </View>



            <View style={styles.containerForm}>
  
                <Text style={styles.title}>Controle seu estoque facilmente com nossa aplicação.</Text> 
                
                <Text style={styles.text}>Faça seu cadastro para começar.</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate("Registro")}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.containerLogo}>
                <Image
                source={require('../../assets/baterias.jpg')}
                style={{width: '50%'}}
                resizeMode="contain"
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red'
    },
    containerLogo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    containerForm:{
        flex:1,
        paddingTop: '50%',
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'center'
    },
    name:{
        textShadowColor: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center',
        color:'yellow'
    },
    button:{
        position: 'absolute',   
        backgroundColor:'#000',
        borderRadius: 50,
        width: '40%',
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8

    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    Text:{
        alignSelf: 'center'
    }
})