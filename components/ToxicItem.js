import { Alert, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon, { Icons } from '../res/Icon';

export default function ToxicItem({toxic, navigation, isDeleting, onDelete}) {
  // const prevent = ()=>{
  //   onDelete(toxic);
  // };
  const prevent = ()=> Alert.alert(`Delete \"${toxic.name}\" ?`, "", [
    {text:'YES', onPress: ()=>{onDelete(toxic)}},
    {text:'NO'},
  ]);
    return (
      <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate('Read', toxic)}}>
          <View>
            <Icon id={toxic.dushnila?'bad':'good'}/>
          </View>
          <View style={styles.boxText}>
            <Text style={styles.text}>
              {toxic.name}</Text>
          </View>
          <View style={styles.boxToxic}>
            <TouchableWithoutFeedback onPress={isDeleting ? prevent: null}>
             <Icon id={isDeleting?'basket': toxic.toxic>=75?'toxic':''}/>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  box:{
    height: 50,
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 0.3,
    borderBottomColor: '#000',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxText: {
    marginLeft: 16,
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
  boxToxic: {
    justifyContent: 'flex-end',
    marginLeft: 'auto'
  },

  });