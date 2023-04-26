import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

export default function BoxSlider({ onChange, value }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxHeadline}>
        <Text style={styles.headline}>Degree of toxicity</Text>
      </View>
      <View style={styles.boxSlider}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="#16CCD9"
          maximumTrackTintColor="#AFAFAF"
          value={value}
          thumbTintColor="#16CCD9"
          onValueChange={onChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 60,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "column",
  },
  boxHeadline: {
    height: 20,
    justifyContent: "center",
    marginTop: 10,
  },
  headline: {
    color: "#5141AC",
    fontSize: 16,
  },
  boxSlider: {
    height: 30,
    justifyContent: "flex-start",
  },
});
