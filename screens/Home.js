import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import Data from '../data/Jokes.json'
export default function Home({ navigation }) {
    const [reviews, setReviews] = useState(Data);
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', }}
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Category', item)}>
                        <View style={styles.textView}>
                            <Text style={styles.textStyle}>{item.title}</Text>
                        </View>

                    </TouchableOpacity>
                )} />
        </View>
    )
}


const styles = StyleSheet.create({
    textView: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        backgroundColor: '#FFA160',

    },
    container: {
        backgroundColor: '#FFAE76',
        flex: 1
    },
    textStyle: {
        fontSize: 30,
        color: '#3B1800'
    }


});