import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, Button } from 'react-native';
import yelp from '../api/yelp';
import { Rating, AirbnbRating } from 'react-native-elements';


const ResultsShowScreen = (props) => {

    const Reviews = [
        { 'id': 1, 'reviewer': 'Brandon Lee', 'photo': 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'total_reviews': 40, 'date': '01-06-2020', 'ratings': 4, 'review': 'I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful. I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful.' },
        { 'id': 2, 'reviewer': 'Christain Liam', 'photo': 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'total_reviews': 50, 'date': '10-10-2019', 'ratings': 5, 'review': 'I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful. I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful.' },
        { 'id': 3, 'reviewer': 'Mark Anderson', 'photo': 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'total_reviews': 5, 'date': '12-12-2018', 'ratings': 4, 'review': 'I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful. I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful.' },
        { 'id': 4, 'reviewer': 'Brad Pitt', 'photo': 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'total_reviews': 4, 'date': '20-02-2020', 'ratings': 3, 'review': 'I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful. I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful.' },
        { 'id': 5, 'reviewer': 'Chris Hemsworth', 'photo': 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'total_reviews': 100, 'date': '23-02-2020', 'ratings': 2, 'review': 'I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful. I Enjoyed the food very much at this restaurant. The dishes are attractive and very beautiful.' }
    ];

    const {
        id,
        image_url
    } = props.route.params.item;

    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    const loadReviewSection = Reviews.map((item) => {
        return (
            <View style={styles.reviewsCard} key={item.id}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 25 }}
                            source={{ uri: item.photo }}
                        />
                        <View>
                            <Text style={{ paddingTop: 2, paddingLeft: 10 }}>{item.reviewer}</Text>
                            <Text style={{ paddingLeft: 10 }}>{item.total_reviews} Reviews</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 8, paddingLeft: 3 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Ratings:</Text>
                            <Rating
                                defaultRating
                                imageSize={20}
                                style={{ marginLeft: 5 }}
                            />
                        </View>
                        <Text>{item.date}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 8, paddingLeft: 3 }}>
                    <Text>
                        {item.review}
                    </Text>
                </View>
            </View>
        );
    });

    return (
        <ScrollView style={{ backgroundColor: '#dadada', flex: 1 }}>
            <View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image style={{ height: 200 }} source={{ uri: image_url }} />
                    {/* <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around', position: 'absolute', bottom: 10}}>
                        <Text style={{  color: '#fff', fontSize: 20 }}>{result.name}</Text>
                        <Text style={{  color: '#fff', fontSize: 20 }}>{result.rating}</Text>
                    </View> */}
                    <Text style={{ position: 'absolute', bottom: 3, left: 1, fontSize: 20, backgroundColor: '#fff', padding: 5, borderRadius: 3 }}>{result.name}</Text>
                </View>
                <Text style={styles.seperator}>Contact</Text>

                <View style={styles.contactItems}>
                    <Text>Call</Text>
                    <Text>{result.phone}</Text>
                </View>
                <View style={styles.contactItems}>
                    <Text>Address</Text>
                    <Text>{result.location.zip_code}, {result.location.city} {result.location.state}</Text>
                </View>
                <View style={styles.contactItems}>
                    <Text>Rating</Text>
                    <Text>{result.rating} Stars</Text>
                </View>
                <Text style={styles.seperator}>Photos</Text>
                <FlatList
                    horizontal
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image style={styles.imageStyle} source={{ uri: item }} />
                    }}
                />
                <Text style={styles.seperator}>Reviews</Text>
                {loadReviewSection}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        margin: 5,
        borderRadius: 5
    },
    contactItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 3,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 9,
    },
    seperator: {
        margin: 10,
        fontSize: 20
    },

    reviewsCard: {
        marginHorizontal: 5,
        marginVertical: 3,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 9,

    }
});

export default ResultsShowScreen;