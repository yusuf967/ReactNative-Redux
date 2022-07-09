import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as $ from '../../redux/action/action';

function Main({ navigation, props }) {

    const { name } = useSelector(state => state.names)
    const dispatch = useDispatch();
    function goSecond() {
        navigation.navigate("SecondPages");
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TextInput placeholder='Lütfen isim giriniz.' onChangeText={(value) => dispatch($.setName(value))}/>
            <TouchableOpacity onPress={goSecond} style={{ height: 45, width: 80, borderWidth: 1, borderColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>TIKLA</Text>
            </TouchableOpacity>
        </View>
    );
}


export default (Main);