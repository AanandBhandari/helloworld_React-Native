import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title='Go to listScreen' onPress={() => props.navigation.navigate('ListScreen')}/>
      <TouchableOpacity onPress={()=> props.navigation.navigate("ImageScreen")}>
        {/* it cn take any kind of component*/}
        <Text style={styles.text}>Go to Image Screen</Text>
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
