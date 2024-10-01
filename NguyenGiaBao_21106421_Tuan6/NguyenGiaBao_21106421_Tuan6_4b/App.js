import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 2; // Adjust the value 40 based on your margin/padding

const DATA = [
  {
    id: '1',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/giacchuyen.png'),
    price: 69000,
  },
  {
    id: '2',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/daynguon.png'),
    price: 69000,
  },
  {
    id: '3',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/dauchuyendoi.png'),
    price: 69000,
  },
  {
    id: '4',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/dauchuyendoipsps2.png'),
    price: 69000,
  },
  {
    id: '5',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/daucam.png'),
    price: 69000,
  },
  {
    id: '6',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: 69000,
  },
  {
    id: '7',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: 69000,
  },
  {
    id: '8',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: 69000,
  },
  {
    id: '9',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: 69000,
  },
  {
    id: '10',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: 69000,
  },
  {
    id: '11',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: 69000,
  },
  {
    id: '12',
    productName: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: 69000,
  }
];

const Item = ({ productName, price, image }) => (
  <View style={[styles.item, { width: itemWidth }]}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.productName}>{productName}</Text>
      <View style={styles.reviews}>
        <Image source={require('./assets/StarYellow.png')} style={{ width: 10, height: 10 }} />
        <Image source={require('./assets/StarYellow.png')} style={{ width: 10, height: 10 }} />
        <Image source={require('./assets/StarYellow.png')} style={{ width: 10, height: 10 }} />
        <Image source={require('./assets/StarYellow.png')} style={{ width: 10, height: 10 }} />
        <Image source={require('./assets/StarGray.png')} style={{ width: 10, height: 10 }} />
        <Text style={{ color: '#555',fontSize:10 }}>(15)</Text>
      </View>
      <View style={styles.priceAndDiscount}>
      <Text style={styles.price}>{price.toLocaleString('vi-VN')} đ</Text>
        <Text style={{ color: '#555', fontSize: 15 ,opacity: 0.5}}>-39%</Text>
      </View>
      
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/leftarrow.png')} style={{ width: 20, height: 20 }} />
        <View style={styles.searchContainer}>
          <Image source={require('./assets/whh_magnifier.png')} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Dây cáp usb" />
        </View>
        <Image source={require('./assets/cart.png')} style={{ width: 20, height: 20 }} />
        <Image source={require('./assets/Group2.png')} />
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item 
            productName={item.productName} 
            price={item.price} 
            image={item.image} 
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <View style={styles.footer}>
        <Image source={require('./assets/3gach.png')} style={{ width: 20, height: 20 }} />
        <Image source={require('./assets/home.png')} style={{ width: 20, height: 20 }} />
        <Image source={require('./assets/comback.png')} style={{ width: 20, height: 20 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-between',
  },
  priceAndDiscount: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 90,
    marginBottom: 10,
  },
  textContainer: {
    // alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviews: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  price: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 200,
    height: 30,
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    padding: 10,         
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});