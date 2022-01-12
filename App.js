import React, { Component } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Header } from 'react-native-elements';
import NewsList from './components/NewsList';
import Setting from './components/Settings';
import './src/i18n';
import { useTranslation } from 'react-i18next';


import { createStackNavigator, createAppContainer } from "react-navigation";
import NewsDetails from './components/NewsDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <AppContainer>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <NewsList/>
      </View>
    </AppContainer>
  );
}

function SettingsScreen() {
  return (
    <AppContainer>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <NewsList />
      </View>
    </AppContainer>
  );
}


function MyTabs() {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name={t('news')} component={HomeScreen} />
      <Tab.Screen name={t('settings')} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

class App extends Component {
  
  render() {

   
    
    return (<NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
    );

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


const AppNavigator = createStackNavigator({
  NewsList: {
    screen: NewsList
  },
  NewsDetails: {
    screen: NewsDetails
  }
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: '#F5FCFF',
  }
});

export default App;

