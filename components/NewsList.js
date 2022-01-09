import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView, Linking } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { getNews } from '../src/news';

const list = [
    {
        name: 'Risks Digest 33.01',
        avatar_url: 'http://seclists.org/images/risks-img.png',
        link: 'https://seclists.org/risks/2022/q1/0'
    },
    {
        name: 'Tesla is recalling new models',
        avatar_url: 'https://i1.prth.gr/images/640x360share/files/2022-01-08/tes77.jpg',
        link: 'https://www.protothema.gr/english-news/article/1199028/tesla-is-recalling-more-than-475000-of-its-model-3-and-model-s-electric-cars-over-safety-issue/'
    },
    {
        name: 'Countries With the Biggest Income Gaps',
        avatar_url: 'https://247wallst.com/wp-content/uploads/2022/01/imageForEntry27-Mj1.jpg',
        link: 'https://247wallst.com/special-report/2022/01/08/countries-with-the-biggest-income-gaps/'
    },
    {
        name: 'Head of communications at Facebook parent Meta leaves company',
        avatar_url: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202201/meta1200-sixteen_nine.jpg',
        link: 'https://www.businesstoday.in/latest/corporate/story/head-of-communications-at-facebook-parent-meta-leaves-company-318378-2022-01-08'
    },
    {
        name: 'Sports teams are investing $10 billion in stadiums by 2030',
        avatar_url: 'https://image.cnbcfm.com/api/v1/image/106998606-1641594494539-AP21312012189613.jpg',
        link: 'https://www.cnbc.com/2022/01/08/the-future-of-sports-stadiums-smaller-arenas-more-tech-greener.html'
    },
    {
        name: 'Tesla is recalling new models',
        avatar_url: 'https://i1.prth.gr/images/640x360share/files/2022-01-08/tes77.jpg',
        link: 'https://www.protothema.gr/english-news/article/1199028/tesla-is-recalling-more-than-475000-of-its-model-3-and-model-s-electric-cars-over-safety-issue/'
    },
    {
        name: 'Countries With the Biggest Income Gaps',
        avatar_url: 'https://247wallst.com/wp-content/uploads/2022/01/imageForEntry27-Mj1.jpg',
        link: '"https://247wallst.com/special-report/2022/01/08/countries-with-the-biggest-income-gaps/'
    },
    {
        name: 'Head of communications at Facebook parent Meta leaves company',
        avatar_url: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202201/meta1200-sixteen_nine.jpg',
        link: 'https://www.businesstoday.in/latest/corporate/story/head-of-communications-at-facebook-parent-meta-leaves-company-318378-2022-01-08'
    },
];


class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: list,
            error: null,
            searchValue: "",
            articles: [],
            refreshing: true
        };
        this.arrayholder = list;
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentDidMount() {
        this.fetchNews();

    }


    fetchNews() {
        console.log('xxx');
        getNews()
            .then(articles => this.setState({ articles, refreshing: false }))
            .catch((e) => {
                console.log('yyy' + e);
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
        const updatedData = this.arrayholder.filter((item) => {
            const item_data = `${item.name.toUpperCase()})`;
            const text_data = text.toUpperCase();
            return item_data.indexOf(text_data) > -1;
        });
        this.setState({ data: updatedData, searchValue: text });
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
                                onPress={() => { Linking.openURL(l.url); }}
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

