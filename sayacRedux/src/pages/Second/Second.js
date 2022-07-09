import React from 'react';
import { View, Text} from 'react-native';
import { useSelector} from 'react-redux';

function Second(props) {

    const {name}=useSelector(state=>state.names);

    return (
        <View style={{ flex: 1, alignItems: 'center',justifyContent:'center',flexDirection:'row'}}>
            <Text>{name}</Text>
        </View>
    );
}



export default (Second);