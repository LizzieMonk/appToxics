import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function FormRead({ value, data }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxHeadline}>
        <Text style={styles.headline}>{value}</Text>
      </View>
      <View style={styles.boxBasicText}>
        <Text style={styles.basicText}>{data}</Text>
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
    borderWidth: 0.3,
    borderBottomColor: "#000",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderTopColor: "#fff",

    flexDirection: "column",
    // justifyContent: 'space-around',
    //alignItems: 'center',
  },
  boxHeadline: {
    height: 20,
    justifyContent: "center",
  },
  headline: {
    color: "#5141AC",
    fontSize: 16,
  },
  boxBasicText: {
    height: 40,
    justifyContent: "center",
    marginLeft: 10,
  },
  basicText: {
    fontSize: 16,
  },
});
