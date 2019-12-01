import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name,setName] =useState('Aanand')
  const [age,setAge] = useState(10)
  return (
    <View style={styles.container}>
      <Text>Name is {name}, age is {age}</Text>
      <Text style={styles.header}>Enter Name:</Text>
      <TextInput
        placeholder='e.g. Aanand'
        style={styles.input}
        multiline
        onChangeText = {(val)=> setName(val)}
      />
      <Text style={styles.header}>Enter age:</Text>
      <TextInput
      keyboardType='number-pad'
        placeholder='e.g. 10'
        style={styles.input}
        onChangeText={(val)=> setAge(val)}
      />
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
  input:{
    borderBottomColor: 'red',
    borderWidth: 2,
    padding: 8,
    margin:10,
    width: 200
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
