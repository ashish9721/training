import React from 'react';
import { Text, Image, Dimensions, View, StyleSheet, SafeAreaView } from 'react-native';
import { vh, vw, DesignWidth } from '../Constants';
import { isIos } from '../Utils'
import { Relatives } from './relatives'
import { History } from './history'
import HandB from './h&b';
import CandT from './c&t';
import BTC from './btc';
export default class Screen1 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.imageview1}>
                        <Image style={styles.container1image1} source={require('../Assets/ictab4active2x.png')} />
                    </View>
                    <View style={styles.container1txtcontainer}>
                        <Text style={styles.txt1}>Marcus</Text>
                        <Text style={styles.txt2}>Level 3</Text>
                    </View>
                    <View style={styles.imageview2}>
                        <Image style={styles.cloudimg}
                            source={require('../Assets/ic_cloud2x.png')}
                            resizeMethod="resize"
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.container2txtcontainer}>
                            <Text style={styles.container2txt1}>Health Insurance</Text>
                            <View style={styles.container2txt2cardview}>
                                <Text style={styles.container2txt2}>Card Details<Text style={{ fontSize: 20 }}> ></Text> </Text>
                            </View>
                        </View>
                        <View style={styles.balanceContainer}>
                            <View >
                                <Text style={styles.balanceUsed}>Balance</Text>
                                <Text style={styles.balancetxt}>2.000.000VND</Text>
                            </View>
                            <View >
                                <Text style={styles.balanceUsed}>Balance Used</Text>
                                <Text style={styles.balancetxt}>2.000.000VND</Text>
                            </View>
                        </View>
                        <View style={styles.relatives}>
                            <Text style={styles.balanceUsed}>Relatives</Text>
                            <View style={styles.relativescontainer}>
                                <Relatives txt={"wife"} checked={true} />
                                <Relatives txt={"Child"} checked={true} />
                                <Relatives txt={"add"} checked={false} />
                                <Relatives txt={"add"} checked={false} />
                                <View style={{ borderWidth: 1, borderColor: 'gray' }} ></View>
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Image style={{ width: vw(40), height: vh(40) }} source={require('../Assets/ic-transfer3x.png')} />
                                    <Text style={{ paddingTop: vh(2) }}>Benefits transfer</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingBottom: vh(80) }}>
                            <View style={styles.historycontainer}>
                                <Text style={styles.balanceUsed}>History</Text>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                                    <Text style={{ color: 'gray' }}>See all</Text>
                                </View>
                            </View>
                            <History date={"13/06/2019"} money={"4.000.000"} />

                            <History date={"11/06/2019"} money={"4.000.000"} />
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <HandB money={"4.000.000"} />
                    </View>
                    <View style={styles.container4}>
                        <CandT money={"4.000.000"} />
                    </View>
                    <View style={styles.container5}>
                        <BTC money={"4.000.000"} />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    container1: {
        height: vh(150),
        backgroundColor: "#12876f",
        width: vw(DesignWidth),
        paddingTop: vh(50),
        flexDirection: 'row',
        paddingLeft: vw(22),
        zIndex: 0
    },
    imageview1: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vh(25),
        borderColor: 'white',
        borderWidth: 2,
        height: vh(50),
        width: vh(50),

    },
    txt1: {
        color: 'white',
        fontFamily: "CircularStd-Book",
        fontSize: 20
    },
    txt2: {
        color: '#6db6a7',
        fontFamily: "CircularStd-Book",
        fontSize: 14
    },
    container1txtcontainer: {
        marginLeft: vw(10)
    },
    relatives:{ paddingBottom: vh(10), paddingTop: vh(10) },

    imageview2: {
        zIndex: 2,
        position: 'absolute',
        top: vh(isIos ? 60 : 38),
        right: 0
        // height: vw(130),
        // width:vw(274),
        //    marginLeft:vw(150)
    },
    container2: {
        backgroundColor: 'white',
        width: vw(DesignWidth),
        zIndex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

        position: 'absolute',
        marginTop: vh(135),
        paddingLeft: vw(10),
        paddingRight: vw(10)

    },
    container2txtcontainer: {
        justifyContent: 'space-between',
        marginTop: vh(20),
        flexDirection: 'row',
        paddingTop: vh(8),

    },
    container2txt1: {
        fontFamily: "CircularStd-Book",
        fontSize: 20,

    },
    balanceUsed:{ color: '#c8a398', fontSize: 16 },
    cloudimg:{ width: vw(150), height: vw(90) },
    container2txt2: {
        color: 'white',
        fontFamily: "CircularStd-Book",
        fontSize: 16,

    },
    container2txt2cardview: {
        backgroundColor: '#12876f',
        borderRadius: 20,
        padding: 5,
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    balancetxt: { color: '#1f8e78', fontSize: 20, fontWeight: 'bold', fontFamily: "CircularStd-Book", paddingTop: vh(5) },
    container3: {
        backgroundColor: '#fecbd6',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
        width: vw(DesignWidth),
        zIndex: 3,
        position: 'absolute',
        marginTop: vh(570)

    },
    container4: {
        backgroundColor: '#0b4052',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
        width: vw(DesignWidth),
        zIndex: 3,
        position: 'absolute',
        marginTop: vh(620)

    },
    balanceContainer:{ flexDirection: "row", justifyContent: 'space-between', paddingTop: vh(10), paddingBottom: vh(10) },
    container5: {
        backgroundColor: '#f8decf',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
        width: vw(DesignWidth),
        zIndex: 3,
        position: 'absolute',
        marginTop: vh(670)
    },
    headerflexforbackground: { backgroundColor: "#12876f", height: vh(50) },
    historycontainer:{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: vh(2) },
    relativescontainer:{ flexDirection: "row", justifyContent: 'space-between', paddingTop: vh(10) }
})