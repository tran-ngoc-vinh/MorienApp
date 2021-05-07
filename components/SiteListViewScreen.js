import React from 'react';
import{
    View,Text, TouchableOpacity
} from 'react-native';
import MapsScreen from './MapsScreen'

export default class SiteListViewScreen extends React.Component { 
    state={ }
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
                    <TouchableOpacity style={{backgroundColor:'#4CAF50',width:250,alignItems:"center",borderRadius:10}} onPress={()=>{this.props.navigation.navigate('MapsScreen')}}>
                            <View>
                                <Text style={{color:'white',fontSize:20}}>GoogleMapで確認する</Text>
                            </View>
                    </TouchableOpacity>  
                </View>
            </View>
        )
    }
}

