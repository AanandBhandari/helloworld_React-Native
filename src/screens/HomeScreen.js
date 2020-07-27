import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title='Go to list Demo' onPress={()=>console.log('button pressed!')}/>
      <TouchableOpacity onPress={()=> console.log('button pressed!!!')}>
        {/* it cn take any kind of component*/}
        <Text style={styles.text}>Hello from TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
