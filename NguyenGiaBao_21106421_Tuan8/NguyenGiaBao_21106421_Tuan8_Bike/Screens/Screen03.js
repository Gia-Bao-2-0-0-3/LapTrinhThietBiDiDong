
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';



export default function Screen03({ route }) {
    const item = route.params.item;
    return (
        <View style={styles.container}>

            <Image style={{
                height: 400,
                width: 400,
                backgroundColor: '#E941411A',
            }} source={{ uri: item.image }}
            resizeMode="contain" />
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                width:'100%'
            }}
            >{item.name}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center ',
                width:'100%',
                gap:20
            }}>

                <Text style={{
                    color: 'gray',
                    fontSize:15,
                }}>15% OFF | {(item.price*0.85)}$</Text>
                <Text style={{
                    textDecorationLine: 'line-through',
                    fontWeight:'bold',
                    fontSize:20,
                }}
                >{item.price}$</Text>
            </View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                width:'100%'
            }}>Description</Text>
            <Text style={{
                width:'100%'
            }}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                width:'100%',
                gap:20
            }}>
                <Image resizeMode="contain"  source={require('../assets/Vector.png')}/>
                <TouchableOpacity style={{
                    borderRadius:10,
                    backgroundColor:'red',
                    padding:10,
                    alignItems:'center',
                    flex:1,
                }}>
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:20,
                        color:'white'
                    }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View >


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        gap:20
    },
});