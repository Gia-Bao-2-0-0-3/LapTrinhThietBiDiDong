import React from 'react';
import {Text, View,TouchableOpacity,Image, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      locations={[0.0003, 0.3021, 0.8542, 0.965, 1]}
      style={{ 
        flex: 1, 
        padding: 10, 
      }}>
      <View
        style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        }}>
           <Image
            source={require('./assets/lock.png')} 
        />
        </View>
      
        <View
        style={{
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        
          <Text 
              style={{
             fontSize:20,     
            fontWeight:"bold",
            color:"black",
               textAlign:"center",
            paddingBottom: 20,
             }}>
             FORGET{"\n"} PASSWORD
           </Text>
        </View>
        <View
        style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        }}>
        
          <Text 
             style={{
               fontSize:14,     
               fontWeight:"bold",
               color:"black",
               textAlign:"center",
             }}>
             Provide your account’s email for which you want to reset your password
           </Text>
        </View>
        <View
        style={{
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            gap:10,
            backgroundColor: '#C4C4C4',
            borderWidth: 1,
            marginBottom: 40,
          }}>
          <Image
            source={require('./assets/mail.png')} 
          />
          <TextInput 
            style={{
              width: '100%',
              height: '100%',
            }}
            placeholder="Email"
            />
        </View>
        
        <TouchableOpacity
          style={{
            backgroundColor: '#E3C000',
            width: '100%',
            padding: 15,
            alignItems: 'center',
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>NEXT</Text>
        </TouchableOpacity>
        </View>
    </LinearGradient>
  );
}


