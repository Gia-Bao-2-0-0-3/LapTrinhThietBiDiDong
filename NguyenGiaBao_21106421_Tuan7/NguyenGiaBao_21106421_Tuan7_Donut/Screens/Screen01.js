
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import React, { useState,useEffect } from 'react';

  
const Item = ({ item,navigation}) => (
  <View style={styles.item}>
    <Image source={`../assets/${item.image}`} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={{
        fontSize: 16,
        fontWeight: 'bold',
      }}>{item.name}</Text>
      <Text style={{
        fontSize: 16,
      }}>Spicy tasty donut family</Text>
      <View style={styles.add}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
        }}>${item.price}.00</Text>
        <TouchableOpacity style={styles.btnadd} onPress={() => navigation.navigate('Screen02', item)}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>

);
export default function Screen01({ navigation }) {

  const [donutData, setDonutData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getDonut = () => {
    fetch('https://66fc909bc3a184a84d175427.mockapi.io/Donut')
      .then((response) => response.json())
      .then((data) => {
        setDonutData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error('Error:', error));
  }

  const filterDonutsByName = (name) => {
    const filtered = donutData.filter(donut => donut.name.includes(name));
    setFilteredData(filtered);
  };

  const searchDonuts = (name) => {
    const filtered = donutData.filter(donut => donut.name.toLowerCase().includes(name.toLowerCase()));
    setFilteredData(filtered);
  };
  
  useEffect(() => {
    getDonut();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.search}>
          <Text   style={{fontSize: 16, fontWeight: 'bold',color: 'gray'}}
          >Welcome, Jala!</Text>
          <Text  style={{fontSize: 20, fontWeight: 'bold'}}
          >Choice you Best food</Text>
          <TextInput placeholder="Search food" style={styles.inputSearch} onChangeText={(text) => searchDonuts(text)} />
        </View>
        <View style={styles.filterDonut}>
          <TouchableOpacity style ={styles.btnfilterDonut} onPress={() => filterDonutsByName('Donut')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}
            >Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.btnfilterDonut} onPress={() => filterDonutsByName('Pink')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}
            >Pink Donut</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={styles.btnfilterDonut} onPress={() => filterDonutsByName('Floating')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}
            >Floating</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
      <FlatList 
        data={filteredData}
        renderItem={({ item }) => (
          <Item item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}  
      />
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
    margin: 10,
  },
  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: 200 ,
  },
  search: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    gap: 20,
  },
  inputSearch: {
    borderWidth: 1,
    borderRadius: 5,
    color: 'gray',
    padding: 10,
    width: '80%',
  },
  filterDonut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btnfilterDonut: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    height: 30,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    margin: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    backgroundColor: 'pink',
    borderRadius: 5,
  },
  body: {
    width: '100%',
    flex: 1,
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  btnadd: {
    backgroundColor: 'orange',
    borderTopLeftRadius : 100,
    borderBottomLeftRadius : 5,
    borderBottomRightRadius : 5,
    borderTopRightRadius : 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  textContainer: {
    paddingTop: 10,
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
});