import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export default function Category({ route, navigation }) {
    const jokes = route.params.body
    return (
        <View>
            <Text>{route.params.title}</Text>
            <ScrollView>
                {
                    jokes.map((item) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('SingleJoke', item)}>
                                <View style={styles.textView}>
                                    <Text style={styles.textStyle}>{item}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>



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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA160',

    },
    textStyle: {
        fontSize: 30,
        color: '#3B1800'
    }

})