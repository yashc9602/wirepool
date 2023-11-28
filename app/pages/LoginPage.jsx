import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://192.168.0.102:8000/login", user)

      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
      });
  };
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
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>Log-in</Text>
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
            onPress={handleLogin}
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
              Log-in
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
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
              Sign-up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
