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
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
        }}>
          <Text style={{
            fontSize: 60,
            fontWeight: 'bold',
          }}
          >
            CODE
          </Text>
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
              paddingTop: 70,
             }}>
             VERIFICATION
           </Text>
        </View>
        <View
        style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
        }}>
        
          <Text 
             style={{
               fontSize:14,     
               fontWeight:"bold",
               color:"black",
               textAlign:"center",
             }}>
             Enter ontime password sent on{'\n'}++849092605798
           </Text>
        </View>
        <View
        style={{
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        paddingTop: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          >
          <TextInput
            style={{
              width: '16%',
              padding: 15,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              width: '16%',
              padding: 15,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              width: '16%',
              padding: 15,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              width: '16%',
              padding: 15,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              width: '16%',
              padding: 15,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <TextInput
            style={{
              width: '16%',
              padding: 15,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
        </View>
        
        <TouchableOpacity
          style={{
            backgroundColor: '#E3C000',
            width: '100%',
            padding: 15,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold',fontSize:20 }}>VERIFY CODE</Text>
        </TouchableOpacity>
        </View>
    </LinearGradient>
  );
}


