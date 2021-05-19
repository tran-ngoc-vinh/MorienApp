import React,{Component} from 'react';
import{
    View,Text, TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class GoodListScreen extends Component { 
   
    render(){
        let item =this.props.route.params;
        return(
            <View　style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View >
                    <Text>{item.GoodsName}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:'#4CAF50',width:200,padding:5,alignItems:"center",borderRadius:10}} onPress={()=>this.onClickCart(item)}>
                        <View>
                            <Text style={{color:'white',fontSize:20}}>カートに入れる</Text>
                        </View>
                </TouchableOpacity>  
            </View>
        )
    }

    onClickCart(data){
        const itemcart ={
            goods:data,
            quantity : 1,
            name:data.GoodsName,
            size:data.Size
        }

        AsyncStorage.getItem("cart").then((datacart)=>{
            if(datacart!==null){
                const cart = JSON.parse(datacart)
                cart.push(itemcart)
                AsyncStorage.setItem("cart",JSON.stringify(cart))
            }
            else{
                const cart = []
                cart.push(itemcart)
                AsyncStorage.setItem('cart',JSON.stringify(cart));
            }
            alert("カートに入れる")
        })
        .catch((error)=>{
            alert(error)
        })
    }
    
}

