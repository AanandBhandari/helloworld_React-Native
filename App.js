import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name:'Aanand', key:1},
    { name: 'Nana', key: 2 },
    { name: 'Sijju', key: 3 },
    { name: 'Mahesh', key: 4 },
    { name: 'Kanchan', key: 5 },
    { name: 'Pradeep', key: 6 },
    { name: 'Paras', key: 7 },
    { name: 'Manjil', key: 8 },
    { name: 'Erica', key: 9 }
  ])
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item=> (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    backgroundColor: 'pink',
    marginTop: 24,
    padding: 30,
    fontSize: 34
  }
});
