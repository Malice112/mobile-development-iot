import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Ionicons name="school-outline" size={40} color="#3949AB" />
      <Text style={styles.titulo}>Engenharia de Software</Text>
      <Text style={styles.turma}>Turma: ESPG</Text>

      <View style={styles.divisor} />

      <Text style={styles.subtitulo}>Tecnologias Favoritas</Text>

      
      <View style={styles.techContainer}>
        <View style={styles.card}>
          <Ionicons name="logo-react" size={24} color="#fff" />
          <Text style={styles.cardTexto}>React</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="logo-nodejs" size={24} color="#fff" />
          <Text style={styles.cardTexto}>Node</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="logo-python" size={24} color="#fff" />
          <Text style={styles.cardTexto}>Python</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.voltarTexto}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#000', 
    padding: 20 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FFF', 
    marginTop: 10 
  },
  turma: { 
    fontSize: 18, 
    color: '#3949AB', 
    fontWeight: '600',
    marginBottom: 20 
  },
  divisor: {
    width: '80%',
    height: 1,
    backgroundColor: '#1A237E',
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: 16,
    color: '#9E9E9E',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  techContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#1A237E',
    flex: 1,               
    marginHorizontal: 5,   
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  cardTexto: {
    color: '#fff',
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },

  botaoVoltar: {
    borderBottomWidth: 1,
    borderBottomColor: '#3949AB',
    paddingBottom: 2,
  },
  voltarTexto: { 
    fontSize: 16, 
    color: '#3949AB', 
    fontWeight: '600' 
  },
});