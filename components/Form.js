import { StyleSheet, TextInput, View, Text } from "react-native";

export default function Form({ placeholder, label, value, onChange }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxHeadline}>
        <Text style={styles.headline}>{label}</Text>
      </View>
      <View style={styles.boxBasicText}>
        <TextInput
          value={value}
          style={styles.basicText}
          onChangeText={onChange}
          placeholder={placeholder}
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
