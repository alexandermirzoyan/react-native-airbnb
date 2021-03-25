import React from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

import feed from './assets/data/feed';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/*<HomeScreen />*/}
        {/*<ScrollView>
          {feed.map(postItem => (
            <Post post={postItem} />
          ))}
        </ScrollView>*/}
        {/*<SearchResultsScreen />*/}
        {/*<DestinationSearchScreen />*/}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
