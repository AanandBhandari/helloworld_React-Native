import React from 'react'
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native'

const ListScreen = props => {
    const data = [
        { name: 'friends 1', key:'1' },
        { name: 'friends 2', key:'2' },
        { name: 'friends 3', key:'3' },
        { name: 'friends 4', key:'4' },
        { name: 'friends 5', key:'5' },
        { name: 'friends 6', key:'6' },
        { name: 'friends 7', key:'7' },
        { name: 'friends 8', key:'8' },
        { name: 'friends 010', key:'9' },
    ]
    return (
        <View>
            <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
                <Text style={style.textButton}>Go to home</Text>
            </TouchableOpacity>
            <FlatList
                // horizontal={true}//or horizontal only
                showsVerticalScrollIndicator= {false}
                keyExtractor={(extract)=>extract.name}
                data={data}
                renderItem={({ item }) => {
                    return (<Text style={style.textStyle}>
                        {item.name}
                    </Text>)
                }}
            />
        </View>)
}
const style = StyleSheet.create({
    textStyle: {
        marginVertical:50
    },
    textButton:{
        fontSize:20,
        color:'red'
    }
})

export default ListScreen
