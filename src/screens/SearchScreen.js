import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    // custom hooks
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ?
                <Text>{errorMessage}</Text>
                : null
            }
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                    navigation={navigation}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                    navigation={navigation}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                    navigation={navigation}
                />

            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;