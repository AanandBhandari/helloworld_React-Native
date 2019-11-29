import React, {useState} from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {
  const [name,setName] =useState('Aanand')
  const changeName = () => {
    if (name == 'Aanand') {
      setName('Paras')
    }
    if (name == 'Paras') {
      setName('Aanand')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}>Helloworld!</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.boldText}>Reactnative is awesome</Text>
      <Text style={styles.boldText}>My name is {name}</Text>
      <Text style={styles.boldText}>Reactnative is awesome</Text>
    </View>
    <View style={styles.button}>
    {/* button is self closing tag */}
    <Button title='Update Name ' onPress={changeName}/>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    textAlign: 'center',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body:{
    backgroundColor:'yellow',
    padding: 20
  },
  button: {
    marginTop: 20
  }
});
