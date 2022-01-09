import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import NewsList from './components/NewsList';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Newsfeed', style: { color: '#fff' } }}
          rightComponent={{ icon: 'refresh', color: '#fff' }}
        />
        <NewsList />
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: '#F5FCFF',
  }
});

export default App;

