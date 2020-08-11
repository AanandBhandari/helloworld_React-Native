import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title='Go to listScreen' onPress={() => props.navigation.navigate('ListScreen')}/>
      <Button title='Go to ColorScreen' onPress={() => props.navigation.navigate('ColorScreen')} />
      <TouchableOpacity onPress={()=> props.navigation.navigate("ImageScreen")}>
        {/* it cn take any kind of component*/}
        <Text style={styles.text}>Go to Image Screen</Text>
      </TouchableOpacity>
      <Button title='Go to SquareScreen' onPress={() => props.navigation.navigate('SquareScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
