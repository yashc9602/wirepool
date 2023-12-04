import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const SearchFilter = ({ data, input, setInput }) => {
  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View>
                <Text style={{fontSize:20,fontWeight:"bold",}}>{item.name}</Text>
                <Text style={{borderColor:"grey",borderWidth:1,height:0,marginTop:5}}></Text>
              </View>
            );
          }
          if(item.name.toLowerCase().includes(input.toLowerCase())){
            return (
              <View>
                 <Text style={{fontSize:14,fontWeight:"bold"}}>{item.name}</Text>
                 <Text style={{borderColor:"grey",borderWidth:1,height:0,marginTop:5}}/>
              </View>
            )
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});