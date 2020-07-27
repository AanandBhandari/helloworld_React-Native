import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
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
    return (<FlatList
        horizontal={true}//or horizontal only
        showsHorizontalScrollIndicator={false}
        keyExtractor={(extract)=>extract.name}
        data={data}
        renderItem={({ item }) => {
            console.log(item)
            return (<Text style={style.textStyle}>
                {item.name}
            </Text>)
        }}
    />)
}
const style = StyleSheet.create({
    textStyle: {
        marginHorizontal:50
    }
})

export default ListScreen
