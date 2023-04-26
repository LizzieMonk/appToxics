import { StyleSheet, View, Text, Button} from 'react-native';
import Icon from '../res/Icon';

export default function ZodiacSign({data}) {

    
async function getData() {
    const response = await fetch("https://calendar.yoip.ru/zodiac/");
    const responseText = await response.text();
    console.log(responseText);
    //console.log(data);
}

//    fetch("http://tvkrasnodar.ru/obshchestvo/2021/01/02/goroskop-dlya-znakov-zodiaka-kakim-budet-2021-god/")
//    .then(console.log()) 
   return (
        <View style={styles.box}>
        <View style={styles.boxHeadline}>
        <Text style={styles.headline}>
            Zodiac Sign</Text>
        </View>
        <View style={styles.boxValue}> 
            <Text style={styles.textValue}>
                Leo</Text>
                {/* {data}</Text> */}
            {/* <Icon id={'toxic'}/> */}
        </View>   

        <Button title='here' onPress={()=>{getData()}}></Button>
      </View>
    );
}

const styles = StyleSheet.create({
    box: {
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
