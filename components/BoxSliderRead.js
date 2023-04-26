import { StyleSheet, View, Text} from 'react-native';
import Icon from '../res/Icon';


export default function BoxSliderRead({data, border}) {
   
    return (
        <View style={styles.box}>
        <View style={styles.boxHeadline}>
        <Text style={styles.headline}>
            Degree of toxicity</Text>
        </View>
        <View style={styles.boxValue}> 
            <Text style={styles.textValue}>
                {data} %</Text>
            <Icon id={'toxic'}/>
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
    borderWidth: 0.3,
    borderBottomColor: '#000',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
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
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 'auto',
    },
    textValue:{
        fontSize: 16,
        marginRight:5,
    },

  });
