import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'

const ImageDetail = ({title,imageSource,rating}) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource}/>
            <Text> this image has got {rating} stars</Text>
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({})
