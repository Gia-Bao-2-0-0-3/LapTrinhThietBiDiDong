
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';



export default function Screen01({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 16,
            }}>
                A premium online store for sporter and their stylish choice
            </Text>
            <Image style={{
                height:300,
                width:300,
                borderRadius:20,
                backgroundColor:'#E941411A'


            }} source={require('../assets/Pinarello.png')} />
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}
            >
                POWER BIKE SHOP
            </Text>
            <TouchableOpacity style={{
                backgroundColor: 'red',
                borderRadius:20,
                width:'70%',
                alignItems:'center'
            }} onPress={()=>navigation.navigate('Screen02')}
            >
                <Text style={{
                    color: 'white',
                    padding:10
            }}>
                Get Stated
            </Text>
        </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});