import { useState, useEffect } from 'react';
import {
  View, Text, TextInput, FlatList,
  StyleSheet, TouchableOpacity, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('tarefas');
    if (dados) setTarefas(JSON.parse(dados));
  };

  const salvarTarefas = async (lista) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
  };

  const adicionarTarefa = () => {
    if (!texto.trim()) return;
    const nova = { id: Date.now().toString(), texto, concluida: false };
    const novaLista = [...tarefas, nova];
    setTarefas(novaLista);
    salvarTarefas(novaLista);
    setTexto('');
  };

  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const toggleConcluida = (id) => {
    const novaLista = tarefas.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };

  const limparTudo = () => {
    Alert.alert(
      'Limpar tudo',
      'Tem certeza que quer remover todas as tarefas?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: async () => {
            setTarefas([]);
            await AsyncStorage.removeItem('tarefas');
          },
        },
      ]
    );
  };

  const pendentes = tarefas.filter((t) => !t.concluida).length;

  return (
    <View style={styles.container}>
    
      <Text style={styles.contador}>
        Tarefas pendentes:{'\n'}
        <Text style={styles.contadorNumero}>{pendentes}</Text>
      </Text>

      
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova tarefa..."
        placeholderTextColor="#FFB3C1"
        style={styles.input}
      />

     
      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
        <Text style={styles.botaoAdicionarTexto}>+</Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            onRemover={removerTarefa}
            onToggle={toggleConcluida}
          />
        )}
        style={styles.lista}
      />

       
      {tarefas.length > 0 && (
        <TouchableOpacity style={styles.botaoLimpar} onPress={limparTudo}>
          <Text style={styles.botaoLimparTexto}>🗑️ Limpar tudo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD2DB',
    padding: 32,
    paddingTop: 70,
  },
  contador: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B12843',
    textAlign: 'center',
    marginBottom: 20,
  },
  contadorNumero: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B12843',
  },
  input: {
    backgroundColor: '#FFF4F6',
    borderRadius: 16,
    padding: 14,
    fontSize: 16,
    color: '#B12843',
    marginBottom: 12,
  },
  botaoAdicionar: {
    backgroundColor: '#FF7994',
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  botaoAdicionarTexto: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  lista: {
    flex: 1,
  },
  botaoLimpar: {
    backgroundColor: '#FF7994',
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoLimparTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});