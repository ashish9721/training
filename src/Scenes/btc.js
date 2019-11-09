import React from 'react';
import { View, Image, Text } from 'react-native';
import { vh, vw, DesignWidth } from '../Constants';
import { isIos } from '../Utils/helper'

export default class BTC extends React.Component{
    constructor(props){
        super(props)
    
    }
render(){
    return(<View style={{ paddingTop: vh(20), paddingBottom: vh(10), paddingLeft: vw(20), paddingRight: vw(20), height: vh(100) }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Business Trip Cost</Text>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>{this.props.money}VND</Text>
    </View>

</View>)
}

}