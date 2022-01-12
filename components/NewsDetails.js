import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView, Linking, TouchableNativeFeedback } from "react-native";
import { Button, Card, Divider, ListItem, SearchBar } from 'react-native-elements';
import moment from 'moment';
import { getNews } from '../src/news';

import { createStackNavigator, createAppContainer } from 'react-navigation';



class NewsDetails extends Component {
    constructor() {
        super();
    }

    render() {
        const article = this.props.navigation.state.params;
       
        console.log(article);

        return (
               
            <ScrollView>
                <Text style={[styles.text, styles.blueText]}>{article.title}</Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: article.urlToImage
                        }}
                />
                <Text style={[styles.text, styles.blueText]}>{article.author}</Text>

                    <Text style={[styles.greyText]}>{article.content}</Text>
                </ScrollView>
        );
    }
}

export default NewsDetails;

const styles = StyleSheet.create({
    container: {
        padding: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingLeft: 10
    },
    text: {
        textAlign: "center",
        marginHorizontal: 16,
        marginTop: 12,
    },
    blueText: {
        fontSize: 20,
        color: "blue",
    },
    greyText: {
        marginHorizontal: 5,
        fontSize: 12,

        color: "grey",
    },
    image: {
        width: '100%',
        height: 200,
    },
});


