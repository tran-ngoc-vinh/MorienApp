import React,{Component} from 'react';
import{
    View,Text, TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default class GoodListScreen extends Component { 
    state={}
    render(){
        let goods =this.props.route.params;
        return(
            <View　style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View >
                    <Text>{goods.GoodsName}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:'#4CAF50',width:200,padding:5,alignItems:"center",borderRadius:10}} onPress={()=>{alert('this is asa')}}>
                        <View>
                            <Text style={{color:'white',fontSize:20}}>カートに入れる</Text>
                        </View>
                </TouchableOpacity>  
            </View>
        )
    }
}

