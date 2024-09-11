import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const YourApp = () => {
    const [doiFooterText, setDoiFooterText] = useState("Forgot your password?")
    
 const handleLoginPress = () => {
    setDoiFooterText('Login successful');
  };
  return (
    <LinearGradient
      colors={['#FBCB00', '#BF9A00']}
      style={styles.container}
    >
      <View style={styles.container}>
      <View>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('./assets/avatar_user.png')} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Name" />
        </View>
      </View>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('./assets/lock.png')} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Password" />
          <Image source={require('./assets/eye.png')} style={styles.icon} />
        </View>
      </View>
      
      <View >
        <TouchableOpacity style={styles.touchableOpacityContainer} onPress={handleLoginPress}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      
        <View style={styles.footer}>
        <Text style={styles.footerText}>{doiFooterText}</Text>
        </View>
    </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin:"20px"
  },
  title: {
    fontSize: 24,
    alignItems:"center",
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    backgroundColor: '#C4C4C44D',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginRight:10,
  },
   input: {
    flex: 1,
    height: 40,
  },
  touchableOpacityContainer:{
    flex: 1,
    backgroundColor: '#060000',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  footer: {
    alignItems:"center",
  },
 footerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default YourApp;