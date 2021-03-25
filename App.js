import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

import feed from './assets/data/feed';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
