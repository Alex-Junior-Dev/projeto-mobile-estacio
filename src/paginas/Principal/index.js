import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function Inventario(){
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    // Aqui você pode carregar os dados do inventário de um banco de dados ou arquivo local
    setProdutos([

    ]);
  }, []);

  const CadastrarProduto = () => {
    // Aqui você pode salvar os dados do cadastro em um banco de dados ou arquivo local
    setProdutos([...produtos, { nome: nomeProduto, quantidade: quantidade }]);
    setNomeProduto('');
    setQuantidade('');
  };

  const RemoverProduto = (produto) => {
    // Aqui você pode remover o produto do inventário
    setProdutos(produtos.filter((p) => p.nome !== produto.nome));
  };

  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.textHeader}>Cadastro de Produtos</Text>
        </View>

        <View style={styles.produtos}>            
            <TextInput value={nomeProduto} onChangeText={setNomeProduto} placeholder="Nome do Produto" />
            <TextInput value={quantidade} onChangeText={setQuantidade} placeholder="Quantidade" />
            <Button title="Cadastrar" onPress={CadastrarProduto} />
        </View>

        <View style={styles.Inventario}>
            <Text style={styles.textInventario}>Controle de Inventário</Text>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                <View>
                    <Text>{item.nome}</Text>
                    <Text>{item.quantidade}</Text>
                    <Button title="Remover" onPress={() => RemoverProduto(item)} />
                </View>
                )}
            />
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    header:{
        alignSelf: 'center',
    },
    textHeader:{
        fontSize: 30,
    },
    produtos:{
        paddingTop: 20,
    },
    Inventario:{
        paddingTop: 60,
    },
    textInventario:{
        fontSize: 20,
        alignSelf: 'center'
    }
})