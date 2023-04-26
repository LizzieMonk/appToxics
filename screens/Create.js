import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import HeaderSecond from "../components/HeaderSecond";
import Form from "../components/Form";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from "../res/Icon";
import BoxSlider from "../components/BoxSlider";
import BoxCheckBox from "../components/BoxCheckBox";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { toxicState } from "../states/toxicState";
import DateField from 'react-native-datefield';
import Calendar from "../components/Calendar";

export default function Create({ navigation, route }) {
  const toxicToUpdate = route.params;
  const [toxics, setToxics] = useRecoilState(toxicState);
  const [newToxic, setNewToxic] = useState(
    toxicToUpdate
      ? toxicToUpdate
      : {
          name: "",
          birth: "",
          toxic: 10,
          dushnila: false,
        }
  );

  const onSubmit = () => {
    if (toxicToUpdate) {
      setToxics(
        toxics.map((t) => (t.name === toxicToUpdate.name ? newToxic : t))
      );
    } else {
      // console.log(newToxic.name);
      // newToxic.name? setNewToxic({ ...newToxic, name:'no name' }):'';
      // console.log(newToxic.name);
      setToxics([newToxic, ...toxics]);
    }
    navigation.navigate("Main");
  };

  const onSubmitDate =(value)=>{
    console.log(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="FFFFFFFFFFFFFFF: " style={{backgroundColor:'red'}} onPress={()=>{console.log("rere")}}></Button> */}

      <HeaderSecond
        navigation={navigation}
        title={toxicToUpdate ? toxicToUpdate.name : "Create"}
        data={""}
      />

      <View style={styles.mainIcon}>
        <Icon id={"main"} />
      </View>
     
      <Form
        value={newToxic.name}
        placeholder="Кузя1998"
        label="Nickname"
        onChange={(name) => setNewToxic({ ...newToxic, name })}
      />
      <Calendar
        value={newToxic.birth}
        label="DOB"
        placeholder="25.05.1998"
        onChange={(birthday) => setNewToxic({ ...newToxic, birth: birthday })}
      />

      {/* <Form
        value={newToxic.birth}
        label="DOB"
        placeholder="25.05.1998"
        onChange={(birthday) => setNewToxic({ ...newToxic, birth: birthday })}
      /> */}

      


      <BoxSlider
        value={newToxic.toxic}
        onChange={(percent) => setNewToxic({ ...newToxic, toxic: percent })}
      />

      <BoxCheckBox
        value={newToxic.dushnila}
        onChange={(isDushnila) =>
          setNewToxic({ ...newToxic, dushnila: isDushnila })
        }
      />
      <View style={{ flex: 1 }} />
      <TouchableHighlight style={styles.boxButton} onPress={() => onSubmit()}>
        <Icon id={"checkmark"} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //position: 'relative',
  },
  mainIcon: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  boxButton: {
    backgroundColor: "#5141AC",
    height: 50,
    borderRadius: 30,
    marginHorizontal: 20,
    marginTop: "auto",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    //alignSelf: 'flex-end'
    // position: 'absolute',
    // bottom: 0
  },
});
