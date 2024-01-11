import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Corousel from "../components/Corousel";
import { AntDesign } from "@expo/vector-icons";

const ServiceDetailsPage1 = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  console.log(text);
  const ServiceData = [
    {
      id: "1",
      title: "Fan installation/repair",
      amount: "399",
      time: "30",
    },
    {
      id: "2",
      title: "Wiring and Rewiring",
      amount: "699",
      time: "30",
    },
    {
      id: "3",
      title: "Lighting Installation",
      amount: "499",
      time: "30",
    },
    {
      id: "4",
      title: "Lighting Installation",
      amount: "599",
      time: "30",
    },
  ];
  const handleAddClick = (item) => {
    navigation.navigate("Cart", { item });
  };
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 10 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View>
          <Text style={{ padding: 20, fontSize: 30, fontWeight: "bold" }}>
            Electrical Repair
          </Text>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FlatList
              data={ServiceData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "#f2e9e4",
                      paddingVertical: 20,
                      width: 370,
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginTop: 10,
                      borderRadius: 20,
                      alignContent: "center",
                      marginHorizontal: 15,
                      marginBottom: 10,
                      flexDirection: "row",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          padding: 5,
                          fontSize: 20,
                          fontWeight: "bold",
                          marginLeft: 20,
                        }}
                      >
                        {item.title}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            padding: 5,
                            fontSize: 15,
                            marginLeft: 20,
                          }}
                        >
                          Rs. {item.amount}
                        </Text>

                        <Text
                          style={{
                            padding: 5,
                            fontSize: 15,
                            marginLeft: 20,
                          }}
                        >
                          : {item.time} mins
                        </Text>
                      </View>
                    </View>
                    {/**for add item */}
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        paddingVertical: 1,
                        width: 100,
                        justifyContent: "",
                        alignItems: "center",
                        marginTop: 10,
                        borderRadius: 90,
                        alignContent: "center",
                        marginHorizontal: 15,
                        marginBottom: 10,
                      }}
                    >
                      <AntDesign
                        onPress={() => handleAddClick(item)}
                        style={{ padding: 10 }}
                        name="pluscircleo"
                        size={24}
                        color="black"
                      />
                      <Text onPress={() => handleAddClick(item)}>Add</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceDetailsPage1;

const styles = StyleSheet.create({});
