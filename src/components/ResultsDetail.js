import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {

    const {
        name,
        image_url,
        rating,
        review_count
    } = result;

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{ uri: image_url }}
            />
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.nameStyle}>{rating} Stars, {review_count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 10,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;