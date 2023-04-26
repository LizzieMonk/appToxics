import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Icon from "../res/Icon";
import Create from "../screens/Create";

export default function HeaderSecond({ title, data, onEdit }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.arrow}
        onPress={() => navigation.goBack()}
      >
        <Icon id={"arrow"} />
      </TouchableWithoutFeedback>
      <Text style={styles.nameScreen}>{title}</Text>
      <View style={{ flex: 1 }} />
      {onEdit && (
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.edit}>edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#5141AC",
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginLeft: 20,
  },
  nameScreen: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    marginLeft: 20,
  },
  edit: {
    color: "white",
    fontSize: 20,
    letterSpacing: 1,
    textDecorationLine: "underline",
    marginLeft: "auto",
    marginRight: 20,
  },
});
