import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext, UserType } from "../UserContext";
import { MaterialIcons } from "@expo/vector-icons";

const ProfilePage = () => {
  const { userId, setUserId } = UserContext(UserType);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.102:8000/profile/${userId}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);

  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation.replace("Login");
  };
  return (
    <SafeAreaView>
      {/**profile pic,username and phone number*/}
      <Text
        style={{
          borderColor: "lightgrey",
          borderWidth: 1,
          height: 0,
          marginTop: 0,
        }}
      ></Text>
      <View
        style={{
          flexDirection: "row",
          alignItelocatiodisplams: "center",
          gap: 10,
          padding: 20,
          backgroundColor: "#FAE5D3",
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            backgroundColor: "white",
            marginLeft: 30,
            borderRadius: 90,
          }}
          source={require("../assets/images/logo.png")}
        />
        <View>
          <Text
            style={{
              padding: 2,
              fontSize: 23,
              fontWeight: "bold",
              marginLeft: 20,
            }}
          >
            Yash Choudhary{user?.name}
          </Text>
          <Text
            style={{
              padding: 2,
              fontSize: 18,
              fontWeight: "normal",
              marginLeft: 20,
            }}
          >
            +91 8167549081{user?.pno}
          </Text>
        </View>
      </View>
      {/**line */}
      <Text
        style={{
          borderColor: "lightgrey",
          borderWidth: 1,
          height: 0,
          marginTop: 0,
        }}
      ></Text>
      <View style={{ fontSize: 24, textAlign: "right", padding: 50 }}>
        <Text style={{ fontSize: 24, textAlign: "right", margin: 10 }}>
          Premium
        </Text>
        <Text style={{ fontSize: 24, textAlign: "right", margin: 10 }}>
          Settings
        </Text>
        <Text style={{ fontSize: 24, textAlign: "right", margin: 10 }}>
          Help & Feedback
        </Text>
        <Text style={{ fontSize: 24, textAlign: "right", margin: 10 }}>
          About
        </Text>
        <Pressable onPress={logout} style={{ padding: 17 }}>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              style={{
                fontSize: 24,
                textAlign: "right",
                marginLeft: 173,
                marginRight: 8,
              }}
              name="logout"
              size={24}
              color="black"
            />
            <Text style={{ fontSize: 24, textAlign: "right" }} onPress={logout}>
              Logout
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
        <Image
          style={{ width: 250, height: 150 }}
          source={require("../assets/images/logo-black.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
