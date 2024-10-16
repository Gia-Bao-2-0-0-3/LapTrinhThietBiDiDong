
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';



export default function Screen03({ route }) {
    const item = route.params.item;
    return (
        <View style={styles.container}>

            <Image style={{
                height: 400,
                width: 400,
                backgroundColor: '#E941411A'
            }} source={{ uri: item.image }} />
            <Text>{item.name}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center ',
                width:'80%',
                gap:20
            }}>

                <Text>15% OFF {item.price}</Text>
                <Text>2000$</Text>
            </View>
            <Text>Description</Text>
            <Text>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                width:'80%',
                gap:20
            }}>
                <Image source={require('../assets/Vector.png')}/>
                <TouchableOpacity style={{
                    borderRadius:10,
                    backgroundColor:'red',
                    padding:10,
                    width:'100%',
                }}>
                    <Text style={{
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
        justifyContent: 'flex-start',
    },
});