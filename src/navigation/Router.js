import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import HomeScreen from '../screens/Home';
import GuestsScreen from '../screens/Guests';
import DestinationSearchScreen from '../screens/DestinationSearch';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Destination"
          component={DestinationSearchScreen}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            gestureEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
