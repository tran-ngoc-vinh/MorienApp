import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ReceptionScreen from './ReceptionScreen';
import OderScreen from './OderScreen';
import ProductListScreen from './ProductListScreen';
import SiteListScreen from './SiteListScreen';


const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Reception"
      activeColor="#008000"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Reception"
        component={ReceptionStackScreen}
        options={{
          tabBarLabel: '受付前',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Oder"
        component={OderStackScreen}
        options={{
          tabBarLabel: '注文履歴',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductList"
        component={ProductListStackScreen}
        options={{
          tabBarLabel: '商品一覧',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SiteList"
        component={SiteListStackScreen}
        options={{
          tabBarLabel: '現場一覧',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;
const ReceptionStack = createStackNavigator()
const ReceptionStackScreen =({navigation})=>(
  <ReceptionStack.Navigator screenOptions={{
    headerStyle:{ backgroundColor:'#009387'},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'}
  }}>
    <ReceptionStack.Screen name="Reception" component={ReceptionScreen} options={{title:'MORIEN',headerTitleAlign:'center',
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
  ),
  headerRight: ()=>(<Icon.Button name="cart-outline" size={30} backgroundColor="#009387" onPress={()=> alert('this is a button')} /> ),
  }} />
  </ReceptionStack.Navigator>
)

const OderStack = createStackNavigator()
const OderStackScreen =({navigation})=>(
  <OderStack.Navigator screenOptions={{
    headerStyle:{ backgroundColor:'#009387'},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'}
  }}>
    <OderStack.Screen name="Oder" component={OderScreen} options={{title:'MORIEN',headerTitleAlign:'center',
         headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: ()=>(<Icon.Button name="cart-outline" size={30} backgroundColor="#009387" onPress={()=> alert('this is a button')} /> ),
      }} />
  </OderStack.Navigator>
)

const ProductListStack = createStackNavigator()
const ProductListStackScreen =({navigation})=>(
  <ProductListStack.Navigator screenOptions={{
    headerStyle:{ backgroundColor:'#009387'},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'}
  }}>
    <ProductListStack.Screen name="Oder" component={ProductListScreen} options={{title:'MORIEN',headerTitleAlign:'center',
         headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
          headerRight: ()=>(
          <Icon.Button name="cart-outline" size={30} backgroundColor="#009387" onPress={()=> alert('this is a button')} /> 
        ),
      }} />
      
  </ProductListStack.Navigator>
)

const SiteListStack = createStackNavigator()
const SiteListStackScreen =({navigation})=>(
  <SiteListStack.Navigator screenOptions={{
    headerStyle:{ backgroundColor:'#009387'},
    headerTintColor:'#fff',
    headerTitleStyle:{fontWeight:'bold'}
  }}>
    <SiteListStack.Screen name="Oder" component={SiteListScreen} options={{title:'MORIEN',headerTitleAlign:'center',
         headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
        headerRight: ()=>(<Icon.Button name="add-outline" size={30} backgroundColor="#009387" onPress={()=> alert('add button')} /> 
      ),
  }} />
  </SiteListStack.Navigator>
)
