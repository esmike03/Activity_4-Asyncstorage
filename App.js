import Main from './screens/main';
import List from './screens/list';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {

  const Stack = createStackNavigator();


  return (
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen  name="Home" component={Main} />
            <Stack.Screen name="List" component={List} />
          </Stack.Navigator>
        </NavigationContainer>
  
  );
}