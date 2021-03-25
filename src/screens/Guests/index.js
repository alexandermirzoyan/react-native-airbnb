import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Adults
            </Text>
            <Text
              style={{
                color: '#8d8d8d',
              }}>
              Ages above 13 or above
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonAction}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonAction}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Children
            </Text>
            <Text
              style={{
                color: '#8d8d8d',
              }}>
              Ages 2 - 12
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.buttonAction}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.buttonAction}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Infants
            </Text>
            <Text
              style={{
                color: '#8d8d8d',
              }}>
              Under 2
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.buttonAction}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.buttonAction}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => props.navigation.navigate('Home')}
        style={{
          marginBottom: 50,
          backgroundColor: '#f15454',
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          To Home
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
