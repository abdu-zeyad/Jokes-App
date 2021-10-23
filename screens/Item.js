import React from 'react'
import { View, Text } from 'react-native'

export default function Item({ route, navigation }) {
    return (
        <View>
            <Text>{route.params.title}</Text>
            <Text>{route.params.rating}</Text>
            <Text>{route.params.body}</Text>
        </View>
    )
}
