import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Maria Alice Freitas",
    curso:"Engenharia de Sotfware \n 5º Período",
    frase:"Nunca me desmotivarei pelo fracasso",
    avatar: "https://pbs.twimg.com/profile_images/1608330004613533696/uHQsgUU6_400x400.jpg",
    linkedin:"https://www.linkedin.com/in/maria-alice-freitas-ara%C3%BAjo-4b38322b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github:"https://github.com/Malice112",
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* curso */}
      <Text style={styles.curso}>{usuario.curso}</Text>
      {/* frase */}
      <View style={styles.frasebox}>
        <Text style={styles.frase}>{usuario.frase}</Text>
      </View>
      <View style={styles.links}>
        <TouchableOpacity style={styles.linkedin}>{usuario.linkedin}

        </TouchableOpacity>
        <TouchableOpacity style={styles.github}>{usuario.github}</TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#15855C',
    padding: 20,
    
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#063022',
    marginBottom: 16,
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  curso: {
    fontSize: 20,
    color: '#041A13',
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  frase: {
    fontSize:18,
    color: '#fff',
    padding:8,
    backgroundColor:'#063022',
    borderRadius: 20,
  },
  links: {
    backgroundColor:'#fff'
  }

});