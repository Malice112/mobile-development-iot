import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('produtos');

  return (
    <CarrinhoProvider>
      <View style={styles.container}>
        {telaAtual === 'produtos'
          ? <ProdutosScreen onIrCarrinho={() => setTelaAtual('carrinho')} />
          : <CarrinhoScreen />}
      </View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.botao, telaAtual === 'produtos' && styles.botaoAtivo]}
          onPress={() => setTelaAtual('produtos')}
        >
          <Text style={styles.botaoTexto}>🛍️ Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, telaAtual === 'carrinho' && styles.botaoAtivo]}
          onPress={() => setTelaAtual('carrinho')}
        >
          <Text style={styles.botaoTexto}>🛒 Carrinho</Text>
        </TouchableOpacity>
      </View>
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#9C27B0',
    paddingVertical: 14,
  },
  botao: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  botaoAtivo: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});