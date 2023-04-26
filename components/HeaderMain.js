import { StyleSheet, Text, View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function HeaderMain({values, onDeleteSelect}) {

  const onClick = ()=>{
    onDeleteSelect();
  }

    return (
      <View style={styles.container}>
        <Text style={styles.nameScreen}>
        {values.header}
        </Text>
        <View style={{flex: 1}} />
        <TouchableWithoutFeedback onPress={onClick}>
        <Text style={styles.edit}>
        {values.edit}
        </Text>
        </TouchableWithoutFeedback>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      backgroundColor: '#5141AC',
      flexDirection: 'row',
      alignItems: 'center',
    },
    nameScreen: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 1,
      marginLeft: 20,
    },
    edit: {
      color: 'white',
      fontSize: 20,
      letterSpacing: 1,
      textDecorationLine: 'underline',
      marginLeft: 'auto',
      marginRight: 20,
    },
    touch: {
      marginLeft: 'auto',
      marginRight: 20,
    },


  });