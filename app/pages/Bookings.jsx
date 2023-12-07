import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InProgressBookings from './InProgressBookings';
import CompletedBookingsPage from './CompletedBookingsPage';

const Bookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [inProgressBookings, setInProgressBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('allBookings');
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Mock data for testing
    const mockData = [
      { id: 1, serviceType: 'Electrical Repair', date: '2023-06-06', status: 'inProgress' },
      { id: 2, serviceType: 'Plumbing Service', date: '2023-06-10', status: 'completed' },
      // Add more mock data as needed
    ];

    setAllBookings(mockData);
    setInProgressBookings(mockData.filter((booking) => booking.status === 'inProgress'));
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    animateIndicator(tab);
  };

  const animateIndicator = (tab) => {
    Animated.spring(animatedValue, {
      toValue: tab === 'allBookings' ? 0 : tab === 'inProgress' ? 1 : 2,
      useNativeDriver: false,
    }).start();
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'inProgress':
        return <InProgressBookings inProgressBookings={inProgressBookings} />;
      case 'completed':
        return <CompletedBookingsPage />;
      default:
        return (
          <FlatList
            data={allBookings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.box}
                onPress={() => navigation.navigate('BookingDetail', { booking: item })}
              >
                <Text style={styles.tabText}>{`${item.serviceType}\n${item.date}\n${item.status}`}</Text>
              </TouchableOpacity>
            )}
          />
        );
    }
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 120, 240], // Adjust these values based on your tab width
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Bookings</Text>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'allBookings' && styles.activeTab]}
            onPress={() => handleTabChange('allBookings')}
          >
            <Text style={styles.tabText}>All Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'inProgress' && styles.activeTab]}
            onPress={() => handleTabChange('inProgress')}
          >
            <Text style={styles.tabText}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
            onPress={() => handleTabChange('completed')}
          >
            <Text style={styles.tabText}>Completed</Text>
          </TouchableOpacity>
          <Animated.View style={[styles.tabIndicator, { transform: [{ translateX }] }]} />
        </View>
        {renderActiveTab()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    position: 'relative',
  },
  tab: {
    flex: 2,
    paddingVertical: 8,
    alignItems: 'center',
    zIndex: 3, // Add zIndex to the tab style
  },
  activeTab: {
    borderBottomColor: 'black',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  box: {
    height: 90,
    width: 300,
    marginBottom: 16,
    backgroundColor: '#c0b9dd',
    borderRadius: 20,
    padding: 16,
  },
  tabIndicator: {
    height: 30,
    backgroundColor: '#c0b9dd',
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    width: 100,
    zIndex: 2,
    
  },
});

export default Bookings;
