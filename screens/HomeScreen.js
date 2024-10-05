import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ViewPager from 'react-native-pager-view';
import Ionicons from 'react-native-vector-icons/Ionicons';

const products = [
  { id: '1', title: 'AIR LEGGING SPORT', price: 'Rp200.000', image: require('../assets/portrait-fit-woman-running-outdoor 1.png') },
  { id: '2', title: 'AERO SPORT INFINITY MAX', price: 'Rp450.000', image: require('../assets/men-s-fashion-off-white-sneakers.png') },
  { id: '3', title: 'SPORT RUNNER BLUE EDITION', price: 'Rp250.000', image: require('../assets/man-posing-stairs-while-wearing-athletic-wear 1.png') },
  { id: '4', title: 'SPORT BAG', price: 'Rp350.000', image: require('../assets/cheerful-young-sports-man-using-mobile-phone-listening-music 1.png') }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sport Shoes</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={24} color="black" />
          <Ionicons name="cart-outline" size={24} color="black" style={{ marginLeft: 15 }} />
        </View>
      </View>

      {/* Search and Wallet Section */}
      <View style={styles.searchSection}>
        <TextInput style={styles.searchInput} placeholder="Search Items" />
        <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
      </View>
      <View style={styles.walletSection}>
        <View style={styles.walletBalance}>
          <Ionicons name="wallet-outline" size={24} color="black" />
          <Text style={styles.walletText}>Rp1.000.000</Text>
        </View>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>Top up</Text>
        </TouchableOpacity>
      </View>

      {/* ViewPager for the horizontal slider */}
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1" style={styles.slide}>
          <Image source={require('../assets/banner_image_1.jpg')} style={styles.sliderImage} />
        </View>
        <View key="2" style={styles.slide}>
          <Image source={require('../assets/banner_image_2.jpg')} style={styles.sliderImage} />
        </View>
      </ViewPager>

      {/* FlatList for products */}
      <FlatList
        data={products}
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  walletBalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletText: {
    fontSize: 16,
    marginLeft: 5,
  },
  topUpButton: {
    backgroundColor: 'orange',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  topUpText: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewPager: {
    height: 150,
    marginBottom: 20,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    alignItems: 'center',
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
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 12,
    color: 'orange',
    textAlign: 'center',
  },
});
