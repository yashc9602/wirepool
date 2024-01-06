import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import { Home } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Search, Bookings, Cart } from '../pages';
import ProfilePage from "../pages/ProfilePage";
import ServiceListPage from "../pages/ServiceListPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage1";
import Chat from "../pages/Chat";
import ServiceList1 from "../pages/ServiceList1";
import ServiceList4 from "../pages/ServiceList4";
import ServiceList3 from "../pages/ServiceList3";
import ServiceList2 from "../pages/ServiceList2";
import ServiceDetailsPage1 from "../pages/ServiceDetailsPage1";
import ServiceDetailsPage2 from "../pages/ServiceDetailsPage2";
import ServiceDetailsPage4 from "../pages/ServiceDetailsPage4";
import ServiceDetailsPage3 from "../pages/ServiceDetailsPage3";



const StackNavigator = () => {
  const stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 60,
    }
}

  function BottomTabs() {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={"search-sharp"}
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={Bookings}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "reorder-three" : "reorder-three-outline"}
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "cart" : "cart-outline"}
                  size={24}
                  color={focused ? "black" : "grey"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Register"
          component={RegistrationPage}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Main"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceListPage"
          component={ServiceListPage}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceList1"
          component={ServiceList1}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceList2"
          component={ServiceList2}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceList3"
          component={ServiceList3}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceList4"
          component={ServiceList4}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceDetailsPage1"
          component={ServiceDetailsPage1}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceDetailsPage2"
          component={ServiceDetailsPage2}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceDetailsPage3"
          component={ServiceDetailsPage3}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="ServiceDetailsPage4"
          component={ServiceDetailsPage4}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
          }}
        />
        <stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: true,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
