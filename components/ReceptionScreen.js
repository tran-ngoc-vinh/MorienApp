import React, { Component } from 'react';
import{
    View,Text,TextInput, TouchableOpacity
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReceptionScreen extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            dataSource:null,
        }
    }
    renderItem=({item})=>{
        return(
            <TouchableOpacity style={{flex:1,flexDirection:'row',marginBottom:3}} onPress={()=>{
                console.log(item);
            }}>
                <View>
                    <Text style={{fontSize:14,color:'green',marginBottom:5,marginTop:5}}>{item.ClientName}</Text>
                    <Text style={{fontSize:12,marginBottom:10}}>イントロデューサー: {item.Introducer}</Text>
                </View>
            </TouchableOpacity>
        )     
    }
    renderSeparator=()=>{
        return(
            <View style={{height:1,width:'100%',backgroundColor:'black'}}></View>
        )
    }

  

    componentDidMount() {
        var details = {
            'login_hash': '883a8809e8b905019e41909b62b61f398480b5ea',
            'user_id': '6830',
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        fetch('http://3.115.79.185/morien/api/Client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
          
        }) 
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                dataSource:responseJson.ClientList,
                filterClient:responseJson.ClientList

            })

        })
        .catch((error)=>{console.log(error)})
    }

    onChangeText(text){
        console.log('textChanged',text)
        let filterArray = this.state.filterClient
        let searchResult = filterArray.filter(client => 
            client.ClientName.includes(text)
        )
        this.setState({dataSource:searchResult})
    }

    render(){
        
        return(
            

            this.state.isLoading
            ?
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#330066" animating />
            </View>
            :
            <View style={{flex:1,marginTop:22}}>
                {/* SEARCH BAR */}
                <View>
                <TextInput placeholder="商品名"
                style={{margin:3,marginStart:3,padding:5,borderWidth:1,paddingLeft:30,borderColor:"#CCCCCC",borderRadius:7,fontSize:16}}
                onChangeText={text => this.onChangeText(text)}
                />
                <Icon style={{position:'absolute',left:12,top:13}}name="search-outline" size={20}color="#CCCCCC"/>
                </View>
                <FlatList
                data={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index}
                ItemSeparatorComponent={this.renderSeparator}
                ></FlatList>
            </View>
            
        )
    }
}

