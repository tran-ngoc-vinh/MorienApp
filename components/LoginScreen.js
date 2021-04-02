/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableWithoutFeedback,
   TextInput,
   Keyboard,
   TouchableOpacity,
 } from 'react-native';
 import Styles from '../theme/StyleLogin'
 
 export default class LoginScreen extends Component {
 
     constructor(props){
         super(props);
 
     }
 
   fnLogin = () => {
     return fetch('http://3.115.79.185/morien/api/Logins', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         'login_id': 'admin',
         'password': 'test1234',
       }),
     })
       .then(response => response.json())
       .then(resJson => {
         console.log('acbd');
         console.log(resJson);
       })
       .catch(error => {
         console.error(error);
       });
   };
 
   render() {
     return (
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={Styles.container}>
           <View style={Styles.up}>
             <View style={Styles.logo}>
               <Image
                 style={Styles.logo}
                 source={require('../images/logo.png')}></Image>
             </View>
           </View>
           <View style={Styles.down}>
             <View style={Styles.textInputContainer}>
               <TextInput
                 style={Styles.textInput}
                 placeholder="ユーザーIDを入力してください"
                 placeholderTextColor="rgba(38,26,45,0.8)"
                 autoCorrect={false}
               ></TextInput>
             </View>
             <View style={Styles.textInputContainer}>
               <TextInput
                 style={Styles.textInput}
                 placeholder="パスワードを入力してください"
                 returnKeyLabel="go"
                 placeholderTextColor="rgba(38,26,45,0.8)"
                 secureTextEntry
                 autoCorrect={false}
                 ref={'txtPassword'}
               ></TextInput>
             </View>
             <TouchableOpacity
               style={Styles.loginButton}
               onPress={() => this.fnLogin()}>
               <Text style={Styles.loginButtonTitle}>ログイン</Text>
             </TouchableOpacity>
           </View>
         </View>
       </TouchableWithoutFeedback>
     );
   }
 }
 