import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Screen01({ navigation }) {
  const [name, setName] = useState('');

  const clickStart = () => {
    navigation.navigate('Screen02', { name: name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={require('../assets/time.png')} />
        <Image source={require('../assets/wifi.png')} />
      </View>
      <Image source={require('../assets/paper.png')} />
      <Text style={{
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
      }}>MANAGE YOUR TASK </Text>
      <View style={styles.containerInputName}>
        <Image source={require('../assets/mail.png')} />
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.btnStart} onPress={clickStart}>
        <Text style={{
          color: 'white',
        }}>GET STARTED {"->"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  btnStart: {
    backgroundColor: 'blue',
    padding: 10,
    width: '50%',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 50,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerInputName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    gap: 10,
    padding: 10,
  }
});