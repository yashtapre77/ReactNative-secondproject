import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const notifications = [
  { id: '1', time: 'Today, 10:20', text: 'LIMITED-TIME PROMO - UP TO 50% OFF!' },
  { id: '2', time: 'Today, 09:05', text: 'FLASH SALE ALERT - SAVE BIG TODAY!' },
  { id: '3', time: 'Yesterday, 08:10', text: 'GOOD MORNING, RUNNER!' },
  { id: '4', time: 'July 13, 17:30', text: 'EXCLUSIVE DISCOUNT JUST FOR YOU' },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  notification: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 5,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  text: {
    marginTop: 5,
    fontSize: 14,
  },
});