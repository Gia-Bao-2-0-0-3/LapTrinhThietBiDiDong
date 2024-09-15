import react,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function App() {
  const [doiSoluong, setDoiSoLuong] = useState(1)
  const [doiTamTinh, setDoiTamTinh] = useState(141800)
  const [doiThanhTien, setDoiThanhTien] = useState(141800)
    
 const handleLoginPressPlus = () => {
  setDoiSoLuong(doiSoluong+1);
  setDoiTamTinh(doiTamTinh+141800)
  setDoiThanhTien(doiThanhTien+141800)
  };
  const handleLoginPressMinus = () => {
    setDoiSoLuong(doiSoluong-1);
    setDoiTamTinh(doiTamTinh-141800)
    setDoiThanhTien(doiThanhTien-141800)
    if(doiSoluong===1){
      setDoiSoLuong(1)
      setDoiTamTinh(141800)
      setDoiThanhTien(141800)
    }
  };
  return (
    <View style={styles.container}>
      {/* view 1 */}
      <View style={{
        backgroundColor: 'white',
        padding: 10,
      }}>
        <View style = {styles.product}>
          <Image source={require('./assets/book.png')} />
          <View style = {styles.productDetail}>
            <Text style={{
              fontWeight: 'bold',
              }}
            >Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{
              fontWeight: 'bold',
            }}
            >Cung cấp bởi Tiki Tranding</Text>
            <Text style={{
              color: 'red',
              fontWeight: 'bold',
            }}
            >141.800 đ</Text>
            <Text style={{
              textDecorationLine: 'line-through',
              color: 'gray',
              fontWeight: 'bold',
            }}
            >141.800 đ</Text>
            <View style = {styles.addminusBuyAfter}>
              <View style = {styles.addminus}>
                <TouchableOpacity onPress={handleLoginPressMinus}> 
                  <Image source={require('./assets/btnminus.png')} /> 
                </TouchableOpacity>
                <Text style={{
                  fontWeight: 'bold',
                }}
                >{doiSoluong}</Text>
                <TouchableOpacity onPress={handleLoginPressPlus}> 
                  <Image source={require('./assets/btnadd.png')} /> 
                </TouchableOpacity>
                
              </View>
              <Text style={{
                color: '#134FEC',
                fontWeight: 'bold',
              }}
              >Mua sau</Text>
            </View>
          </View>
        </View>

        <View style={styles.saveMaGiamGia}>
          <Text style={{
            fontWeight: 'bold',
          }}
          >Mã giảm giá đã lưu</Text>
          <Text style={{
            color: '#134FEC',
            fontWeight: 'bold',
          }}
          >Xem tại đây</Text>
        </View>

        <View style ={styles.maGiamGiaVaApdung}>
          <View style ={styles.maGiamGia}>
            <Image source={require('./assets/yellow_block.png')} />
            <Text style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
            >Mã giảm giá</Text>
          </View>
          <TouchableOpacity style={styles.btnApdung}>
              <Text style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              }}
              >Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* View 2 */}
      <View style={styles.inputHere}>
        <Text style={{
            fontWeight: 'bold',
          }}
        >Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Text style={{
            color: '#134FEC',
            fontWeight: 'bold',
          }}
        >Nhập tại đây?</Text>
      </View>
      {/* View 3 */}
      <View style={styles.tamTinh}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >Tạm tính</Text>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'red',
          }}
        >{doiTamTinh.toLocaleString('vi-VN') + " đ"}</Text>
      </View>
      {/* View 4 */}
      <View style={styles.thanhTienVaDatHang}>
        <View style={styles.thanhTien}>
          <Text style={{
            fontWeight: 'bold',
            color: 'gray',
            fontSize: 20,
          }}
          >Thành tiền</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'red',
            }}
          >{doiThanhTien.toLocaleString('vi-VN') + " đ"}</Text>
        </View>
        <TouchableOpacity style={styles.datHang}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
          }}
          >Tiến hành đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
  },
  addminus: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
  },
  addminusBuyAfter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product: {
    flexDirection: 'row',
    gap: 10,
  },
  productDetail: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  saveMaGiamGia: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  maGiamGiaVaApdung: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  maGiamGia: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: "60%",
  },
  btnApdung: {
    backgroundColor: '#0A5EB7',
    borderRadius: 5,
    height: 50,
    width: "30%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputHere: {
    marginTop: 20,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  tamTinh: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thanhTien: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  thanhTienVaDatHang: {
    marginTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  datHang: {
    backgroundColor: '#E53935',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
