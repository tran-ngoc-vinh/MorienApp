import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SplashScreen = ({navigation}) => {
  
  const func = async() => {
    try {
      const jsonValue = AsyncStorage.getItem('user').then(value => {
        console.log(value);
        let userInfo = JSON.parse(value)
        if (userInfo.login_hash) {
          navigation.navigate('HomeNavigation');
        } else {
          navigation.navigate('LoginScreen');
        }
      });
    } catch (e) {}
  };
    return (
        <View style={styles.container}>
            <View style={styles.up}>
             <View style={styles.logo}>
               <Animatable.Image
                    animation="bounceIn"
                    duraton ="1500"
                 style={styles.logo}
                 source={require('../images/logo.png')}></Animatable.Image>
             </View>
           </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
                >
                <Text style ={styles.title}>MORIEN</Text>
                <Text style ={styles.Text}>Sing in with account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={func}>
                    <LinearGradient
                    colors={['#08d4c4','#01ab9d']} style={styles.signIn}
                    >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name ="navigate-next"
                        color="#fff"
                        size={20}
                    />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}
export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  up: {
    flex: 3,
    flexDirection:'column',
    justifyContent:'center',
     alignItems:'center',
    
},
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
    width: 320,
    height:100,
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});