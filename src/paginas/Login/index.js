import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Verificar se existe um usuário logado no AsyncStorage
        async function checkUserLoggedIn() {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData !== null) {
                    // Se existir, navegue para a próxima página
                    navigation.navigate('Principal');
                }
            } catch (error) {
                console.error('Erro ao verificar usuário logado:', error);
            }
        }
        checkUserLoggedIn();

        // Função de limpeza para deslogar o usuário quando o componente for desmontado
        return async () => {
            try {
                await AsyncStorage.removeItem('userData');
            } catch (error) {
                console.error('Erro ao limpar dados do usuário:', error);
            }
        };
    }, []);

    async function identificarLogin() {
        if (email && password !== '') {
            try {
                // Obter os dados salvos do usuário no AsyncStorage
                const userData = await AsyncStorage.getItem('userData');
                if (userData !== null) {
                    // Parse dos dados do usuário
                    const { savedEmail, savedPassword } = JSON.parse(userData);
                    // Verificar se o email e a senha coincidem
                    if (email === savedEmail && password === savedPassword) {
                        navigation.navigate('Principal');
                    } else {
                        alert('Email ou senha incorretos.');
                    }
                } else {
                    alert('Nenhum usuário cadastrado.');
                }
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
                alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
            }
        } else {
            alert('Informe corretamente o email e a senha para logar-se!');
        }
    }

    return (
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
                    secureTextEntry={true} // Oculta a senha digitada
                    style={styles.input}
                    onChangeText={(event) => setPassword(event)}
                />
                <TouchableOpacity style={styles.buttonLogon} onPress={identificarLogin}>
                    <Text style={styles.buttonTextLogon}>Logar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegistrar} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.buttonTextRegistrar}>Não possui conta? Registre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "yellow",
        marginBottom: '8%',
        marginTop: '14%',
        alignSelf: 'center'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    buttonLogon: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextLogon: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegistrar: {
        marginTop: 14,
        alignSelf: 'center'
    },
    buttonTextRegistrar: {
        color: '#a1a1a1'
    }
});
