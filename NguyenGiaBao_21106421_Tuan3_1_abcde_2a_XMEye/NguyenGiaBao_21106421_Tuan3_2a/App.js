import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
      colors={['#FBCB00', '#BF9A00']}
      style={styles.containerLinear}
    >
      <View style={styles.container}>
      <View 
           style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
           }}
      >
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
        <TouchableOpacity style={styles.touchableOpacityContainer} >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      
        <View style={styles.footer}>
            <Text style={styles.footerText}>CREATE ACCOUNT</Text>
        </View>
    </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin:"20px"
  },
  title: {
    fontSize: 30,
    paddingLeft: 20,
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
    marginTop: 40,
  },
  footer: {
    alignItems:"center",
  },
 footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:40,
    paddingBottom: 100,
  },
  containerLinear: {
    flex: 1,
  },
});

