import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Maria Alice Freitas",
    curso:"Engenharia de Sotfware",
    periodo: "5º Período",
    frase:"Nunca me desmotivarei pelo fracasso",
    avatar: "https://pbs.twimg.com/profile_images/1608330004613533696/uHQsgUU6_400x400.jpg",
    linkedin:"https://www.linkedin.com/in/maria-alice-freitas-ara%C3%BAjo-4b38322b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github:"https://github.com/Malice112",
  };
  return (
    <View style={styles.container}>
      {/* Perfil */}
      <Image source={{ uri: usuario.avatar }} style={styles.avatar} />
      
      <Text style={styles.nome}>{usuario.nome}</Text>
      
      <View style={styles.cursoBadge}>
        <Text style={styles.cursoTexto}>{usuario.curso}</Text>
        <Text style={styles.periodoTexto}>{usuario.periodo}</Text>
      </View>

      {/* Frase */}
      <View style={styles.fraseBox}>
        <Text style={styles.frase}>{usuario.frase}</Text>
      </View>

      {/* Links */}
      <View style={styles.linksContainer}>
        <TouchableOpacity 
          style={[styles.botao, { backgroundColor: '#0077B5' }]} 
          onPress={() => abrirLink(usuario.linkedin)}
        >
          <Text style={styles.textoBotao}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.botao, { backgroundColor: '#333' }]} 
          onPress={() => abrirLink(usuario.github)}
        >
          <Text style={styles.textoBotao}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f0f0f',
    padding: 30,
    
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#F2668B',
    marginBottom: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  
  cursoBadge: {
    alignItems: 'center',
    marginBottom: 20,
  },
  
  cursoTexto: {
    fontSize: 18,
    color: '#F2668B',
    fontWeight: '600',
  },

  periodoTexto: {
    fontSize: 14,
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  curso: {
    fontSize: 20,
    color: '#041A13',
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  fraseBox: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#F2668B',
    backgroundColor: '#1a1a1a',
    marginVertical: 20,
    fontStyle: 'italic',
  },
  frase: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  },
  linksContainer: {
    width: '90%',
    gap: 12, 
    marginTop: 10,
  },
  botao: {
    width: '100%',
    padding: 13,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});