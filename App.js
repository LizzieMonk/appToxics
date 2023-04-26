// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator, createAppContainer } from "@react-navigation/stack";

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Main  from './screens/Main';
import Create from './screens/Create';
import Read from './screens/Read';
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator()

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen 
          name="Create" 
          component={Create} 
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen 
          name="Read" 
          component={Read} 
          options={{
            headerShown: false,
          }}/>
        </Stack.Navigator>
    </NavigationContainer>
    </RecoilRoot>
  );
}