import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView, Linking } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { getNews } from '../src/news';
//import NewsDetails from './NewsDetails';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: "",
            error: null,
            searchValue: "",
            articles: [],
            refreshing: true
        };
        this.arrayholder = this.state.articles;
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentDidMount() {
        this.fetchNews();

    }


    fetchNews() {
        getNews()
            .then(articles => {
                this.setState({ articles, refreshing: false });
                this.state.data = articles;
            })
            .catch((e) => {
                this.setState({ refreshing: false });

            });
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchNews()
        );
    }

    searchFunction = (text) => {
        const updatedData = this.state.data.filter((item) => {
            const item_data = `${item.title.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({ articles: updatedData, searchValue: text });
    };

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type here..."
                    lightTheme
                    round
                    value={this.state.searchValue}
                    onChangeText={(text) => this.searchFunction(text)}
                    autoCorrect={false}
                />
                <ScrollView>
                    {
                        this.state.articles.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.urlToImage } }}
                                title={l.title}
                                titleStyle={styles.item}
                                onPress={() => this.props.navigation.navigate('NewsDetails',   l )}
                                refreshing={this.state.refreshing}
                                onRefresh={this.handleRefresh.bind(this)}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default NewsList;

const styles = StyleSheet.create({
    container: {
        padding: 2,
        flex: 1
    },
    item: {
        marginHorizontal: 10,
    },
    title: {
        paddingLeft: 10
    }
});

