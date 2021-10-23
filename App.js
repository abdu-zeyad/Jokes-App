import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Profile from './screens/Profile'
import Settings from './screens/Settings'

import { NavigationContainer } from '@react-navigation/native';
import Items from './screens/Items';
import Item from './screens/Item';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function Content() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Items" component={Items} />

    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Content" component={Content} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

