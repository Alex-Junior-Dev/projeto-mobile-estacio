import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Login(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </View>
        
        <View style={styles.containerForm}>
            <Text>Email</Text>
            <TextInput
            placeholder="Informe seu email"
            style={styles.input}
            />
            <Text>Senha</Text>
            <TextInput
                placeholder="Informe sua senha"
                style={styles.input}
            />

            <TouchableOpacity style={styles.buttonLogon}
                onPress={() => navigation.navigate("Principal")}
            >
                <Text style={styles.buttonTextLogon}>Logar-se</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegistrar}
                onPress={ () => navigation.navigate("Cadastro")}

            >
                
                <Text style={styles.buttonTextRegistrar}>Não possui conta? Registre-se</Text>
            </TouchableOpacity>

        </View>






        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "red",
    },
    containerForm:{
        flex:1,
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: "yellow",
        marginBottom: '8%',
        marginTop: '14%',
        alignSelf: 'center'
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonLogon:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextLogon:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegistrar:{
        marginTop: 14,
        alignSelf: 'center'
    },
    buttonTextRegistrar:{
        color: '#a1a1a1'
    }

})