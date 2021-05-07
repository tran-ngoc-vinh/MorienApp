import React,{Component} from 'react';
import{
    View,Text,StyleSheet,TextInput, TouchableOpacity,Button
} from 'react-native';
import Geocoder from 'react-native-geocoding';

export default class MapsScreen extends Component { 
    getData()
    {
      Geocoder.setApiKey('AIzaSyBKLjz4gEAK3dGhMyADySgwDcBXSxnSuPc'); // use a valid API key

      Geocoder.getFromLatLng(41.89, 12.49).then(
        json => {
          var address_component = json.results[0].address_components[0];
          alert(address_component.long_name);
        },
        error => {
          alert(error);
        }
      );
    }

      render() {
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={()=>{this.getData()}} >
            <Text style={{fontSize:20}}>Get Address </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }
    })

