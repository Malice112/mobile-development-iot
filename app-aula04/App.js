import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
export default function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Beba Àgua');

  useEffect(() => {
    if(count === 0) {
      setMsg('Beba seu primeiro copo! 💧');
    } else if (count > 0 && count < 8){
      setMsg(`Você já bebeu ${count} ${count === 1 ? 'copo' : 'copos'}!`);
    } else if (count === 8) { 
      setMsg("Meta do dia atingida!!");
    } else {
      setMsg("Uau! Você está super hidratado!!");
    }
  }, [count]);

  return(
    <View style = {styles.container}>
      <Text style = {styles.titulo}> Contador de Água</Text>

      <Text style = {styles.msg}>{msg}</Text>

      <Image 
        style={styles.iconCopo} 
        source={require("./assets/icons8-copo-de-água-64 (1).png")} 
      />
      
      <Text style = {styles.contador}>{count}</Text>

      <View style = {styles.coluna}>
        <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnTexto}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btn, styles.btnReset]} 
          onPress={() => setCount(0)}>
          <Text style={styles.btnTexto}>↻</Text>
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
    backgroundColor: '#000',
    padding: 20,
  },  

  titulo: {
    color: '#fff',
    marginBottom: 40,
    fontSize: 28,
    fontWeight: 'bold',
  },
  iconCopo: {
    width: 150,
    height: 150,
    tintColor: '#6c63ff',
  },
  msg: { 
    color: '#6c63ff', 
    fontSize: 22, 
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '500'
  },
  contador: { 
    color: '#fff', 
    fontSize: 60, 
    fontWeight: 'bold', 
    marginTop: 10,
  },
  coluna: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 30
  },
  btn: { 
    backgroundColor: '#6c63ff', 
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  btnReset: {
    backgroundColor: '#333',
  },
  btnTexto: { 
    color: '#fff', 
    fontSize: 30, 
    fontWeight: 'bold' 
  },
})