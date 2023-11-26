import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://192.168.18.149:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 250, height: 150 }}
          source={require("../assets/images/logo-black.png")}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{}}>
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>Sign-up</Text>
        </View>
        <View style={{ marginTop: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 5,
              borderWidth: 1,
              gap: 10,
              borderColor: "grey",
            }}
          >
            <Ionicons
              style={{ marginLeft: 10 }}
              name={"person-outline"}
              size={24}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{ width: 300 }}
              placeholder="Name"
            />
          </View>
        </View>
        <View style={{ marginTop: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 5,
              borderWidth: 1,
              gap: 10,
              borderColor: "grey",
            }}
          >
            <Ionicons
              style={{ marginLeft: 10 }}
              name={"mail-outline"}
              size={24}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ width: 300 }}
              placeholder="Email"
            />
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 5,
              borderWidth: 1,
              gap: 10,
              borderColor: "grey",
            }}
          >
            <Ionicons
              style={{ marginLeft: 10 }}
              name={"lock-closed-outline"}
              size={24}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{ width: 300 }}
              placeholder="Password"
            />
          </View>
        </View>
        <View>
          <Pressable
            onPress={handleRegister}
            style={{
              marginTop: 24,
              backgroundColor: "black",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Sign-up
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 24,
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Log-in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegistrationPage;
