import { useState } from 'react';
import { StyleSheet, View, Text,} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon, { Icons } from '../res/Icon';
import { useRecoilState } from 'recoil';
import { draw } from '../states/toxicState';

export default function ItemOfMatrices({nameQuality, quality, levelQuality}) {

    const [redraw, setRedraw] = useState(true);
    //const [redraw, setRedraw] = useRecoilState(draw);
    const onClick = ()=>{
        setRedraw(!redraw);
        //console.log(redraw)
    }

    return (
        redraw?
        <TouchableOpacity style={styles.box} 
        onPress={onClick}>
        <View style={styles.circle}>
            <Text style={styles.headline}>
                {levelQuality}
            </Text>
        </View>
        <View style={styles.boxHeadline}>
            <Text style={styles.headline}>
            {nameQuality}</Text>
        </View>
        <View style={styles.boxArrow}> 
            <Icon id={Icons.expand}/>
        </View>   
        </TouchableOpacity>
        :
        <View>
        <TouchableOpacity style={styles.box} 
        onPress={onClick}>
            <View style={styles.circle}>
            <Text style={styles.headline}>
                {levelQuality}
            </Text>
        </View>
        <View style={styles.boxHeadline}>
            <Text style={styles.headline}>
            {nameQuality}</Text>
        </View>
        <View style={styles.boxArrow}> 
            <Icon id={Icons.collapse}/>
        </View> 
        </TouchableOpacity>

        <View style={styles.boxQuality}>
            <Text style={styles.quality}>
                {quality}
            </Text>
        </View>
        </View>
        
    ); 
}

const styles = StyleSheet.create({
    box:{
        //backgroundColor:'yellow',
        height: 50,
        marginHorizontal: 20,
        marginTop: 10,
        flexDirection:'row',
        borderBottomWidth: 0.3,
        borderBottomColor: '#000',
    },
    boxHeadline:{
        height: 50,
        justifyContent: 'center',
        marginLeft: 10,
    },
    headline:{
        color: '#000',
        fontSize: 16
    },
    boxArrow:{
        //backgroundColor: 'red',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    boxQuality:{
        backgroundColor:'#DFDAFF',
        marginHorizontal:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    quality:{
        fontSize:16,
        padding:10
    },
    circle:{
        borderWidth:1,
        height:30,
        width:30,
        marginTop:10,
        justifyContent:'center',
        borderRadius: 30,
        alignItems:'center',
    },
})
