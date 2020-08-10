import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ImageDetail from '../components/ImageDetail'
export default function ImageScreen(props) {
    return (
        <View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}>
            <Text style={styles.textButton}>Go to home</Text>
        </TouchableOpacity>
            <ImageDetail title='forest' imageSource={require('../../assets/forest.jpg')} rating={4}/>
            <ImageDetail title='beach' imageSource={require('../../assets/beach.jpg')} rating={4} />
            <ImageDetail title='mountain' imageSource={require('../../assets/mountain.jpg')} rating={4} />
        </View>
    )
}

const styles = StyleSheet.create({
    textButton: {
        fontSize: 20,
        color: 'red'
    }})
