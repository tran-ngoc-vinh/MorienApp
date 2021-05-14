import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, ScrollView, 
    Dimensions, StyleSheet, Image ,FlatList
} from 'react-native';

import { Item } from 'react-native-paper/lib/typescript/components/List/List';

import sp1 from '../images/fb.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
        product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct, 
            } = styles;
        return (
            <View style={wrapper}>
                <ScrollView style={main}>
                    <TouchableOpacity style={checkoutButton} onPress>
                        <Text style={checkoutTitle}>注文に進む</Text>
                    </TouchableOpacity> 
                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={[mainRight]}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={txtName}>{toTitleCase('Ten San Pham')}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={txtPrice}>サイズ：</Text>
                            </View>
                            <View style={productController}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text style={{fontFamily:'Avenir',color:'black',fontSize:20,}}>+</Text>
                                    </TouchableOpacity>
                                    <Text style={{fontFamily:'Avenir',color:'black',fontSize:20,}}>{3}</Text>
                                    <TouchableOpacity>
                                        <Text style={{fontFamily:'Avenir',color:'black',fontSize:20,}}>-</Text>
                                    </TouchableOpacity>
                                </View>
                               
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={[mainRight]}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={txtName}>{toTitleCase('black of the')}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={txtPrice}>{100}$</Text>
                            </View>
                            <View style={productController}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <Text>{3}</Text>
                                    <TouchableOpacity>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={[mainRight]}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={txtName}>{toTitleCase('black of the')}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={txtPrice}>{100}$</Text>
                            </View>
                            <View style={productController}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <Text>{3}</Text>
                                    <TouchableOpacity>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={product}>
                        <Image source={sp1} style={productImage} />
                        <View style={[mainRight]}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={txtName}>{toTitleCase('black of the')}</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={txtPrice}>{100}$</Text>
                            </View>
                            <View style={productController}>
                                <View style={numberOfProduct}>
                                    <TouchableOpacity>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <Text>{3}</Text>
                                    <TouchableOpacity>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                </View>
                            
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25

    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },

});

export default CartView;