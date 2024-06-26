import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BoasVindas() {
    const navigation = useNavigation();

    useEffect(() => {
        solicitarAutenticacaoBiometrica();
    }, []);

    async function solicitarAutenticacaoBiometrica() {
        try {
            const isBiometricSupported = await LocalAuthentication.hasHardwareAsync();
            if (isBiometricSupported) {
                const biometricRecords = await LocalAuthentication.isEnrolledAsync();
                if (biometricRecords) {
                    const resultadoAutenticacao = await LocalAuthentication.authenticateAsync({
                        promptMessage: 'Autenticação biométrica necessária para acessar.',
                    });
                    if (resultadoAutenticacao.success) {
                        // Autenticação biométrica bem-sucedida
                        console.log('Autenticação biométrica bem-sucedida.');
                    } else {
                        // Autenticação biométrica falhou
                        console.log('Autenticação biométrica falhou:', resultadoAutenticacao.error);
                    }
                } else {
                    console.log('Não há registros biométricos configurados.');
                }
            } else {
                console.log('Autenticação biométrica não suportada neste dispositivo.');
            }
        } catch (error) {
            console.error('Erro ao solicitar autenticação biométrica:', error);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>Brilhante Baterias</Text>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>Controle seu estoque facilmente com nossa aplicação.</Text>
                <Text style={styles.text}>Faça seu cadastro para começar.</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/bateriasauto.png')}
                    style={{ width: '50%' }}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    containerForm: {
        flex: 1,
        paddingTop: '50%',
        paddingStart: '5%',
        paddingEnd: '5%',
        alignItems: 'center'
    },
    name: {
        textShadowColor: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center',
        color: 'yellow'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        width: '40%',
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    text: {
        alignSelf: 'center'
    }
});
