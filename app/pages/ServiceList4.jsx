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
  
  const ServiceList4 = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
    console.log(text);
    const ServiceData = [
      {
        id: "1",
        title: "Project Management Consultation",
        paragraph:
          "Expert guidance and strategies to effectively manage and execute projects of varying complexities.",
          image: require("../assets/images/logo.png"),
      },
      {
        id: "2",
        title: "Technical Advisory Services",
        paragraph: "Comprehensive technical advice and insights to navigate complex technological landscapes.",
        image: require("../assets/images/logo.png"),
      },
      {
        id: "3",
        title: "Business Process Consultation",
        paragraph: "Consultation services aimed at optimizing business processes for enhanced efficiency and profitability.",
        image: require("../assets/images/logo.png"),
      },
      {
        id: "4",
        title: "Equipment Procurement Guidance",
        paragraph: "Expert advice on procuring the right equipment tailored to specific business needs and objectives.",
        image: require("../assets/images/logo.png"),
      },
    ];
    const handleItemClick = (item) => {
      navigation.navigate("ServiceDetailsPage4", { item });
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
              Consultancy and Advisory
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
  
  export default ServiceList4;
  
  const styles = StyleSheet.create({});
  