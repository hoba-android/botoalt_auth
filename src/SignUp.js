import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontFamily: "CairoBold" }}>
        إنشاء حساب جديد
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={styles.input1}
          placeholder="الاسم الأول"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input1}
          placeholder="الاسم الثاني"
          value={lastName}
          onChangeText={setLasttName}
        />
      </View>

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
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input2}
        placeholder="تأكيد كلمة المرور"
        value={password2}
        onChangeText={setPassword2}
        secureTextEntry={true}
      />
      <Text style={{ fontSize: 16, fontFamily: "CairoRegular", color: "grey" }}>
        باشتراكك فإنك توافق على{" "}
        <Text style={{ color: "blue" }}>الشروط والأحكام</Text>
      </Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={{ fontSize: 20, fontFamily: "CairoRegular", color: "white" }}
        >
          تسجيل
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.newButton}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text
          style={{ fontSize: 20, fontFamily: "CairoRegular", color: "white" }}
        >
          امتلك حساب بالفعل
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

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

    borderRadius: 25,
    backgroundColor: "#d44638",
    padding: 7,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
