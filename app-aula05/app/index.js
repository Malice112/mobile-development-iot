import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>MA</Text>
      </View>

      <Text style={styles.titulo}>Maria Alice Freitas</Text>
      <Text style={styles.subtitulo}>Desenvolvedor Full Stack</Text>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => router.push('/sobre')}
        activeOpacity={0.7}
      >
        <Text style={styles.botaoTexto}>Ver meu perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#000000' 
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1A237E', 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#3949AB', 
    marginBottom: 20,
  },
  avatarTexto: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  titulo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#FFFFFF',
    marginBottom: 8 
  },
  subtitulo: {
    fontSize: 16,
    color: '#9E9E9E', 
    marginBottom: 40,
  },
  botao: { 
    backgroundColor: '#1A237E',
    paddingVertical: 14,
    paddingHorizontal: 32, 
    borderRadius: 30, 
    elevation: 5,   
    shadowColor: '#1A237E', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  botaoTexto: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '700',
    letterSpacing: 0.5
  },
});