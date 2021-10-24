import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Card from '../components/Card';

import Data from '../data/Jokes.json'
export default function Home({ navigation }) {
    const [reviews, setReviews] = useState(Data);
    return (
        <View>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Category', item)}>
                    <Card>
                        <Text >{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    )
}
