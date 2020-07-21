import React from 'react'
import {View,Text, StyleSheet,FlatList} from 'react-native'

const ListScreen = () => {
    const data = [
        1,2,5
    ]
    return (
        <FlatList
            keyExtractor={d=>d}
            data={data}
            renderItem={element =><Text>
                {element.item}
            </Text>}
        />
    )
}
const style = StyleSheet.create({})

export default ListScreen
