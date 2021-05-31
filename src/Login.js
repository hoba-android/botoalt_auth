import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async () => {
    const respoonse = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYV3YrSkQwgZXJrqwpCPNVQC9nzQB3m7c",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!respoonse.ok) {
      const erroeResData = await respoonse.json();
      const errId = erroeResData.error.message;
      var msg = "This email could not be found";
      setError(msg);
      if (errId == "EMAIL_NOT_FOUND") {
        setError(msg);
      } else if (errId == "INVALID_PASSWORD") {
        msg = "The password is invalid";
        setError(msg);
      }
      console.log(errId);
      throw new Error(msg);
    }

    const data = await respoonse.json();
    const token = data.idToken;
    console.log(token);
    props.navigation.navigate("Dummy");
    setError("");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontFamily: "CairoBold" }}>تسجيل دخول</Text>

      <TextInput
        style={styles.input2}
        placeholder="البريد الالكتروني"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input2}
        placeholder="كلمة المرور"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <TouchableOpacity style={styles.loginButton} onPress={signIn}>
        <Text
          style={{ fontSize: 20, fontFamily: "CairoRegular", color: "white" }}
        >
          دخول
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "75%",
          marginVertical: 10,
        }}
      >
        <View style={styles.hor} />
        <Text style={{ fontSize: 20, fontFamily: "CairoRegular" }}>أو</Text>
        <View style={styles.hor} />
      </View>

      <TouchableOpacity
        style={styles.newButton}
        onPress={() => props.navigation.navigate("SingUP")}
      >
        <Text
          style={{ fontSize: 20, fontFamily: "CairoRegular", color: "white" }}
        >
          تسجيل حساب جديد
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Text
          style={{ fontSize: 20, fontFamily: "CairoRegular", color: "white" }}
        >
          تسجيل بحساب فيسبوك
        </Text>
        <FontAwesome
          name="facebook"
          size={24}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text
          style={{ fontSize: 20, fontFamily: "CairoRegular", color: "white" }}
        >
          تسجيل بحساب جوجل
        </Text>
        <AntDesign
          name="google"
          size={24}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  input1: {
    width: "40%",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: "lightgrey",
    padding: 7,
    marginVertical: 10,
    fontFamily: "CairoRegular",
  },
  input2: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: "lightgrey",
    padding: 7,
    marginVertical: 10,
    fontFamily: "CairoRegular",
  },
  loginButton: {
    width: "80%",
    height: 45,

    borderRadius: 25,
    backgroundColor: "#388bcb",
    padding: 7,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  newButton: {
    width: "80%",
    height: 45,

    borderRadius: 25,
    backgroundColor: "black",
    padding: 7,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  facebookButton: {
    width: "80%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 25,
    backgroundColor: "#4267b2",
    padding: 7,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
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
  hor: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    width: "40%",
  },
});
