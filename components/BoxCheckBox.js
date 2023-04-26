import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Checkbox from "expo-checkbox";

export default function BoxCheckBox({ value, onChange }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxHeadline}>
        <Text style={styles.headline}>Dushnila</Text>
      </View>
      <View style={styles.boxCheckBox}>
        <Checkbox
          style={styles.checkbox}
          value={value}
          onValueChange={onChange}
          color={value ? "#8EC021" : undefined}
        ></Checkbox>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  boxHeadline: {
    height: 50,
    justifyContent: "center",
  },
  headline: {
    color: "#5141AC",
    fontSize: 16,
  },
  boxCheckBox: {
    height: 50,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: 10,
  },
  checkbox: {
    height: 30,
    width: 30,
    borderRadius: 5,
    borderColor: "#AFAFAF",
  },
});
