import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { carrinho, remover } = useCarrinho();

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CARRINHO</Text>
      <View style={styles.divisor} />

      {carrinho.length === 0 ? (
        <View style={styles.vazioBox}>
          <Text style={styles.vazioEmoji}>🛒</Text>
          <Text style={styles.vazioTexto}>CARRINHO VAZIO</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={{ paddingBottom: 16 }}
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <View style={styles.cardEmoji}>
                  <Text style={styles.emoji}>{item.nome.split(' ')[0]}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.removerBtn} onPress={() => remover(index)}>
                  <Text style={styles.removerTexto}>✕</Text>
                </TouchableOpacity>
              </View>
            )}
          />

 
          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>TOTAL</Text>
            <Text style={styles.totalValor}>R$ {total.toFixed(2)}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    paddingTop: 54,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0A0A0A',
    letterSpacing: 4,
    marginBottom: 10,
  },
  divisor: {
    height: 4,
    backgroundColor: '#0A0A0A',
    marginBottom: 14,
  },
  vazioBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#0A0A0A',
    borderStyle: 'dashed',
    margin: 16,
    padding: 40,
    gap: 12,
  },
  vazioEmoji: { fontSize: 48 },
  vazioTexto: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0A0A0A',
    letterSpacing: 3,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#0A0A0A',
    backgroundColor: '#fff',
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#0A0A0A',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  cardEmoji: {
    width: 60,
    height: 60,
    backgroundColor: '#FFE600',
    borderRightWidth: 3,
    borderColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 28 },
  cardInfo: {
    flex: 1,
    padding: 10,
  },
  nome: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0A0A0A',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  preco: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0A0A0A',
    marginTop: 2,
  },
  removerBtn: {
    width: 48,
    height: 60,
    backgroundColor: '#FF2D2D',
    borderLeftWidth: 3,
    borderColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removerTexto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
  totalBox: {
    borderWidth: 3,
    borderColor: '#0A0A0A',
    backgroundColor: '#0A0A0A',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#0A0A0A',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  totalLabel: {
    color: '#FFE600',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 4,
  },
  totalValor: {
    color: '#FFE600',
    fontSize: 24,
    fontWeight: '900',
  },
});