
import React ,{useState} from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';

export default function App() {

  const [doiPassword, setDoiPassword] = useState("")
    
  const handleLoginPress = () => {
    setDoiPassword("YOURPASSWORDISHERE")
   };
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={{
          width: "100%",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 30,
          }}
          >PASSWORD</Text>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 40,
          }}
          >GENERATOR</Text>
        </View>

        <View style={{
           width: "100%",
           backgroundColor: '#151537',
           height: 50,
           color: "white",
           fontSize:20,
           justifyContent: 'center',
           alignItems: 'center',
           paddingLeft: 10,
        }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          >{doiPassword}</Text>
        </View>
        <View style={{
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          >Password length</Text>
          <TextInput style={{
            backgroundColor: 'white',
            width: 120,
            height: 40,
          }}
          ></TextInput>
        </View>
        <View style={{
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          >Include lower case letters</Text>
          <TextInput style={{
            backgroundColor: 'white',
            width: 40,
            height: 40,
          }}
          ></TextInput>
        </View>
        <View style={{
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          >Include upcase letters</Text>
          <TextInput style={{
            backgroundColor: 'white',
            width: 40,
            height: 40,
          }}
          ></TextInput>
        </View>
        <View style={{
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          >Include numbers</Text>
          <TextInput style={{
            backgroundColor: 'white',
            width: 40,
            height: 40,
          }}
          ></TextInput>
        </View>
        <View style={{
          width: "100%",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          >Include special symbol</Text>
          <TextInput style={{
            backgroundColor: 'white',
            width: 40,
            height: 40,
          }}
          ></TextInput>
        </View>
        <TouchableOpacity style={{
          backgroundColor: '#3B3B98',
          width: "80%",
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}
         onPress={handleLoginPress}
        > 
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
          >GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23235B",
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  body: {
    flex: 1,
    backgroundColor: "#3B3B98",
  },
});
