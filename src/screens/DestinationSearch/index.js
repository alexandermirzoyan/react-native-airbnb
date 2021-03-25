import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            onPress={() => props.navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
