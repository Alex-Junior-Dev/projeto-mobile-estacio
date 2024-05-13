import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";

export default function Login(){
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function identificarLogin(){
        if(email && password !== ''){
            navigation.navigate('Principal')
        }else {
            alert('Informe corretamente o email e a senha para logar-se!')
        }
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </View>
        
        <View style={styles.containerForm}>
            <Text>Email</Text>
            <TextInput
            autoCompleteType='email' 
            autoCapitalize='none' 
            autoCorrect={false}
            placeholder="Informe seu email"
            style={styles.input}
            onChangeText={(event) => setEmail(event)}
            />

            <Text>Senha</Text>
            <TextInput
                placeholder="Informe sua senha"
                autoCompleteType='password' 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                onChangeText={(event) => setPassword(event)}
            />

            <TouchableOpacity style={styles.buttonLogon}
                onPress={identificarLogin}
                //onPress={() => navigation.navigate("Principal")}
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