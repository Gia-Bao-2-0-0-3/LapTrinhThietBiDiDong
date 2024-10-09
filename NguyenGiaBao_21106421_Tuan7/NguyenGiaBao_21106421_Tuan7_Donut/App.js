import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './Screens/Screen01';
import Screen02 from './Screens/Screen02';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
    return ( 
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen01" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Screen01" component={Screen01} />
                <Stack.Screen name="Screen02" component={Screen02} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}