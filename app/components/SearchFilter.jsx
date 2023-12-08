import { StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const SearchFilter = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  console.log(text);
  return (
    <View style={{ marginTop: 10, marginLeft: 1, marginRight: 45 }}>
      <FlatList
      
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View>
                <Text onPress={() => navigation.navigate("ServiceDetailsPage")}
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 40 }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    height: 0,
                    marginTop: 5,
                  }}
                ></Text>
              </View>
            );
          }
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginLeft: 40 }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    borderColor: "grey",
                    borderWidth: 1,
                    height: 0,
                    marginTop: 5,
                  }}
                />
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
