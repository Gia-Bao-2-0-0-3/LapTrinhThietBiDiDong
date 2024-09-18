import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';


function Screen02() {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Image style={styles.imgPhone} source={require('./assets/vs_red.png')} />
        <View>
            <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            <View
                style={{
                    flexDirection: 'row',
                }}>
                <Text>Màu: </Text>
                <Text style={{fontWeight: 'bold'}}
                >đỏ </Text>
            </View>
            <View style={{
                    flexDirection: 'row',
                }}>
                <Text>Cung cấp bởi: </Text>
                <Text style={{fontWeight: 'bold'}}
                >Tiki tradding </Text>
            </View>
            <Text style={{fontWeight: 'bold'}}>1.790.000 đ</Text>
        </View>

      </View>
      <View style={styles.chonMau}>
        <View style={{
            width: '100%',
            justifyContent: 'flex-start',

        }}
        ><Text>Chọn một màu bên dưới:</Text></View>
        
        <View style={styles.colorss}>
            <TouchableOpacity style={styles.color1}></TouchableOpacity>
            <TouchableOpacity style={styles.color2}></TouchableOpacity>
            <TouchableOpacity style={styles.color3}></TouchableOpacity>
            <TouchableOpacity style={styles.color4}></TouchableOpacity>
        </View>
        <TouchableOpacity style ={styles.btnXong}>
            <Text style = {{color:'white',fontWeight:'bold',fontSize:20}}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  color1:{
    width: 100,
    height: 100,
    backgroundColor: '#C5F1FB',

  },
    color2:{
        width: 100,
        height: 100, 
        backgroundColor: '#F30D0D',

    },
    color3:{
        width: 100,
        height: 100,
        backgroundColor: '#000000',

    },
    color4:{
        width: 100,
        height: 100,
        backgroundColor: '#234896',
    },
    colorss:{
        flexDirection: 'column',
        gap: 5,
    },
    imgPhone: {
        width: 114,
        height: 128,
    },
    product: {  
        flexDirection: 'row',
        gap: 5,
        marginLeft: 10,
        marginTop: 10,
    },
    chonMau: {
        flex:1,
        marginTop: 10,
        flexDirection: 'column',
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        paddingBottom : 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    btnXong: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#1952E294',
        marginTop: 30,
    },
});

export default Screen02;
