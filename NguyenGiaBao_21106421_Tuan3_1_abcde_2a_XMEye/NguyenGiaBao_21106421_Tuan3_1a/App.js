import React from 'react';
import {Text, View,TouchableOpacity,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
    colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
      style={{ 
        flex: 1,  
      }}>
      <View
        style={{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        
           <Image
            source={require('./assets/Ellipse8.png')} 
            style={{width: 200, height: 200}}
        />
        </View>
      
        <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        
          <Text 
              style={{
             fontSize:20,     
            fontWeight:"bold",
            color:"black",
               textAlign:"center",
             }}>
             GROW {"\n"} YOUR BUSINESS
           </Text>
        </View>
        <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        
          <Text 
             style={{
               fontSize:14,     
               fontWeight:"bold",
               color:"black",
               textAlign:"center",
             }}>
             We wil help you to grow your business using online server
           </Text>
        </View>
        <View
        style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        }}>
        
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#E3C000',
            padding: 10,
            marginHorizontal: 30,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#E3C000',
            padding: 10,
            marginHorizontal: 30,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
        <Text style={{
          textAlign:"center",
          color:"black",
          fontWeight:"bold",
          fontSize:14,
          marginBottom:100,
          }}>HOW WE WORK</Text>
    </LinearGradient>
  );
}


