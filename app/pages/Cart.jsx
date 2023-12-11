import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  AsyncStorage,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

const Cart = ({ route }) => {
  const [cartItems, setCartItems] = useState([]);
  const { item } = route.params || {};

  useEffect(() => {
    if (item) {
      setCartItems([
        ...cartItems,
        {
          ...item,
          incrementCounter: 1,
          decrementCounter: 1, // Set the initial counter value as 1
        },
      ]);
    }
  }, [item]);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.amount);
    });
    return total;
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    Alert.alert("Checkout", `Total Amount: Rs. ${total}`, [
      { text: "Cancel", style: "cancel" },
      { text: "Confirm", onPress: () => confirmCheckout(total) },
    ]);
  };

  const confirmCheckout = (total) => {
    Alert.alert(
      "Payment Successful",
      `Total Amount: Rs. ${total}. Payment completed successfully.`
    );
    setCartItems([]);
  };

  const handleIncrementTime = (id) => {
    const baseTime = parseInt(item.time);
    const baseAmount = parseInt(item.amount);

    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          time: parseInt(cartItem.time) + baseTime,
          amount: parseInt(cartItem.amount) + baseAmount,
          incrementCounter: (cartItem.incrementCounter || 0) + 1,
        };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
  };

  const handleDecrementTime = (id) => {
    const baseTime = parseInt(item.time);
    const baseAmount = parseInt(item.amount);

    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === id && parseInt(cartItem.time) > baseTime) {
        return {
          ...cartItem,
          time: parseInt(cartItem.time) - baseTime,
          time: parseInt(cartItem.time) -baseTime,

          amount: parseInt(cartItem.amount) - baseAmount,
          incrementCounter: (cartItem.incrementCounter || 0) - 1,
        };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.priceContainer}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.price}>
          Rs. {item.amount} : {item.time} mins
        </Text>
      </View>
      <View>
        <View style={styles.timeAndButtonContainer}>
          <TouchableOpacity
            onPress={() => handleDecrementTime(item.id)}
            style={styles.timeButton}
          >
            <Text style={styles.buttonText}> - </Text>
          </TouchableOpacity>
          <Text style={styles.incrementCount}>
            {item.incrementCounter || 0}
          </Text>
          <TouchableOpacity
            onPress={() => handleIncrementTime(item.id)}
            style={styles.timeButton}
          >
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>
        <View
        style={{
          backgroundColor: "white",
          padding: 5,
          width: 150,
          justifyContenct: "center",
          alignItems: "center",
          marginTop: 10,
          borderRadius: 90,
          alignContent: "center",
          marginHorizontal: 15,
          marginBottom: 10,
          marginLeft: 45,
        }}
      >
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Cart</Text>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderCartItem}
          />
        ) : (
          <Text style={styles.emptyCart}>Your cart is empty.</Text>
        )}

        {cartItems.length > 0 && (
          <View style={styles.checkoutContainer}>
            <Text style={styles.total}>Total: Rs. {calculateTotal()}</Text>
            <TouchableOpacity
              onPress={handleCheckout}
              style={styles.checkoutButton}
            >
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItem: {
    backgroundColor: "#f2e9e4",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection:"row"
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 16,
  },
  removeButton: {
    color: "red",
    fontSize: 16,
    marginTop: 3,
  },
  emptyCart: {
    fontSize: 16,
  },
  checkoutContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  checkoutText: {
    color: "white",
    fontSize: 16,
  },
  timeAndButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  timeButton: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 5,
    padding: 3,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Cart;
