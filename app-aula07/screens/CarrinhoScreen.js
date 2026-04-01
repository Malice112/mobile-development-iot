import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { carrinho, remover } = useCarrinho();

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>
      <View style={styles.divisor} />

      {carrinho.length === 0 ? (
        <Text style={styles.vazio}>🛒 Seu carrinho está vazio!</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <View style={styles.cardInfo}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={() => remover(index)}>
                  <Text style={styles.remover}>✕</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.divisor} />
          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 50 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  divisor: { borderBottomWidth: 1, borderBottomColor: '#ddd', marginBottom: 12 },
  vazio: { fontSize: 16, color: '#999', textAlign: 'center', marginTop: 40 },
  card: {
    backgroundColor: '#9C27B0',
    borderRadius: 10,
    padding: 14,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfo: { flex: 1 },
  nome: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  preco: { color: '#e8c9f5', fontSize: 13, marginTop: 2 },
  remover: { color: '#fff', fontSize: 20, fontWeight: 'bold', paddingLeft: 12 },
  total: { textAlign: 'right', fontSize: 18, fontWeight: 'bold', marginTop: 8 },
});