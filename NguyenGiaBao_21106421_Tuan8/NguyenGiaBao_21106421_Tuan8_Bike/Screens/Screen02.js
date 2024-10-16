
import { StyleSheet, Text, View,FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native';

const bikes = [{
       id:1,
       name:"Pinarello",
       image:"https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__",
       price:1800
    },
    {
        id:2,
        name:"Pina Mountai",
        image:"https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__",
        price:1800
     },
     {
        id:3,
        name:"Pina Bike",
        image:"https://s3-alpha-sig.figma.com/img/49d5/2b9b/68c70d4381b662e07d65fdb7c3846000?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jw693rQr1ai6bLTDZXvhcmLQwZuZvISbkW41FP84b3GWKvoUQOmyuIItr0p98foYqnNGPcRgdwy1Ft5FXuPBi7slNrxUdJZNWPXjJNFul3Hdel9jz5POkQk9i-xFmremJi35vbxobLTP6G-hwYFxx2nV0dTfrhUQqPxSG3HdKRaihm8hPZrv4hVKVUdTNweGb-n0VtM1TI-f9dpa4bOaSR7iugP~hpItf1eDjFnnDV9Y~RDMFJu7s-TGYwHk6KnaJeu-8vYlGPHnJUoRWhrCCh357~iUqGm4X5Q8u9msQBtD74U2vlwELktREf5PPT1wDaCAVVT7S2bj3EIQLoLgIQ__",
        price:1800
     },
     {
        id:4,
        name:"Pinarello",
        image:"https://s3-alpha-sig.figma.com/img/fdbf/d9b3/251a5a94adb31c5f3a0d6caf10fae43b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5I34mgZkiXj4EwBtfjNhGqtUZTfFFPucNM1NmFHhkp0s6H-DYMb0cGHmDHQMNiHgmbIANeZjefhfjslknoTtxKHPd09V8n-8KjI9KyW2Z4U3~wWW7sVxB8uBfmkCsAkJbG3J3AxquPKqdNmkANMFyxddvK2q7DJDMbEsLnBUrXidopHWnf3mh-VyQx5TBWndVTbqtxo~wYKMNoh0DPW-K30LcrMMjwv5Rx45Dhxy3XrWPkGdSESD7R2b4xWaniimbGZ9Ra~LI5di8muZpO5Yq~0mQpXotlWyL-kwLUdxKnx8Qrw~cOK0N-uve3wuwywIK6anyOpgO~weHvXlvfjnQ__",
        price:1800
     }
]
const Item =  ({item,navigation})=>(
    <TouchableOpacity onPress={()=>navigation.navigate('Screen03',{item})}>
    <View style={{
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        margin:20
    }}
    >   

        <Image  style={{
            height:150,
            width:150
        }}
         source={{uri:item.image}}/>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
    </View>
    </TouchableOpacity>
);
export default function Screen02({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{
                fontSize: 16,
                color:'red',
                width:'80%',
                justifyContent:'flex-start',
                marginTop:40,
            }}>
                The world’s Best Bike
            </Text>
            <View style={{
                flexDirection:'row',
                justifyContent:"space-between",
                width:'80%',
                alignItems:'center',
                marginTop:40,
            }} >
                <TouchableOpacity style={{
                    borderWidth:1,
                    borderRadius:5,
                    width:70,
                    alignItems:'center'
                }}>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth:1,
                    borderRadius:5,
                    width:70,
                    alignItems:'center'
                }}>
                    <Text>Roadbike</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth:1,
                    width:70,
                    borderRadius:5,
                    alignItems:'center'
                }}>
                    <Text>Mountain</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={bikes}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                    <Item item={item} navigation={navigation}/>
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