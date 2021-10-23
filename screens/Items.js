import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

export default function Items({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    return (
        <View>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Item', item)}>
                    <Text >{item.title}</Text>
                </TouchableOpacity>
            )} />
        </View>
    )
}
