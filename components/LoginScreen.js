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
   Alert,
 } from 'react-native';
 import Styles from '../theme/StyleLogin'
 import ReceptionScreen from './ReceptionScreen'
 export default class LoginScreen extends Component {
 
     constructor(props){
         super(props);
         this.state={
           login_id:"",
           password:"",
         }
 
     }
 
   fnLogin = () => {
     
     let details = {
      'login_id': this.state.login_id,
      'password': this.state.password,
  };

  let formBody = [];
  for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch('http://3.115.79.185/morien/api/Logins', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
  }).then((response) => response.json())
      .then((responseData) => {
        alert(responseData);
          console.log(responseData);
        
      })
      .done();
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
                 onChangeText={(login_id) => this.setState({login_id:login_id})}
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
                 onChangeText={(password) => this.setState({password:password})}
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
 