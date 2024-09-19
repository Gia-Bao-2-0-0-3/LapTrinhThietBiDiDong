import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Screen01({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.productDetail}>
        <Image style={styles.imgPhone} source={require('./assets/vs_blue.png')} /> 
        <Text style={{
          fontWeight: 'bold',
        }}
        >Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.rate}>
          <View style={styles.stars}>
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.money}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
            >1.790.000đ</Text>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              textDecorationLine: 'line-through',
              color: 'gray',
            }}>1.790.000đ</Text>
        </View>
        <View style={styles.returnMoney}>
            <Text style={{
              color: 'red',
              fontWeight: 'bold',
            }}
            >Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require('./assets/detail.png')} />
        </View>
      </View>
  
      <TouchableOpacity style={styles.btnChooseColor}
        onPress={() => {
          navigation.navigate('Screen02');
        }}
      >
        <Text></Text>
        <Text>4 MÀU-CHỌN MÀU</Text>
        <Text>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBuy}>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
        }}
        >CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
  },
  imgPhone: {
    transform: [{ scale: 0.9 }],
  },
  stars: {
    flexDirection: 'row',
  },
  productDetail: {
    flexDirection: 'column',
    gap: 5,
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  returnMoney: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  btnChooseColor: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  btnBuy: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 30,
  },
});
export default Screen01;