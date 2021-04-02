import React from 'react';
import{
    View,Text,StyleSheet,TextInput, TouchableOpacity
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class OderScreen extends React.Component { 

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>OderScreen</Text>
            </View>
        )
    }
}

