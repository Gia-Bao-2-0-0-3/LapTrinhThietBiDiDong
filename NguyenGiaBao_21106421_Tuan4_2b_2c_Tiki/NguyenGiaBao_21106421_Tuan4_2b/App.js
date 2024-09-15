import { StyleSheet, Text, View,Image, TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

 const [doiFooterText, setDoiFooterText] = useState("Cực kỳ hài lòng")
    
 const handleLoginPress = () => {
    setDoiFooterText('Cực kỳ rất là siêu hài lòng');
  };
  return (
    <View style={styles.container}>
      <View style={styles.usbContainer}>
        <Image source={require('./assets/usb.png')}/>
        <Text 
          style={{
            fontSize: 15, 
            fontWeight: 'bold',
          }}
        >USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View>
        <Text
          style = {{
            fontSize: 20, 
            fontWeight: 'bold',
          }}
        >{doiFooterText}</Text>
      </View>
      <View style={styles.starImage} >
        <Image source={require('./assets/star.png')} />
        <Image source={require('./assets/star.png')} />
        <Image  source={require('./assets/star.png')} />
        <Image source={require('./assets/star.png')} />
        <Image source={require('./assets/star.png')} />
      </View>
      <View style={styles.addImg}>
        <Image source={require('./assets/camera.png')} />
        <Text
          style = {{
            fontSize: 15, 
            fontWeight: 'bold',
          }}
        >Thêm hình ảnh</Text>
      </View>
      <View style={styles.cmt}>
          <TextInput placeholder="Hãy chia sẽ những điều mà bạn thích về sản phẩm" />
      </View>
      <View style={styles.btnGui}>
          <TouchableOpacity  onPress={handleLoginPress} >
           
            <Text style={{
               fontSize: 15, 
              fontWeight: 'bold',
              color:"#FFFFFF",
            }}

            >Gửi</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "80%",
    paddingBottom: 20,
    paddingTop: 20,
  },
  usbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    width: "80%",
  },  
  btnGui: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
  },
  addImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 2,
    width: "80%",
    padding: 10,
  },
  cmt: {
    marginTop: 20,
    width: "80%",
    height: 250,  
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  }
});
