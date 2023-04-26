import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from '../res/Icon';

export default function BoxCheckBoxRead({data}) {
   
    return (
        <View style={styles.box}>
        <View style={styles.boxHeadline}>
        <Text style={styles.headline}>
            Dushnila</Text>
        </View>
        <View style={styles.boxValue}> 
            <Icon id={data?'bad':'good'}/>
        </View>   
      </View>
    );
}

const styles = StyleSheet.create({
    box: {
    //backgroundColor:'red',
    height: 50,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection:'row',
    },
    boxHeadline:{
        height: 50,
        justifyContent: 'center',
    },
    headline:{
        color: '#5141AC',
        fontSize: 16
    },
    boxValue:{
        // backgroundColor: 'red',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
  });