import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const InProgressBookings = () => {
  const [inProgressList, setInProgressList] = useState([
    {
      name: "Govinda",
      service: "Electrical Repair",
      arrivalTime: "Jun 6, 2023",
      //image: require("./images/progress.png"),
    },
    {
      name: "Govinda",
      service: "Electrical Repaire",
      service: "Electrical Repair",
      arrivalTime: "Jun 6, 2023",
      //image: require("./images/progress.png"),
    },
    {
      name: "Govinda",
      service: "Electrical Repair",
      arrivalTime: "Jun 6, 2023",
      //image: require("./images/progress.png"),
    },
  ]);

  return (
    <View style={styles.container}>
      {inProgressList.map((item, index) => (
        <View style={styles.box} key={index}>
          <View style={styles.rectangle}>
            <View style={styles.card}>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.service}>{item.service}</Text>
                <Text style={styles.arrivalTime}>{item.arrivalTime}</Text>
              </View>
              <View style={styles.imageContainer}>
                {/* Replace the image source with your actual image */}
                <Image source={item.image} style={styles.image} />
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
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
  },
  box: {
    height: 90,
    width: 350,
    marginBottom: 8,
  },
  rectangle: {
    backgroundColor: '#c0b9dd',
    borderRadius: 20,
    height: 90,
    width: 350,
    padding: 8,
  },
  card: {
    backgroundColor: "#c0b9dd",
    flexDirection: "row",
  },
  infoContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:8,
  },
  service: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:8,

  },
  arrivalTime: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:8,

  },
});

export default InProgressBookings;
