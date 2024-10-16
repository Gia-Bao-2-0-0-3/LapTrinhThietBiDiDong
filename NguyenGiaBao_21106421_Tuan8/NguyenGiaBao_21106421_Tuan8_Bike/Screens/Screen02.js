
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const Item = ({ item, navigation }) => (


    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        margin: 20
    }}
    >
        <Image source={require('../assets/Vector.png')}
            style={{
                position: 'absolute',
                top: 2,
                left: 2,
                height: 20,
                width: 20
            }}resizeMode="contain" 
        />
        <TouchableOpacity onPress={() => navigation.navigate('Screen03', { item })}>
            <Image style={{
                height: 150,
                width: 150
            }}
                source={{ uri: item.image }}
                resizeMode="contain" />
        </TouchableOpacity>
        <Text style={{
            fontSize: 16,
            fontWeight: 'bold'
        }}
        >{item.name}</Text>
        <Text style={{
            fontSize: 16,
            fontWeight: 'bold'
        }}>${item.price}</Text>
    </View>

);

export default function Screen02({ navigation }) {
    const [bikes, setBikes] = useState([]);
    const [type, setType] = useState('All');
    const getData = async () => {
        const data = await fetch('https://66fc909bc3a184a84d175427.mockapi.io/bike');
        const bike = await data.json();
        setBikes(bike);
    }
    const filterData = bikes.filter((item) => {
        if (type === 'All') return true;
        return item.type === type;
    });
    useEffect(() => {
        getData();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{
                fontSize: 20,
                color: 'red',
                width: '80%',
                justifyContent: 'flex-start',
                marginTop: 40,
                fontWeight: 'bold'
            }}>
                The world’s Best Bike
            </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                width: '80%',
                alignItems: 'center',
                marginTop: 40,
                marginBottom: 40
            }} >
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    width: 70,
                    alignItems: 'center'
                }} onPress={() => setType('All')}
                >
                    <Text style={{
                        color: type === 'All' ? 'red' : 'black'
                    }}
                    >All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    width: 70,
                    alignItems: 'center'
                }} onPress={() => setType('Roadbike')}
                >
                    <Text style={{
                        color: type === 'Roadbike' ? 'red' : 'black'
                    }}
                    >Roadbike</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    width: 70,
                    borderRadius: 5,
                    alignItems: 'center'
                }} onPress={() => setType('Mountain')}
                >
                    <Text style={{
                        color: type === 'Mountain' ? 'red' : 'black'
                    }}
                    >Mountain</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filterData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Item item={item} navigation={navigation} />
                )}
                numColumns={2}
            />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});