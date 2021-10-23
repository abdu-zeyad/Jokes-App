import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Data from '../data/Jokes.json'
export default function Home({ navigation }) {
    const [reviews, setReviews] = useState(Data);
    return (
        <View>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Category', item)}>
                    <Text >{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}
