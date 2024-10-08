import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';


export default function App() {
  const [Users, setUsers] = useState([]);

  const createUser = () => {
    fetch('https://66fc909bc3a184a84d175427.mockapi.io/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Gia Bao',
        job: 'Developer',
      }),
    })
      .then(response => response.json())
      .then(() => {
        getUser(); 
      })
      .catch(error => console.error('Error:', error));
  };

  const getUser = () => {
    fetch('https://66fc909bc3a184a84d175427.mockapi.io/user')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  };

  const deleteUser = (id) => {
    fetch(`https://66fc909bc3a184a84d175427.mockapi.io/user/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        getUser();
      })
      .catch(error => console.error('Error:', error));
  };

  const editUser = (id) => {
    fetch(`https://66fc909bc3a184a84d175427.mockapi.io/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Nguyen Gia Bao',
        job: 'Leader',
      }),
    })
      .then(response => response.json())
      .then(() => {
        getUser();
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    getUser();
  }, []);

  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => editUser(1)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => deleteUser(1)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={Users}
        renderItem={({ item }) => <Item name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  flatList: {
    width: '80%',
  },
  title: {
    fontSize: 18,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
