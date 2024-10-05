import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const wishlist = [
  { id: '1', title: 'AERO SPORT INFINITY PRO', price: 'Rp400.000', image: require('../assets/man-runner-tying-lace-shoes-sport-training-road.png') },
  { id: '2', title: 'SPORT+ INVINCIBLE PRO', price: 'Rp389.000', image: require('../assets/closeup-female-athlete-running-treadmill-gym.png') },
  { id: '3', title: 'SPORT SNEAKERS BLUE', price: 'Rp200.000', image: require('../assets/close-up-sportive-woman-jumping-exercise.png') },
  { id: '4', title: 'SPORT+ INVINCIBLE MAX', price: 'Rp399.000', image: require('../assets/sporty-man-tying-his-shoelaces.png') }
];

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={wishlist}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  product: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  productTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 12,
    color: 'orange',
  },
});