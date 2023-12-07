// AllBookingsPage.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import InProgressBookings from './InProgressBookings';
import CompletedBookingsPage from './CompletedBookingsPage';

const mockBookings = [
  {
    id: 1,
    status: 'inProgress',
    serviceType: 'Electrical Repair',
    date: '2023-06-06',
  },
  {
    id: 2,
    status: 'completed',
    serviceType: 'Plumbing Service',
    date: '2023-06-10',
  },
  // Add more mock data as needed
];

const allBookings = ({ navigation }) => {
  const [allBookings, setAllBookings] = useState(mockBookings);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Booking</Text>
      <FlatList
        data={allBookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate('BookingDetail', { booking: item })}
          >
            {item.status === 'inProgress' ? (
              <InProgressBookings booking={item} />
            ) : (
              <CompletedBookingsPage booking={item} />
            )}
          </TouchableOpacity>
        )}
      />
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
    fontWeight: 'bold',
    marginBottom: 8,
  },
  box: {
    height: 90,
    width: 300,
    marginBottom: 8,
    
  },
});

export default allBookings;
