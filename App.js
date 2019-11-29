import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}>Helloworld!</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.boldText}>Reactnative is awesome</Text>
      <Text style={styles.boldText}>Reactnative is awesome</Text>
      <Text style={styles.boldText}>Reactnative is awesome</Text>
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
  }
});
