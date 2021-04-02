import React from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';
  import {
      Avatar,
      Title,
      Caption,
      Paragraph,
      Drawer,
      Text,
      TouchableRipple,
      Switch
  } from 'react-native-paper'
  import{
    DrawerContentScrollView,
    DrawerItem
  } from '@react-navigation/drawer'

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();
export function DrawerContent(props) {
      return(
      
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                <Drawer.Section style={Styles.drawerSection}>
                <DrawerItem
                // icon={({color,size}) =>(
                //     <Icon
                //     name=" "
                //     color={color}
                //     size={size}
                //     />
                // )} 
                label="お客様情報"
                onPress={() =>{props.navigation.navigate('CustomerlInformation')}}
                />
                <DrawerItem
                // icon={({color,size}) =>(
                //     <Icon
                //     name=""
                //     color={color}
                //     size={size}
                //     />
                // )} 
                label="マンセル値検索"
                onPress={() =>{props.navigation.navigate('MunsellValue')}}
                />
                </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={Styles.bottomDrawerSection}>
                <DrawerItem 
                icon={({color,size}) =>(
                    <Icon
                    name="exit-to-app"
                    color={color}
                    size={size}
                    />
                )} label="ログアウト"
                onPress={() =>{}}
                />
            </Drawer.Section>
        </View>
  
      );
  }
  

  const Styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    drawerSection: {
        marginTop: 15,
      },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },

  });