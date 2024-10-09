
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';


export default function Screen02({ route }) {
    const item = route.params;
     
    const [soLuong, setSoLuong] = useState(1);

    const handleAdd = () => {
        setSoLuong(soLuong + 1);
    };

    const handleMinus = () => {
        if (soLuong > 1) {
            setSoLuong(soLuong - 1);
        }
    }
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerTop}>
            <Image source={`../assets/${item.image}`} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>{item.name}</Text>
                
                <View style={styles.price}>
                        <Text style={{
                        fontSize: 16,
                        color: 'gray',
                    }}>Spicy tasty donut family</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>${item.price}.00</Text>
                </View>
             </View>           
        </View>
        <View style={styles.containerBottom}>
            <View style={styles.plusminusdelivery}>
                <View style={styles.delivery}>
                    <View style={styles.imagedelivery}>
                        <Image source={require('../assets/Vector.png')} />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'gray',
                        }}>Delivery in</Text>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>30 min</Text>
                </View>
                <View style={styles.plusminus}>
                    <TouchableOpacity onPress={handleMinus}>
                        <Image source={require('../assets/minus.png')} />
                    </TouchableOpacity>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>{soLuong}</Text>
                        <TouchableOpacity onPress={handleAdd}>
                        <Image source={require('../assets/plus.png')} />
                        </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detail}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>Restaurant info</Text>
                <Text style={{
                    fontSize: 13,
                    color: 'gray',
                }}>
Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
            </View>
            <TouchableOpacity style={styles.btnadd}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                }}
                >Add to cart</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    plusminus:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,

    },
    imagedelivery:
    {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
    },
    delivery:
    {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    plusminusdelivery:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 10,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  btnadd: {
    backgroundColor: '#F1B000',

    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  },
  containerTop: {
    width: '100%',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    width: '100%',
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});