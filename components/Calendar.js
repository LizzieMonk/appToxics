import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, View, Image, Text } from "react-native";
import DateField from 'react-native-datefield';

export default function Calendar({ placeholder, label, value, onChange }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxHeadline}>
        <Text style={styles.headline}>{label}</Text>
      </View>
      <View>
      <DateField
        defaultValue={value}
        onSubmit={onChange}
        labelDate="25"
        labelMonth="05"
        labelYear="1998"
        containerStyle={styles.calendar}
        styleInput={styles.basicText}
        />      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    //backgroundColor: 'yellow',
    height: 60,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "column",
  },
  boxHeadline: {
    height: 20,
    justifyContent: "center",
  },
  headline: {
    color: "#5141AC",
    fontSize: 16,
  },
  basicText: {
    fontSize: 16,
  },
  calendar: {
    //backgroundColor:'red',
    marginHorizontal:40,
    height:40,
    borderWidth: 0.3,
    borderBottomColor: "#000",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderTopColor: "#fff",
    justifyContent:'space-around'
  },
});
