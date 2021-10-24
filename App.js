import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Category from './screens/Category';
import SingleJoke from './screens/SingleJoke';
import Home from './screens/Home';
import Profile from './screens/Profile'
import Settings from './screens/Settings'

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

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="SingleJoke" component={SingleJoke} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

