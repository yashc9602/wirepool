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
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SearchFilter from "../components/SearchFilter";

const Search = () => {
  const words = [
    {
      name: " Electrical",
      id: 1,
    },
    {
      name: " Consultant",
      id: 2,
    },
    {
      name: " Plumber",
      id: 3,
    },
  ];
  const [text, setText] = React.useState("");
  console.log(text);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "anderoid" ? 40 : 0,
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
          <Feather name="mic" size={24} color="black" />
        </View>
        <SearchFilter data={words} input={text} setInput={setText} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
