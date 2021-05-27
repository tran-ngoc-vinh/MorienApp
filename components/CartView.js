import React, { Component} from 'react';
import { 
    View, Text, TouchableOpacity, ScrollView,StyleSheet ,Dimensions,Feather 
} from 'react-native';
var { width } = Dimensions.get("window")
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCart:[],  
        };
    }
    
    componentDidMount()
    {
      AsyncStorage.getItem('cart').then((cart)=>{
        if (cart !== null) {
          // We have data!!
          const cartmorien = JSON.parse(cart)
          this.setState({dataCart:cartmorien})
        }
      })
      .catch((err)=>{
        alert(err)
      })
    }

    removeCartItem = async (index) => {
        try {
            const cart = await AsyncStorage.getItem('cart');
            let cartItems = JSON.parse(cart);
            const updatedCartItems = cartItems.filter(function (e, itemIndex) { return itemIndex !== index });
            
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
            // await AsyncStorage.mergeItem('cart', JSON.stringify(updatedCartItems));
            
    
        } catch (error) {
            console.log('error: ', error);
        }
        this.setState({ cart: index });
    };

    onChangeQuat(i, type){
        const cart = this.state.dataCart
        let cant = cart[i].quantity;

        if(type){
            cant = cant + 1
            cart[i].quantity = cant
            AsyncStorage.setItem("cart", JSON.stringify(cart));
            this.setState({dataCart:cart})
        }
        else if (type == false&&cant>=2){
            cant = cant -1
            cart[i].quantity = cant
            AsyncStorage.setItem("cart", JSON.stringify(cart));
            this.setState({quantity:cart})
        }
        else if (type==false&&cant==1){
            cart.splice(i,1)
            this.removeCartItem(cant-1)
        }
    }

    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{height:20}} />
                <View style={{height:10}}/>


                <View style={{backgroundColor:'transparent',flex:1,justifyContent:'space-between'}}>
                    <ScrollView>
                    {
                        this.state.dataCart.map((item,i)=>{

                            return(                             
                                <View key ={i} style={{width:width-40,flex:1}}>
                                    <View style={{width:width-20,margin:10,backgroundColor:'transparent', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                                        <Text style={{fontSize:14,fontWeight:'bold'}}>{item.goods.GoodsName}</Text>
                                        <Text>Size : {item.goods.Size}</Text>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <TouchableOpacity onPress={()=>this.onChangeQuat(i,false)}>
                                            <Icon name="ios-remove-circle" size={30} color={"#33c37d"} />
                                            </TouchableOpacity>

                                            <Text style={{fontWeight:'bold',paddingHorizontal:10}}>{item.quantity}</Text>

                                            <TouchableOpacity  onPress={()=>this.onChangeQuat(i,true)} >
                                            <Icon name="ios-add-circle" size={30} color={"#33c37d"} />
                                            </TouchableOpacity>
                                              
                                            {/* <View>                                           
                                            <TouchableOpacity  onPress={()=>this.removeCartItem(i)} > 
                                            <Icon name="trash" size={30} color={"#D05A0B"} style={{marginLeft:100}} />
                                            </TouchableOpacity>
                                            </View>  */}
                                        </View>
                                    </View> 
                                </View>
                            )
                        })
                    }
                    </ScrollView>
                </View>
                <View style={{height:20}}/>    
                    <TouchableOpacity style={{
                        backgroundColor:"#33c37d",
                        width:width-40,
                        alignItems:'center',
                        padding:10,
                        borderRadius:5
                    }}>
                    <Text style={{
                        fontSize:24,
                        fontWeight:'bold',
                        color:"white",
                    }}>注文に進む</Text>  
                    </TouchableOpacity> 
                <View style={{height:10}} />             
            </View>
        );
    }
    
}