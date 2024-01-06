// CompletedBookingsPage.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CompletedBookingsPage = () => {
  const [completedBookings, setCompletedBookings] = useState([]);

  useEffect(() => {
    // Fetch completed bookings from your API or storage
    const fetchCompletedBookings = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('YOUR_API_ENDPOINT/completedBookings');
        const data = await response.json();
        setCompletedBookings(data);
      } catch (error) {
        console.error('Error fetching completed bookings:', error);
      }
    };

    fetchCompletedBookings();
  }, []);

  // Add an example completed booking only once when the component mounts
  // Commenting this out since you are fetching data from an API
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
    <SafeAreaView style={styles.container}>
      
      {completedBookings.length === 0 ? (
        <Text>No completed bookings</Text>
      ) : (
        <FlatList
          data={completedBookings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <View style={styles.rectangle}>
                <Text style={styles.serviceType}>{item.serviceType}</Text>
                <Text style={styles.date}>{item.date}</Text>
                {/* Add more details as needed */}
                <Text style={styles.additionalDetail}>{item.additionalDetail}</Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    //backgroundColor: '#f0f0f0', // Add a background color for the entire page
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
 //   marginBottom: 10,
  },
  box: {
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'center',
  },
  rectangle: {
    backgroundColor: '#c0b9dd',
    borderRadius: 20,
    height: 90,
    width: 350,
    padding: 8,
  },
  serviceType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:8,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'black',
    marginLeft:8,

  },
  additionalDetail: {
    fontSize: 16,
    fontWeight: "bold",
    color: 'black', 
    marginLeft:8,

  },
});

export default CompletedBookingsPage;
