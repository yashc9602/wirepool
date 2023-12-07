// CompletedBookingsPage.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CompletedBookingsPage = () => {
  const [completedBookings, setCompletedBookings] = useState([]);

  // useEffect(() => {
  //   // Fetch completed bookings from your API or storage
  //   const fetchCompletedBookings = async () => {
  //     try {
  //       // Replace this with your actual API endpoint
  //       const response = await fetch('YOUR_API_ENDPOINT/completedBookings');
  //       const data = await response.json();
  //       setCompletedBookings(data);
  //     } catch (error) {
  //       console.error('Error fetching completed bookings:', error);
  //     }
  //   };

  //   fetchCompletedBookings();
  // }, []);

  // Add an example completed booking only once when the component mounts
  useEffect(() => {
    setCompletedBookings((prevBookings) => [
      {
        id: 1,
        serviceType: 'Electrical Service',
        date: '08-12-2023',
        additionalDetail: 'Completed',
      },

      {
        id: 2,
        serviceType: 'Mechanical Service',
        date: '08-12-2023',
        additionalDetail: 'Completed',
      },
      
    ]);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    
      <View style={styles.container}>
        {completedBookings.length === 0 ? (
          <Text>No completed bookings</Text>
        ) : (
          <FlatList
            data={completedBookings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.box}>
                <View style={styles.rectangle}>
                  <Text>{item.serviceType}</Text>
                  <Text>{item.date}</Text>
                  {/* Add more details as needed */}
                  <Text>{item.additionalDetail}</Text>
                </View>
              </View>
            )}
          />
        )}
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
    width: 300,
    marginBottom: 8,
  },
  rectangle: {
    backgroundColor: '#c0b9dd',
    borderRadius: 20,
    height: 90,
    width: 300,
    padding: 16,
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
  },
  service: {
    fontSize: 14,
  },
  arrivalTime: {
    fontSize: 12,
  },
});
export default CompletedBookingsPage;
