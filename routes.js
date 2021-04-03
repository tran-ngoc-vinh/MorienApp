import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './components/DrawerContent';

import MainTabScreen from './components/MainTabScreen';
import CustomerlInformation from './components/CustomerInformation';
import MunsellValue from './components/MunsellValue';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import RootStackScreen from './components/RootStackScreen'
import { ActivityIndicator, View } from 'react-native';
import { AuthContext} from './screen/context';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const TabBarDetail = () => {
  const[isLoading, setIsLoading]= React.useState(true);
  const[userToken, setUserToken]= React.useState(null);

  const authContext = React.useMemo(()=>({
    signIn:() => {
      setUserToken('123');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken('null');
      setIsLoading(false);
    }
  }));

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  }, [])
  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Reception" component={MainTabScreen}/>
        <Drawer.Screen name="CustomerlInformation" component={CustomerStackScreen}/>
        <Drawer.Screen name="MunsellValue" component={MunsellStackScreen}/>
      </Drawer.Navigator> */}
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default TabBarDetail;

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




  