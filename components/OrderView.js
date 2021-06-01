import React,{useState} from 'react';
import{
    View,Text,StyleSheet,TextInput, TouchableOpacity,Modal,SafeAreaView
} from 'react-native';
import {ModalPicker} from '../screen/ModalPicker'

 const OrderView=()=>{ 
    const [chooseData, setchooseData] = useState('....');
    const [isModalVisible, setisModalVisible] = useState(false);
    const changeModalVisibility=(bool) =>{
        setisModalVisible(bool)
    }
    const setData = (option) => {
        setchooseData(option)
    }
        return(
            <View style={{flex:1}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{ marginTop:15,fontSize:20}}>お届け先</Text>
                </View>   
                <View style={{marginBottom:20,marginTop:40}}>
                    <Text style={{fontSize:16,marginLeft:10}}>お名前 : </Text>
                </View> 
                <View style={{marginBottom:20,marginTop:15}}>
                    <Text style={{fontSize:16,marginLeft:10}}>電話番号 : </Text>
                </View> 
                <View style={{marginBottom:20,marginTop:15}}>
                    <Text style={{fontSize:16,marginLeft:10}}>お届け先 : </Text>
                </View>
                <TouchableOpacity style={{backgroundColor:'#4CAF50',alignItems:'center',width:150,padding:7,marginLeft:200,borderRadius:5,marginTop:15}} onPress={()=>{alert('this is asa')}}>
                        <View>
                            <Text style={{color:'white',fontSize:12}}>お届け先変更</Text>
                        </View>
                </TouchableOpacity>  
                <TouchableOpacity style={{backgroundColor:'#4CAF50',alignItems:'center',width:150,padding:7,marginLeft:200,marginTop:10,borderRadius:5}} onPress={()=>{alert('this is asa')}}>
                        <View>
                            <Text style={{color:'white',fontSize:12}}>新しお届け先の追加</Text>
                        </View>
                </TouchableOpacity>  
                <View style={{marginBottom:5,marginTop:15}}>
                    <Text style={{fontSize:16,marginLeft:10}}>配送タイプ </Text>
                </View>
                <SafeAreaView >
                    <TouchableOpacity 
                    onPress={()=>changeModalVisibility(true)}
                    style={styles.touchableOpacity}>
                        <Text style={styles.text}>{chooseData}</Text>
                    </TouchableOpacity>
                    <Modal 
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible}
                        nRequestClose={()=>changeModalVisibility(false)}>
                         <ModalPicker 
                         changeModalVisibility={changeModalVisibility}
                         setData={setData}
                         />   
                    </Modal>
                </SafeAreaView>
                <View style={{marginBottom:5,marginTop:10}}>
                    <Text style={{fontSize:16,marginLeft:15}}>発送希望日</Text>
                </View>

            </View>
        )
    }


const styles = StyleSheet.create({
    container: { 
    // paddingHorizontal:10,
    // backgroundColor:'rgba(0,0,0,0.2)',
    // borderRadius:10,
    // marginBottom:50,
    },
    text:{
        marginVertical:10,
        fontSize:14,
    },
    touchableOpacity:{
        backgroundColor:'#BEBEBE',
        alignSelf:'stretch',
        paddingHorizontal:20,
        width:350,
        marginLeft:10,
        borderRadius:5,
    }
})
export default OrderView;