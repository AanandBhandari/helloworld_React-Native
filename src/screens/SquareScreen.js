import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SquareScreen = (props) => {
    const [color,setColor] = useState({
        red: 0,
        green: 0,
        blue: 0
        })
    const INTENSITY = 25
    const changeColor = (type,intensity) => {
        if (color[type] + intensity > 255 || color[type] + intensity < 0) {
            return;
        }
        setColor({
            ...color,
            [type]: color[type] + intensity
        })
    }
    return (
        <View>
            <Text style={styles.text}>Square Screen</Text>
            <Button title="Go back to the home" onPress={() => props.navigation.navigate("Home")} />
            <View>
                <Text>red</Text>
                <Button title="More Red" onPress={()=> changeColor('red',INTENSITY)}/>
                <Button title="Less Red" onPress={() => changeColor('red', -INTENSITY)} />
            </View>
            <View>
                <Text>blue</Text>
                <Button title="More Bule" onPress={() => changeColor('blue', INTENSITY)} />
                <Button title="Less Blue" onPress={() => changeColor('blue', -INTENSITY)} />
            </View>
            <View>
                <Text>green</Text>
                <Button title="More Green" onPress={() => changeColor('green', INTENSITY)} />
                <Button title="Less Green" onPress={() => changeColor('green', -INTENSITY)} />
            </View>
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${color.red},${color.green},${color.blue})`}}/>
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }})
