import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home';
import { Icon } from 'react-native-vector-icons/Feather';

const buttomTab = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={Home} Icon/>
            
        </Tab.Navigator>
    </Tab.Navigator>
  )
}

export default buttomTab

const styles = StyleSheet.create({})