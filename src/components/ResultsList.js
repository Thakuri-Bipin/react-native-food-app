import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {

    if (!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { item })}>
                            <ResultsDetail navigation={navigation} result={item} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(result) => result.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;