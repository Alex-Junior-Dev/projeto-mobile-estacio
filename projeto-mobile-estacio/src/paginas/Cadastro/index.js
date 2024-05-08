import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


export default function Cadastro({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function identificarCadastro(){
        if(name && email && password !== '' && password === passwordConfirm){
            alert('Cadastro criado com sucesso')
            navigation.navigate('Login')
        }else {
            alert('Ops! algo errado')
        }
    }
    return(
        <View style={styles.Container}>
            <View>
                <Text style={styles.message}>Cadastre-se</Text>
            </View>
            <View style={styles.containerForm} >
                <TextInput style={styles.inputUserName} placeholder='Nome'
                autoCompleteType='username' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setName(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Email'
                autoCompleteType='email' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setEmail(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Senha'
                autoCompleteType='password' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setPassword(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Confirmar senha'
                autoCompleteType='password' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setPasswordConfirm(event)}
                 />
                <TouchableOpacity style={styles.buttonForm}
                onPress={identificarCadastro} >
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: "yellow",
        marginBottom: '8%',
        marginTop: '14%',
        alignSelf: 'center'
            
    },
    containerForm: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputUserName: {
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,        
    },
    inputForm: {
        borderBottomWidth: 1,
        borderTopColor: '#000000',
        backgroundColor: '#FFF',
        marginTop: 13,
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,
    },
    buttonForm: {
        backgroundColor: '#38a69d',
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold'
    },
})