import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

export default function Screen03({ route, navigation }) {
  const { isAdd, name, job, id } = route.params;
  const [jobInput, setJobInput] = useState(job || '');

  const handleAddJob = () => {
    fetch('https://66fc909bc3a184a84d175427.mockapi.io/JOBS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        job: jobInput,
      }),
    })
      .then(response => response.json())
      .then(() => {
        navigation.goBack();
      })
      .catch(error => console.error('Error:', error));
  };

  const handleEditJob = () => {
    fetch(`https://66fc909bc3a184a84d175427.mockapi.io/JOBS/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        job: jobInput,
      }),
    })
      .then(response => response.json())
      .then(() => {
        navigation.goBack();
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={require('../assets/time.png')} />
        <Image source={require('../assets/wifi.png')} />
      </View>
      <View style={styles.welcome}>
        <View style={styles.welcomeTextAndAvatar}>
          <Image source={require('../assets/avatar.png')} />
          <View style={styles.welcomeText}>
            <Text style={{ fontWeight: 'bold' }}>Hi {name}</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
        {isAdd ? 'ADD YOUR JOB' : 'EDIT YOUR JOB'}
      </Text>
      <View style={styles.containerInputName}>
        <Image source={require('../assets/input.png')} />
        <TextInput
          placeholder="input your job"
          value={jobInput}
          onChangeText={setJobInput}
        />
      </View>
      <View style={styles.containerEnd}>
        <TouchableOpacity
          style={styles.btnFinish}
          onPress={isAdd ? handleAddJob : handleEditJob}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>FINISH {'->'}</Text>
        </TouchableOpacity>
        <Image source={require('../assets/paper.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  btnFinish: {
    backgroundColor: 'blue',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    borderRadius: 50,
    padding: 10,
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
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  welcomeTextAndAvatar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  containerEnd: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
});