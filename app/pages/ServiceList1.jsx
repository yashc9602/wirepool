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
  import { AntDesign } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
  import Corousel from "../components/Corousel";
  
  const ServiceList1 = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
    console.log(text);
    const ServiceData = [
      {
        id: "1",
        title: "Electrical Repair",
        paragraph:
          " Swift and efficient solutions for any electrical malfunctions, ensuring safety and functionality.",
        image:
          "https://www.collinsdictionary.com/images/full/wire_764416402.jpg",
      },
      {
        id: "2",
        title: "Wiring and Rewiring",
        paragraph: "Expert services to set up or overhaul electrical wiring systems, adhering to safety standards.",
        image:
          "https://cdn.icon-icons.com/icons2/2367/PNG/512/check_small_icon_143632.png",
      },
      {
        id: "3",
        title: "Lighting Installation",
        paragraph: "Comprehensive installations of indoor and outdoor lighting solutions for various needs.",
        image:
          "https://cdn.icon-icons.com/icons2/2367/PNG/512/check_small_icon_143632.png",
      },
      {
        id: "4",
        title: "Circuit Breaker Replacement",
        paragraph: "Professional replacement and upgrade services for circuit breakers to ensure optimal electrical safety.",
        image:
          "https://cdn.icon-icons.com/icons2/2367/PNG/512/check_small_icon_143632.png",
      },
    ];
    const handleItemClick = (item) => {
      navigation.navigate("ServiceDetailsPage1", { item });
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
              Electrical
            </Text>
            <View
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
              <FlatList
                data={ServiceData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleItemClick(item)}>
                    <View
                      style={{
                        backgroundColor: "#f2e9e4",
                        paddingVertical: 20,
                        width: 370,
                        justifyContenct: "center",
                        alignItems: "center",
                        marginTop: 10,
                        borderRadius: 20,
                        alignContent: "center",
                        marginHorizontal: 15,
                        marginBottom: 10,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: "white",
                          marginLeft: 30,
                          borderRadius: 90,
                        }}
                        source={item.image}
                      />
                      <View style={{ flexShrink: 1 }}>
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
                        <Text
                          style={{
                            padding: 10,
                            fontSize: 15,
                            marginLeft: 15,
                          }}
                        >
                          {item.paragraph}
                        </Text>
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
  
  export default ServiceList1;
  
  const styles = StyleSheet.create({});
  