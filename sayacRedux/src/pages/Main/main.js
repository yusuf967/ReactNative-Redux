import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as $ from '../../redux/action/action';

function main(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center',justifyContent:'center',flexDirection:'row'}}>
            <TouchableOpacity onPress={() => {props.counterDec() }} style={{height:20,width:20,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize:17,marginRight:'5%',marginLeft:'5%'}}>Sayaç:{props.counter}</Text>
            <TouchableOpacity onPress={() => { props.counterInc() }} style={{height:20,width:20,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20}}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const getState = (state, props) => {
    const { counter } = state.count
    return { counter }
}

const getStateMath = (dispatch, props) => ({
    counterDec: () => {
        dispatch({
            type: $.DECREMENT
        })
    },
        counterInc: () => {
            dispatch({
                type: $.INCREMENT
            })
        },
})

export default connect(getState, getStateMath)(main);