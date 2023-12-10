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

//manshi
const Home = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  console.log(text);

  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
  ];
  const handleItemClick = (item) => {
    navigation.navigate("ServiceListPage", { item });
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/images/logo.png")}
          />
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Ionicons name="person-circle-outline" size={36} color="black" />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItelocatiodisplams: "center",
            gap: 5,
            padding: 10,
            backgroundColor: "#FAE5D3",
          }}
        >
          <Entypo name="location-pin" size={24} color="black" />
          <Pressable>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Bangalore</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "#c9ada7",
            padding: 10,
            flexDirection: "row",
            align: "center",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Search")}
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 30,
              height: 40,
              flex: 1,
              width: "95%",
            }}
          >
            <AntDesign
              style={{ marginLeft: 10, marginRight: 4 }}
              name="search1"
              size={20}
              color="black"
            />
            <TextInput
              value={text}
              onChangeText={(text) => setText(text)}
              style={{ fontSize: 20, width: "90%", outlineStyle: "none" }}
              placeholder="Search.."
              clearButtonMode="always"
            />
          </Pressable>
          <Feather name="mic" size={25} color="black" />
        </View>

        <View>
          <Corousel />
        </View>
        <View>
          <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
            Categories
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              backgroundColor: "white",
              margin: 10,
              borderRadius: 20,
              borderColor: "black",
            }}
          >
            {/**category1 */}
            <Pressable
              style={{
                backgroundColor: "#f2e9e4",
                borderRadius: 20,
                margin: 3,
              }}
              onPress={() => navigation.navigate("ServiceListPage")}
            >
              <Image
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                source={require("../assets/images/cat1.jpg")}
              />
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 5,
                  width: 150,
                  justifyContenct: "center",
                  alignItems: "center",
                  marginTop: 10,
                  borderRadius: 90,
                  alignContent: "center",
                  marginHorizontal: 15,
                  marginBottom: 10,
                }}
              >
                <Text>Electrical</Text>
              </View>
            </Pressable>

            {/**category2 */}
            <Pressable
              style={{
                backgroundColor: "#f2e9e4",
                borderRadius: 20,
                margin: 3,
              }}
              onPress={() => navigation.navigate("ServiceListPage")}
            >
              <Image
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                source={require("../assets/images/cat1.jpg")}
              />
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 5,
                  width: 150,
                  justifyContenct: "center",
                  alignItems: "center",
                  marginTop: 10,
                  borderRadius: 90,
                  alignContent: "center",
                  marginHorizontal: 15,
                  marginBottom: 10,
                }}
              >
                <Text>Mechanical</Text>
              </View>
            </Pressable>
            {/**category3 */}
            <Pressable
              style={{
                backgroundColor: "#f2e9e4",
                borderRadius: 20,
                margin: 3,
              }}
              onPress={() => navigation.navigate("ServiceListPage")}
            >
              <Image
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                source={require("../assets/images/cat1.jpg")}
              />
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 5,
                  width: 150,
                  justifyContenct: "center",
                  alignItems: "center",
                  marginTop: 10,
                  borderRadius: 90,
                  alignContent: "center",
                  marginLeft: 10,
                  marginHorizontal: 15,
                  marginBottom: 10,
                }}
              >
                <Text>Process Optimization</Text>
              </View>
            </Pressable>
            {/**category4 */}
            <Pressable
              style={{
                backgroundColor: "#f2e9e4",
                borderRadius: 20,
                margin: 3,
              }}
              onPress={() => navigation.navigate("ServiceListPage")}
            >
              <Image
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                source={require("../assets/images/cat1.jpg")}
              />
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 5,
                  width: 150,
                  justifyContenct: "center",
                  alignItems: "center",
                  marginTop: 10,
                  borderRadius: 90,
                  alignContent: "center",
                  marginHorizontal: 15,
                  marginBottom: 10,
                }}
              >
                <Text>Consultation</Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/**popular services */}
        <View>
          <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
            Popular Services
          </Text>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleItemClick(item)}>
                  <View
                    style={{
                      backgroundColor: "#f2e9e4",
                      paddingVertical: 10,
                      width: 350,
                      justifyContenct: "center",
                      alignItems: "center",
                      marginTop: 10,
                      borderRadius: 90,
                      alignContent: "center",
                      marginHorizontal: 15,
                      marginBottom: 10,
                    }}
                  >
                    <Text>{item.title} </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View>
          <Text style={{ padding: 50, fontSize: 20, fontWeight: "bold" }}>
            Didn’t find what you were looking for?
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Button pressed! ->feedback page")}
          >
            <Text style={styles.buttonText}>Tap Me !</Text>
          </TouchableOpacity>

          <Text
            style={{
              alignContent: "center",
              padding: 50,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Suggest a service
          </Text>
        </View>
        <Text
          style={{ height: 10, borderColor: "#f2e9e4", borderWidth: 40 }}
        ></Text>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#4a4e69",
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
