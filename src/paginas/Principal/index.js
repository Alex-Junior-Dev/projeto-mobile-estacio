import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function Inventario(){
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    // Aqui você pode carregar os dados do inventário de um banco de dados ou arquivo local
    setProdutos([
      // Exemplo de produtos iniciais
      { nome: 'Produto A', quantidade: 10 },
      { nome: 'Produto B', quantidade: 5 }
    ]);
  }, []);

  const CadastrarProduto = () => {
    // Verifica se o produto já está cadastrado
    const produtoExistente = produtos.find((p) => p.nome === nomeProduto);

    if (produtoExistente) {
      // Atualiza a quantidade do produto existente
      const novosProdutos = produtos.map((p) => 
        p.nome === nomeProduto ? { ...p, quantidade: p.quantidade + parseInt(quantidade) } : p
      );
      setProdutos(novosProdutos);
    } else {
      // Adiciona um novo produto
      setProdutos([...produtos, { nome: nomeProduto, quantidade: parseInt(quantidade) }]);
    }

    setNomeProduto('');
    setQuantidade('');
  };

  const RemoverProduto = (produto) => {
    setProdutos(produtos.filter((p) => p.nome !== produto.nome));
  };

  const AlterarQuantidade = (produto, quantidade) => {
    const novosProdutos = produtos.map((p) => 
      p.nome === produto.nome ? { ...p, quantidade: p.quantidade + quantidade } : p
    ).filter(p => p.quantidade > 0); // Remove produtos com quantidade zero ou negativa
    setProdutos(novosProdutos);
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Cadastro de Produtos</Text>
        </View>

        <View style={styles.produtos}>            
            <TextInput 
              value={nomeProduto} 
              onChangeText={setNomeProduto} 
              placeholder="Nome do Produto" 
              style={styles.input}
            />
            <TextInput 
              value={quantidade} 
              onChangeText={setQuantidade} 
              placeholder="Quantidade" 
              keyboardType="numeric" 
              style={styles.input}
            />
            <Button title="Cadastrar" onPress={CadastrarProduto} />
        </View>

        <View style={styles.inventario}>
            <Text style={styles.textInventario}>Controle de Inventário</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.nome}
                renderItem={({ item }) => (
                  <View style={styles.produto}>
                      <Text style={styles.produtoText}>{item.nome} - {item.quantidade}</Text>
                      <View style={styles.botoes}>
                          <TouchableOpacity 
                            style={styles.botao} 
                            onPress={() => AlterarQuantidade(item, 1)}
                          >
                              <Text style={styles.botaoTexto}>+</Text>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            style={styles.botao} 
                            onPress={() => AlterarQuantidade(item, -1)}
                          >
                              <Text style={styles.botaoTexto}>-</Text>
                          </TouchableOpacity>
                          <TouchableOpacity 
                            style={styles.botaoRemover} 
                            onPress={() => RemoverProduto(item)}
                          >
                              <Text style={styles.botaoTextoRemover}>Remover</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                )}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    },
    header: {
        alignSelf: 'center',
    },
    textHeader: {
        fontSize: 30,
    },
    produtos: {
        paddingTop: 20,
    },
    inventario: {
        paddingTop: 60,
    },
    textInventario: {
        fontSize: 20,
        alignSelf: 'center'
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 5
    },
    produto: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
    },
    produtoText: {
        fontSize: 16,
    },
    botoes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#38a69d',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
    },
    botaoRemover: {
        backgroundColor: '#ff0000',
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 5,
    },
    botaoTexto: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    botaoTextoRemover: {
        color: '#FFF',
        fontWeight: 'bold',
    }
});
