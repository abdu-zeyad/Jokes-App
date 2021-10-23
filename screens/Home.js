import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Content')}>
                <Text >move to items stack</Text>
            </TouchableOpacity>
        </View>
    )
}
