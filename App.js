import React , { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      alert('Você está abaixo do peso! ' + imc.toFixed(2));
    }
    else if(imc >= 18.6 && imc < 24.9){
      alert('Peso ideal! ' + imc.toFixed(2));
    }
    else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso! ' + imc.toFixed(2));
    }
    else {
      alert('Não calculado');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calcule o seu IMC</Text>
      <TextInput
        style={ styles.input }
        value={ peso }
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Peso (kg)"
        keyboardType='numeric'
        placeholderTextColor='white'
      />
     <TextInput
        style={ styles.input }
        value={ altura }
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="Altura (cm)"
        keyboardType='numeric'
        placeholderTextColor='white'
      />
      <TouchableOpacity style={styles.button} onPressIn={ handleSubmit } >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
  },
  input: {
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: "#fff",
    fontSize: 23,
  },
  button: {
    justifyContent: 'center',
    alignContent:'center',
    margin: 15,
    backgroundColor: '#41aef4',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  }
});
