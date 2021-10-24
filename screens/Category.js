import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Category({ route, navigation }) {
    return (
        <View>
            <Text>{route.params.title}</Text>
            <Text>{route.params.rating}</Text>
            <Text>{route.params.body}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SingleJoke')}>
                <Text >go to single joke page</Text>
            </TouchableOpacity>

        </View>
    )
}
