import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';

export default function ProdutosScreen({ onIrCarrinho }) {
  const { adicionar, carrinho } = useCarrinho();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>PRODUTOS</Text>
        <TouchableOpacity style={styles.carrinhoBtn} onPress={onIrCarrinho}>
          <Text style={styles.carrinhoBtnTexto}>🛒</Text>
          {carrinho.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeTexto}>{carrinho.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.divisor} />

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardImagem}>
              <Text style={styles.cardImagemEmoji}>{item.nome.split(' ')[0]}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
              <TouchableOpacity style={styles.botao} onPress={() => adicionar(item)}>
                <Text style={styles.botaoTexto}>+ CARRINHO</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0A0A0A',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  carrinhoBtn: {
    borderWidth: 3,
    borderColor: '#0A0A0A',
    backgroundColor: '#FFE600',
    padding: 8,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carrinhoBtnTexto: {
    fontSize: 20,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#FF2D2D',
    borderWidth: 2,
    borderColor: '#0A0A0A',
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTexto: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '900',
  },
  divisor: {
    height: 4,
    backgroundColor: '#0A0A0A',
    marginBottom: 14,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#0A0A0A',
    backgroundColor: '#fff',
    marginBottom: 12,

    shadowColor: '#0A0A0A',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  cardImagem: {
    width: 90,
    backgroundColor: '#FFE600',
    borderRightWidth: 3,
    borderColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImagemEmoji: {
    fontSize: 36,
  },
  cardBody: {
    flex: 1,
    padding: 12,
    gap: 4,
  },
  nome: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0A0A0A',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  preco: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0A0A0A',
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#0A0A0A',
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0A0A0A',
  },
  botaoTexto: {
    color: '#FFE600',
    fontWeight: '900',
    fontSize: 13,
    letterSpacing: 2,
  },
});