import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onToggle }) {
  return (
    <View style={styles.container}>
      <Switch
        value={tarefa.concluida}
        onValueChange={() => onToggle(tarefa.id)}
        trackColor={{ false: '#FFB3C1', true: '#FF7994' }}
        thumbColor={tarefa.concluida ? '#B12843' : '#FFF4F6'}
      />
      <Text style={[styles.texto, tarefa.concluida && styles.textoConcluido]}>
        {tarefa.texto}
      </Text>
      <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
        <Text style={styles.remover}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4F6',
    borderRadius: 16,
    padding: 16,
    marginVertical: 6,
    gap: 12,
  },
  texto: {
    flex: 1,
    fontSize: 16,
    color: '#B12843',
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#FF7994',
  },
  remover: {
    fontSize: 18,
    color: '#FF7994',
    fontWeight: 'bold',
  },
});