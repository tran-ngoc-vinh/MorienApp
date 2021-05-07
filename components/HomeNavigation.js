import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';

import MainTabScreen from './MainTabScreen';
import CustomerlInformation from './CustomerInformation';
import MunsellValue from './MunsellValue';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();


const HomeNavigation = () => {
  return (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Reception" component={MainTabScreen}/>
            <Drawer.Screen name="CustomerlInformation" component={CustomerStackScreen}/>
            <Drawer.Screen name="MunsellValue" component={MunsellStackScreen}/>
          </Drawer.Navigator> 
        
  );
};

export default HomeNavigation;

  
const CustomerStack = createStackNavigator()
const CustomerStackScreen =({navigation})=>(
  <CustomerStack.Navigator screenOptions={{
    headerStyle:{ backgroundColor:'#009387'},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'}
  }}>
    <CustomerStack.Screen name="Customer" component={CustomerlInformation} options={{title:'お客様情報',headerTitleAlign:'center',
    headerLeft: () => (
      <Icon.Button name="chevron-back-circle-outline" size={30} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
  ),
  }} />
  </CustomerStack.Navigator>
)

const MunsellStack = createStackNavigator()
const MunsellStackScreen =({navigation})=>(
  <MunsellStack.Navigator screenOptions={{
    headerStyle:{ backgroundColor:'#009387'},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'}
  }}>
    <MunsellStack.Screen name="Customer" component={MunsellValue} options={{title:'お客様情報',headerTitleAlign:'center',
    headerLeft: () => (
      <Icon.Button name="chevron-back-circle-outline" size={30} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
  ),
  }} />
  </MunsellStack.Navigator>
)



  