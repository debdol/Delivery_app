import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ShowDataPage from './ShowDataPage'
import SearchPage from './SearchPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchPage" component={SearchPage} options={(() => ({ headerShown: true }))} />
        <Stack.Screen name="ShowDataPage" component={ShowDataPage} options={(() => ({ headerShown: true }))} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})