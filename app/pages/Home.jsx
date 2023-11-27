import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{flexDirection:'row', justifyContent:"space-between", marginRight:16}}>
        <Text>Home</Text>
        <Pressable onPress={() => navigation.navigate("Profile")}>
        <Ionicons name="person-circle-outline" size={36} color="black" />
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }

})