import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';

export default function ProdutosScreen({ onIrCarrinho }) {
  const { adicionar, carrinho } = useCarrinho();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Produtos</Text>
        <TouchableOpacity style={styles.carrinhoIcone} onPress={onIrCarrinho}>
          <Text style={styles.carrinhoEmoji}>🛒</Text>
          {carrinho.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeTexto}>{carrinho.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardImagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => adicionar(item)}>
              <Text style={styles.botaoTexto}>🛒  ADICIONAR AO CARRINHO</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 50 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titulo: { fontSize: 22, fontWeight: 'bold', textDecorationLine: 'underline' },
  carrinhoIcone: { position: 'relative', padding: 8 },
  carrinhoEmoji: { fontSize: 28 },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#9C27B0',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  cardImagem: {
    backgroundColor: '#9C27B0',
    height: 120,
    width: '100%',
  },
  nome: { fontSize: 16, fontWeight: '600', paddingHorizontal: 12, paddingTop: 8 },
  preco: { fontSize: 14, color: '#555', paddingHorizontal: 12, paddingBottom: 8 },
  botao: {
    backgroundColor: '#9C27B0',
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
});