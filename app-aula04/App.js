import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Beba Àgua');
  useEffect(() => {

    if (count === 8) setMsg('Meta do dia atingida!');

  }, [count]);
  return (


    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Copos de Àgua</Text>

      
      <Text style={styles.msg}>{msg}</Text>
      <Image style={styles.iconCopo} source= {require("./assets/icons8-copo-de-água-64 (1).png")}></Image>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
 
  container: { 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#000' 
  },

  titulo:{
    color:'#fff',
    marginBottom:40,
    fontSize:25
  },

  iconCopo: {
    width: 150,
    height: 150,
  },

  msg:       { 
    color: '#aaa', 
    fontSize: 25, 
    marginBottom: 12 
  },
  counter:   { 
    color: '#fff', 
    fontSize: 40, 
    fontWeight: 'bold', 
    marginTop:20,
  },
  btn:       { 
    marginTop: 24, 
    backgroundColor: '#6c63ff', 
    paddingHorizontal: 25, 
    paddingVertical: 16, 
    borderRadius: 50 
  },
  btnText:   { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
});