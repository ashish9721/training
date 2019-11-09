import React from 'react';
import { View, Image, Text } from 'react-native';
import { vh, vw, DesignWidth } from '../Constants';
import { isIos } from '../Utils/helper'

export const Relatives = (props) => {
    return (props.checked ?
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../Assets/ictab4active2x.png')} />
            <Image style={{ position: 'absolute', marginTop: vh(30), marginLeft: vw(10) }} source={require('../Assets/icaccept2x.png')} />
            <Text style={{ paddingTop: vh(10) }}>{props.txt}</Text>
        </View>
        :
        <View style={{ alignItems: 'center' }}>
            <Image style={{ width: vw(50), height: vh(50) }} source={require('../Assets/ic-more3x.png')} />
            <Text style={{ paddingTop: vh(2) }}>{props.txt}</Text>
        </View>

    )

}