import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Principal(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Baterias</Text>


            <View style={styles.containerForm}>
                <Text>bateria</Text>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 20
    },
    containerForm:{
        marginTop: '30%',
        backgroundColor: '#FFF',
    }
})

