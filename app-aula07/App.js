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


      <View style={styles.navbar}>
        <TouchableOpacity
          style={[styles.botao, telaAtual === 'produtos' && styles.botaoAtivo]}
          onPress={() => setTelaAtual('produtos')}
        >
          <Text style={[styles.botaoTexto, telaAtual === 'produtos' && styles.botaoTextoAtivo]}>
            🛍️ PRODUTOS
          </Text>
        </TouchableOpacity>

        <View style={styles.navDivisor} />

        <TouchableOpacity
          style={[styles.botao, telaAtual === 'carrinho' && styles.botaoAtivo]}
          onPress={() => setTelaAtual('carrinho')}
        >
          <Text style={[styles.botaoTexto, telaAtual === 'carrinho' && styles.botaoTextoAtivo]}>
            🛒 CARRINHO
          </Text>
        </TouchableOpacity>
      </View>
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#FFE600',
    borderTopWidth: 4,
    borderTopColor: '#0A0A0A',
  },
  botao: {
    flex: 1,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoAtivo: {
    backgroundColor: '#0A0A0A',
  },
  botaoTexto: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0A0A0A',
    letterSpacing: 2,
  },
  botaoTextoAtivo: {
    color: '#FFE600',
  },
  navDivisor: {
    width: 4,
    backgroundColor: '#0A0A0A',
  },
});