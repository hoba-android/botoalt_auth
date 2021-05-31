import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Dummy = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontFamily: "CairoRegular" }}>
        أهلا وسهلا
      </Text>
      <TouchableOpacity style={styles.googleButton}>
        <Text
          style={{ fontSize: 20, fontFamily: "CairoRegular", color: "white" }}
        >
          تسجيل خروج
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dummy;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    width: "80%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",

    borderRadius: 25,
    backgroundColor: "#d44638",
    padding: 7,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
