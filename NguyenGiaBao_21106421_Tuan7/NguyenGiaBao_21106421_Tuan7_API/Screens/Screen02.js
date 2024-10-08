import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';

const Item = ({ id, job, navigation, name, refreshData }) => (
  <View style={styles.item}>
    <View style={styles.check}>
      <Image source={require('../assets/check.png')} />
      <Text>{job}</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Screen03', { isAdd: false, name: name, job: job, id: id, refreshData })}>
      <Image source={require('../assets/edit.png')} />
    </TouchableOpacity>
  </View>
);

export default function Screen02({ route, navigation }) {
  const [JOB, setJOB] = useState([]);
  const { name, newJob } = route.params || {};
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const getJob = () => {
    fetch('https://66fc909bc3a184a84d175427.mockapi.io/JOBS')
      .then(response => response.json())
      .then(data => {
        setJOB(data);
        setFilteredData(data); // Cập nhật filteredData khi nhận dữ liệu
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    getJob();
  }, []);

  useEffect(() => {
    if (newJob) {
      setJOB(prevJobs => [...prevJobs, newJob]);
      setFilteredData(prevJobs => [...prevJobs, newJob]);
    }
  }, [newJob]);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = JOB.filter(item => {
        const itemData = item.job ? item.job.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(JOB);
    }
  };

  const refreshData = () => {
    getJob();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={require('../assets/time.png')} />
        <Image source={require('../assets/wifi.png')} />
      </View>

      <View style={styles.welcome}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} />
        </TouchableOpacity>
        <View style={styles.welcomeTextAndAvatar}>
          <Image source={require('../assets/avatar.png')} />
          <View style={styles.welcomeText}>
            <Text style={{ fontWeight: 'bold' }}>Hi {name}</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerInputName}>
        <Image source={require('../assets/search.png')} />
        <TextInput placeholder="Search" value={search} onChangeText={handleSearch} />
      </View>

      <View style={styles.containerBody}>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <Item id={item.id} job={item.job} navigation={navigation} name={name} refreshData={refreshData} />}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.containerAdd}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate('Screen03', { isAdd: true, name: name, refreshData })}
        >
          <Text style={{ color: 'white', fontSize: 40 }}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  btnAdd: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  containerInputName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    gap: 10,
    padding: 10,
    alignSelf: 'center',
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
  welcomeTextAndAvatar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  containerBody: {
    height: 400,
    width: '100%',
  },
  containerAdd: {
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#DEE1E678',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
});