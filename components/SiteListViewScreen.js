import React from 'react';
import{
    View,Text, TouchableOpacity,Button
} from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import Geocoder from 'react-native-geocoding';
import { GOOGLE_MAP_KEY} from './MAPS/googleMapKey';

export default class SiteListViewScreen extends React.Component { 

    handleGetDirections = () => {

    let site = this.props.route.params
        Geocoder.init(GOOGLE_MAP_KEY);
        Geocoder.from(site.PostalCode,site.AddressPrefecture,site.AddressCity,site.AddressNumber)
        .then(json => {
          var location = json.results[0].geometry.location;
          
          {

            const data = {
              destination: {
                latitude: location.lat,
                longitude:location.lng
              },
              params: [
                {
                  key: "travelmode",
                  value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                  key: "dir_action",
                  value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
              ],
              
            }
         
            getDirections(data)
          }       
        })
        .catch(error => console.warn(error));
        }
        
        
    render(){
        let site =this.props.route.params;
        return(
            <View>
                <View style={{marginBottom:20,marginTop:5}}>
                    <Text> 名前</Text>
                    <Text style={{fontSize:12,marginBottom:5,marginTop:5}}> {site.SiteKana}</Text>
                    <Text style={{fontSize:12}}> {site.SiteName}</Text>
                </View>
                <View style={{marginBottom:20}}>
                    <Text> 郵便番号</Text>
                    <Text> {site.PostalCode}</Text>
                </View>
                <View style={{marginBottom:10}}>
                    <Text> 都道府県</Text>
                    <Text> {site.AddressPrefecture}</Text>
                </View>
                <View style={{marginBottom:10}}>
                    <Text> 市町村</Text>
                    <Text> {site.AddressCity}</Text>
                </View>
                <View style={{marginBottom:10}}>
                    <Text> 番地、ビル名</Text>
                    <Text> {site.AddressNumber}</Text>
                </View>
                <View style={{marginBottom:10}}>
                    <Text> 電話番号</Text>
                    <Text> {site.Tel}</Text>
                </View>
                <View style={{marginBottom:10}}>
                    <Text> 現場種類</Text>
                    <Text></Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity style={{backgroundColor:'#4CAF50',width:250,alignItems:"center",borderRadius:10}} onPress={()=>{this.handleGetDirections()}}>
                            <View>
                                <Text style={{color:'white',fontSize:20}}>GoogleMapで確認する</Text>
                            </View>
                    </TouchableOpacity>  
                </View>
            </View>
        )
    }
}
