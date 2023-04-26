import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, ScrollView,Text, Button} from "react-native";
import HeaderSecond from "../components/HeaderSecond";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from "../res/Icon";
import FormRead from "../components/FormRead";
import BoxSliderRead from "../components/BoxSliderRead";
import BoxCheckBoxRead from "../components/BoxCheckBoxRead";
import ZodiacSign from "../components/ZodiacSign";
import ItemOfMatrices from "../components/ItemOfMatrices";
import { useState } from "react";

export default function Read({ navigation, route }) {
  const toxic = route.params;
  const onClick = () => {
    navigation.navigate("Main");
    console.log(toxic.birth);
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <HeaderSecond
        onEdit={() => navigation.navigate("Create", toxic)}
        title={toxic.name}
        data={toxic}
      />
      <View style={styles.mainIcon}>
        <Icon id={"main"} />
      </View>
      <FormRead value="Nickname" data={toxic.name} />
      <FormRead value="DOB" data={toxic.birth.toDateString()} />

      <ZodiacSign data={toxic.birth}/>

      <View style={styles.boxText}>
      <Text style={styles.text}>
        Matrix of Destiny
      </Text>
      </View>


      <Button
      title="getting data">

      </Button>


      <ItemOfMatrices nameQuality={'karma'} quality={'value karma'} levelQuality={'1'}/>
      <ItemOfMatrices nameQuality={'karma'} quality={'value karma'} levelQuality={'2'}/>
      <ItemOfMatrices nameQuality={'karma'} quality={'value karma'} levelQuality={'3'}/>
      <ItemOfMatrices nameQuality={'karma'} quality={'value karma'} levelQuality={'4'}/>

      <BoxSliderRead data={toxic.toxic} />
      <BoxCheckBoxRead data={toxic.dushnila} />

      <View style={{ flex: 1 }} />
      <TouchableHighlight
        style={styles.boxButton}
        onPress={() => onClick()}
      >
        <Icon id={"checkmark"} />
      </TouchableHighlight>

      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    // marginTop: "auto",
    marginTop: 10,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText:{
    //backgroundColor:'yellow',
    height: 20,
    marginHorizontal: 20,
    marginTop: 10,
    //flexDirection:'row',
    justifyContent: 'center',
  },
  text:{
    color: '#5141AC',
    fontSize: 16
  },
});
