import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

const ColorScreen = (props) => {
    let [colors,setColors] = useState([])
    const generateColor = () => {
        let red = Math.floor(Math.random()*256)
        let green = Math.floor(Math.random()*256)
        let blue = Math.floor(Math.random()*256)
        setColors([...colors,`rgb(${red},${green},${blue})`])
    }
    return (
        <View>
            <Text style={styles.text}>Color Screen</Text>
            <Button title="Go back to the home" onPress={()=> props.navigation.navigate("Home")}/>
            <View>
                <Button title="Generate Random Color" onPress={()=> generateColor()}/>
            </View>
            <FlatList
                keyExtractor={item=>item}
                data={colors}
                renderItem={({item})=>{
                    return(
                        <View style={{height: 100, width: 100 , backgroundColor: item}}/>
                    )
                }}
            />
        </View>
    )
}

export default ColorScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }})
