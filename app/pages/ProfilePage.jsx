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
      <Text>Welcome {user?.name}</Text>
      <Pressable onPress={logout} style={{padding:20}}>
        <Text style={{fontSize:24, textAlign:"right"}} onPress={logout}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
