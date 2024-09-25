import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
const DATA = [
  {
    id: '1',
    productName: 'Ca nấu lẩu, nấu mì mini',
    shopName: 'Devang',
    image: './assets/ca_nau_lau.png',
  },
  {
    id: '2',
    productName: '1 KG KHÔ GÀ BƠ TỎI',
    shopName: 'LTD Food',
    image: './assets/ga_bo_toi.png',
  },
  {
    id: '3',
    productName: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi',
    image: './assets/xa_can_cau.png',
  },
  {
    id: '4',
    productName: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    image: './assets/do_choi_dang_mo_hinh.png',
  },
  {
    id: '5',
    productName: 'Lãnh đạo giản đơn',
    shopName: 'Minh Long Book',
    image: './assets/lanh_dao_gian_don.png',

  },
  {
    id: '6',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_con_tre.png',

  }
  ,{
    id: '7',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_con_tre.png',

  },{
    id: '8',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_con_tre.png',

  },{
    id: '9',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_con_tre.png',

  },{
    id: '10',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_con_tre.png',

  },{
    id: '11',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_con_tre.png',

  },{
    id: '12',
    productName: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: './assets/hieu_long_con_tre.png',

  }
];
const Item = ({ productName, shopName, image }) => (
  
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
     
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.shopName}>Shop: {shopName}</Text>
      
    </View>
    <TouchableOpacity style={styles.button} 
    >
      <Text style={{ color: 'white' }}
      >Chat</Text>
    </TouchableOpacity>
  </View>
);
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <Image source={require('./assets/leftarrow.png')} style={{ width: 20, height: 20 }} />
        <Text style={{ color: 'white' }}>Chat</Text>
        <Image source={require('./assets/cart.png')} style={{ width: 20, height: 20 }} />
      </View>
      <View style={styles.textunderheader}>
      <Text style={{fontSize: 15 }}
      >
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item 
            productName={item.productName} 
            shopName={item.shopName} 
            image={item.image} 
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textunderheader: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#C4C4C4',
    },

  textContainer: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    width: 80,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#1BA9FF',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});