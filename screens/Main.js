import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Button, FlatList, TouchableHighlight} from 'react-native';
import HeaderMain from '../components/HeaderMain';
import ItemOfList from '../components/ToxicItem';
import Icon from '../res/Icon';
import { useRecoilState } from 'recoil';
import { toxicState } from '../states/toxicState';

export default function Main( {navigation, route} ) {
  const [toxics, setToxics] = useRecoilState(toxicState);
  const head ={
    header: 'TOXICS',
    edit: 'delete'
  }
  const [isDeleting, setIsDeleting] = useState(false);

  const onDeleteSelect =()=>{
    setIsDeleting(!isDeleting);
  };

  const deleteToxic = (elem)=>{
      setToxics((list)=>{
        return list.filter(listOfItems=>listOfItems!=elem);
      })
  };

  // const updateToxic =()=>{
  //   console.log(route.params.newItem.name);
  //   console.log(route.params.oldItem.name);
  //   setToxics((list)=>{
  //     return [
  //       route.params.newItem,
  //       ...list.filter(listOfItems=>listOfItems!=route.params.oldItem)
  //     ]
  //   })
  // };

  return (
    <SafeAreaView style={styles.container}>

      <HeaderMain values={head} navigation={navigation} onDeleteSelect={onDeleteSelect}/>

      <FlatList data={toxics} renderItem={({item})=> (
        <ItemOfList toxic={item} navigation={navigation} isDeleting={isDeleting} onDelete={deleteToxic}/>
      )}>
      </FlatList>

      {/* <Button title="Update" onPress={()=>{updateToxic()}}/> */}
      <TouchableHighlight style={styles.boxButton} onPress={()=> navigation.navigate('Create')}>
        <Icon id={'plus'}/>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  boxButton: {
    position: 'absolute',
    backgroundColor: '#5141AC',
    height: 70, 
    width: 70,
    borderRadius: 50,
    right: 0,
    bottom: 0,
    marginBottom: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
