import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home, Search, Bookings, Cart } from '../pages';

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

const AppDrawer = () => {
  return (
    <Tab.Navigator screenOption={screenOptions}>
      <Tab.Screen
       name="Home" 
       component={Home}
        options={{
        tabBarIcon: ({focused}) => {
            return <Ionicons name={focused ? "home" : "home-outline"} 
            size={24 } 
            color={focused ? "black" : "grey"}
            />
        }
        }}
        />
      <Tab.Screen
       name="Search" 
       component={Search}
        options={{
        tabBarIcon: ({focused}) => {
            return <Ionicons name={"search-sharp"} 
            size={24 } 
            color={focused ? "black" : "grey"}
            />
        }
        }}
        />
      <Tab.Screen
       name="Bookings" 
       component={Bookings}
        options={{
        tabBarIcon: ({focused}) => {
            return <Ionicons name={focused ? "reorder-three" : "reorder-three-outline"} 
            size={24 } 
            color={focused ? "black" : "grey"}
            />
        }
        }}
        />
      <Tab.Screen
       name="Cart" 
       component={Cart}
        options={{
        tabBarIcon: ({focused}) => {
            return <Ionicons name={focused ? "cart" : "cart-outline"} 
            size={24 } 
            color={focused ? "black" : "grey"}
            />
        }
        }}
        />
    </Tab.Navigator>
  )
}

export default AppDrawer 