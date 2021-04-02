import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './components/DrawerContent';

import MainTabScreen from './components/MainTabScreen';
import CustomerlInformation from './components/CustomerInformation';
import MunsellValue from './components/MunsellValue';

const Drawer = createDrawerNavigator();
const TabBarDetail = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Reception"
          component={MainTabScreen}
        />
        <Drawer.Screen
          name="CustomerlInformation"
          component={CustomerlInformation}
        />
        <Drawer.Screen
          name="MunsellValue"
          component={MunsellValue}
          
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default TabBarDetail;

  