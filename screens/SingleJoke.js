import React from 'react'
import { View, Text } from 'react-native'

export default function SingleJoke({ route, navigation }) {
    console.log(route.params);
    return (
        <View>
            <Text>{route.params}</Text>
        </View>
    )
}
