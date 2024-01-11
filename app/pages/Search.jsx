import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import SearchFilter from "../components/SearchFilter";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const words = [
    {
      name: "Fan Installation/repair",
      id: 1,
    },
    {
      name: "Wiring and Rewiring",
      id: 2,
    },
    {
      name: "Lighting Intallation",
      id: 3,
    },
    {
      name: "Lubrication Services",
      id: 4,
    },
    {
      name: "Wear and Tear Analysis",
      id: 5,
    },
    {
      name: "Emergency Repairs",
      id: 6,
    },
    {
      name: "Predictive Analytics",
      id: 7,
    },
    {
      name: "Performance Metrics",
      id: 8,
    },
    {
      name: "Capacity Analysis",
      id: 9,
    },
    {
      name: "Efficiency Metrics",
      id: 10,
    },
  ];
  const [text, setText] = React.useState("");
  console.log(text);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 1 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#c9ada7",
            padding: 10,
            flexDirection: "row",
            align: "center",
          }}
        >
          <Pressable
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 20,
              height: 40,
              flex: 1,
              width: "95%",
            }}
          >
            <AntDesign
              style={{ marginLeft: 1, marginRight: 4 }}
              name="search1"
              size={24}
              color="black"
            />
            <TextInput
              value={text}
              onChangeText={(text) => setText(text)}
              style={{ fontSize: 20, width: "90%", outlineStyle: "none" }}
              placeholder="Search !"
              clearButtonMode="always"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Ionicons name="person-circle-outline" size={36} color="black" />
          </Pressable>
        </View>
        <View style={{ fontSize: 20, backgroundColor: "white" }}>
          <SearchFilter data={words} input={text} setInput={setText} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
