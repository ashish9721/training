
import React from 'react';
import { View, Image, Text } from 'react-native';
import { vh, vw, DesignWidth } from '../Constants';
import { isIos } from '../Utils/helper'

export const History = (props)=>{

    return(<View style={{ flexDirection: "row", justifyContent: 'space-between', paddingTop: vh(5) }}>
    <View >
        <Text style={{ color: 'black', fontSize: 14 }}>Add Relative</Text>
        <Text style={{ color: 'gray', marginTop: vh(5) }}>{props.date}</Text>
    </View>
    <View >
        <Text style={{ color: 'red', }}>{props.money}VND</Text>
    </View>
</View>)
}